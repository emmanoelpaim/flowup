import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { alpha } from '@mui/material/styles'

const slides = [
  {
    title: 'Aceleramos o crescimento do seu negócio',
    subtitle: 'Estratégias de marketing digital com foco em resultados mensuráveis.',
    cta: 'Conheça nossos serviços',
    target: 'servicos',
    image: `${import.meta.env.BASE_URL}img/banner1.jpeg`,
  },
  {
    title: 'Indique e Ganhe',
    subtitle: 'Indique a FlowUp e ganhe benefícios ao conectar novos clientes ao nosso time.',
    cta: 'Mais informações',
    target: 'contato',
    image: `${import.meta.env.BASE_URL}img/banner2.jpeg`,
  },
  /*{
    title: 'Tráfego pago e orgânico que converte',
    subtitle: 'Google Ads, Meta Ads e SEO para levar mais clientes até você.',
    cta: 'Fale com a gente',
    target: 'contato',
    image: `${import.meta.env.BASE_URL}img/banner2.jpeg`,
  },*/
  {
    title: 'Dados e criatividade trabalhando juntos',
    subtitle: 'Análise e conteúdo para decisões mais inteligentes.',
    cta: 'Saiba mais',
    target: 'servicos',
    image: `${import.meta.env.BASE_URL}img/banner3.jpeg`,
  },
]

export default function Banner() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    slides.forEach((s) => {
      if (s.image) {
        const img = new Image()
        img.src = s.image
      }
    })
  }, [])

  const slide = slides[index]

  return (
    <Box
      sx={{
        width: '100%',
        boxSizing: 'border-box',
        height: { xs: 'clamp(440px, 78vh, 640px)', md: 'clamp(480px, 72vh, 720px)' },
        minHeight: { xs: 'clamp(440px, 78vh, 640px)', md: 'clamp(480px, 72vh, 720px)' },
        py: { xs: 6, md: 8 },
        px: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
        bgcolor: '#235F45',
        backgroundImage: slide.image
          ? `linear-gradient(135deg, ${alpha('#235F45', 0.88)} 0%, ${alpha('#235F45', 0.75)} 50%, ${alpha('#C7E1D1', 0.8)} 100%), url(${slide.image})`
          : `linear-gradient(135deg, ${alpha('#235F45', 0.92)} 0%, ${alpha('#C7E1D1', 0.85)} 100%)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 720 }}>
        <Typography variant="h3" component="h1" fontWeight={700} gutterBottom sx={{ typography: { xs: 'h4', md: 'h3' } }}>
          {slide.title}
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.95, mb: 3, fontWeight: 400 }}>
          {slide.subtitle}
        </Typography>
        <Button
          variant="contained"
          size="large"
          href={`#${slide.target}`}
          onClick={(e) => { e.preventDefault(); document.getElementById(slide.target)?.scrollIntoView({ behavior: 'smooth' }) }}
          sx={{
            bgcolor: 'background.paper',
            color: (theme) => theme.palette.mode === 'dark' ? '#fff' : 'primary.main',
          }}
        >
          {slide.cta}
        </Button>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 0.75,
        }}
      >
        {slides.map((_, i) => (
          <Box
            key={i}
            onClick={() => setIndex(i)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              bgcolor: (theme) => index === i ? theme.palette.background.paper : alpha(theme.palette.background.paper, 0.5),
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          />
        ))}
      </Box>
    </Box>
  )
}
