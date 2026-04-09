import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, '.env') })

import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({
  origin: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept'],
  maxAge: 86400
}))
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ ok: true })
})

const gmailUser = process.env.GMAIL_USER?.trim()
const gmailPass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, '')?.trim()
const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY?.trim()
const recaptchaMinScore = Number.parseFloat(process.env.RECAPTCHA_MIN_SCORE ?? '0.5')

async function verificarRecaptcha(token) {
  if (!recaptchaSecret) return { ok: true }
  if (!token || typeof token !== 'string') {
    return { ok: false, erro: 'Confirme o reCAPTCHA.' }
  }
  const params = new URLSearchParams()
  params.set('secret', recaptchaSecret)
  params.set('response', token)
  const r = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params
  })
  const data = await r.json()
  if (!data.success) {
    return { ok: false, erro: 'reCAPTCHA inválido. Tente novamente.' }
  }
  if (typeof data.score === 'number' && !Number.isNaN(recaptchaMinScore)) {
    if (data.score < recaptchaMinScore) {
      return { ok: false, erro: 'Não foi possível confirmar o envio. Tente novamente.' }
    }
  }
  return { ok: true }
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: gmailUser,
    pass: gmailPass
  }
})

app.post('/api/contato', async (req, res, next) => {
  const { nome, email, telefone, mensagem, recaptchaToken } = req.body || {}
  if (!nome || !email || !mensagem) {
    return res.status(400).json({ ok: false, erro: 'Nome, e-mail e mensagem são obrigatórios.' })
  }
  const recaptchaResult = await verificarRecaptcha(recaptchaToken)
  if (!recaptchaResult.ok) {
    return res.status(400).json({ ok: false, erro: recaptchaResult.erro })
  }
  if (!gmailUser || !gmailPass) {
    return res.status(500).json({ ok: false, erro: 'Servidor sem configuração de e-mail.' })
  }
  const nomeS = String(nome)
  const emailS = String(email)
  const telefoneS = String(telefone || '-')
  const mensagemS = String(mensagem)
  try {
    await transporter.sendMail({
      from: gmailUser,
      to: 'flowup.digital2@gmail.com',
      replyTo: emailS,
      subject: 'Contato - FlowUp',
      text: `Nome: ${nomeS}\nE-mail: ${emailS}\nTelefone: ${telefoneS}\n\nMensagem:\n${mensagemS}`,
      html: `<p><strong>Nome:</strong> ${nomeS}</p><p><strong>E-mail:</strong> ${emailS}</p><p><strong>Telefone:</strong> ${telefoneS}</p><p><strong>Mensagem:</strong></p><p>${mensagemS.replace(/\n/g, '<br>')}</p>`
    })
    res.json({ ok: true })
  } catch (err) {
    console.error(err)
    const msg = process.env.NODE_ENV !== 'production' && err.message
      ? err.message
      : 'Falha ao enviar o e-mail. Tente novamente.'
    res.status(500).json({ ok: false, erro: msg })
  }
})

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ ok: false, erro: 'Erro interno do servidor.' })
})

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
