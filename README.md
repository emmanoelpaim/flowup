# FlowUp - Site de Marketing Digital

Site institucional da FlowUp em React + Material UI.

## Seções

- Banner rotatório
- Nossos Serviços
- Nossos Clientes
- Quem Somos
- Nossa Equipe
- Fale Conosco

## Logo

Coloque o arquivo do logo em `public/img/logo.png` para exibição no cabeçalho e no favicon. Se o logo não estiver disponível, o cabeçalho exibirá o texto "FlowUp".

## Desenvolvimento

```bash
npm install
npm run dev
```

Crie um **`.env`** na raiz (não versionado), copiando de `.env.example`:

- `VITE_RECAPTCHA_SITE_KEY` — chave **site** do reCAPTCHA (Google).
- `VITE_API_BASE_URL` — opcional no dev; se vazio, o Vite encaminha `/api` para `localhost:3001` (veja `vite.config.js`).

**Não commite o `.env`.**

## Build

```bash
npm run build
```

## Variáveis no GitHub (produção)

**Não coloque valores sensíveis no repositório.** Use **Settings** → **Environments** → **github-pages** → **Add environment secret** ou **Add environment variable**.

O workflow `.github/workflows/ci.yml` lê `secrets.*` e, se vazio, `vars.*` com o **mesmo nome**.

### O que entra no site (build do Vite)

Essas variáveis são embutidas no JavaScript público no momento do `npm run build` no GitHub Actions:

| Nome | Uso |
|------|-----|
| `VITE_RECAPTCHA_SITE_KEY` | Widget reCAPTCHA no formulário |
| `VITE_API_BASE_URL` | URL base da API de contato (ex. `https://api.seudominio.com`, **sem** barra no final). O front chama `POST {VITE_API_BASE_URL}/api/contato`. |

Se `VITE_API_BASE_URL` estiver vazio no build, o formulário usa só `/api/contato` (útil no dev com proxy; no GitHub Pages isso **não** aponta para um servidor, então em produção preencha a URL real da API).

### O que é só do servidor Node (`server/`)

Estas variáveis **não** podem ser “buscadas” pelo navegador a partir do GitHub: são lidas pelo **Node** em `process.env` (arquivo `server/.env` na máquina do servidor ou variáveis no painel da hospedagem). Guardar no GitHub serve para **não versionar** e para você copiar os mesmos nomes ao configurar Railway, VPS, etc.

| Nome (igual em `server/.env.example`) | Onde usar |
|----------------------------------------|-----------|
| `PORT` | Porta do Express na hospedagem |
| `GMAIL_USER` | Conta Gmail do envio |
| `GMAIL_APP_PASSWORD` | Senha de app do Gmail |
| `RECAPTCHA_SECRET_KEY` | Chave **secreta** do reCAPTCHA (validação no backend) |

O GitHub Pages **não executa** esse servidor. Você precisa de um host separado para `server/index.js` e aí define essas variáveis **lá** (com os mesmos valores que salvou como secrets no GitHub, se quiser centralizar a referência no GitHub).

### Resumo

1. No ambiente **github-pages**, cadastre as `VITE_*` para o build do site.
2. Cadastre também `GMAIL_*`, `RECAPTCHA_SECRET_KEY` e `PORT` como **secrets** no GitHub se quiser manter tudo documentado no repositório sem arquivo `.env` no código; na prática o **servidor** só enxerga essas chaves onde o Node rodar (painel do provedor ou `server/.env` no servidor).
3. Novo push na `main`/`master` (ou rodar o workflow) para publicar o site com as `VITE_*` atualizadas.

## Hospedagem no GitHub Pages (Actions)

1. Código na branch `main` ou `master`.
2. Variáveis de build configuradas no ambiente **github-pages**.
3. **Settings** → **Pages** com origem **GitHub Actions**.
