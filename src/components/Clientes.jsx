import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActionArea from '@mui/material/CardActionArea'

const clientes = [
  {
    nome: 'Óptica Zarth',
    depoimento: 'A FlowUp transformou nossa presença digital. As vendas aumentaram muito e hoje conseguimos alcançar muito mais clientes.',
    handle: '@opticazarth',
    username: 'opticazarth',
    imgurl: 'img/zarth.jpg',
    url: 'https://www.instagram.com/opticazarth',
  },
  {
    nome: 'Optica Exclusive',
    depoimento: 'O trabalho da equipe foi incrível. Nossas vendas cresceram de forma que não imaginávamos. Super indicamos!',
    handle: '@opticaexclusivers',
    username: 'opticaexclusivers',
    imgurl: 'img/exclusivers.jpg',
    url: 'https://www.instagram.com/opticaexclusivers',
  },
  {
    nome: 'Cubo Play',
    depoimento: 'A FlowUp criou nosso site profissional, transmitindo a essência da nossa marca e facilitando que mais famílias nos encontrem online.',
    handle: '@cubo.play',
    username: 'cubo.play',
    imgurl: 'img/cubo.jpg',
    url: 'https://cuboplay.com.br/',
  },
  {
    nome: 'Realizar Financiamentos',
    depoimento: 'A FlowUp desenvolveu nosso site e a gestão dos leads. Hoje centralizamos as solicitações de forma organizada e convertemos mais clientes.',
    handle: '@realizarfinanciamentos',
    username: 'realizarfinanciamentos',
    imgurl: 'img/realizar.jpg',
    url: 'https://realizarfinanciamentos.com.br/',
  },
  {
    nome: 'Comer Bem',
    depoimento: 'A FlowUp criou nosso aplicativo do zero. Interface intuitiva, experiência fluida e hoje nossos usuários têm tudo na palma da mão.',
    handle: '',
    username: 'comerbem',
    imgurl: 'img/comerbem.webp',
    url: 'https://play.google.com/store/apps/details?id=br.com.comerbem.app&hl=pt_BR',
  },
]

export default function Clientes() {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container>
        <Typography variant="h4" align="center" fontWeight={700} gutterBottom sx={{ color: (theme) => theme.palette.mode === 'dark' ? '#fff' : 'primary.main' }}>
          Nossos Clientes
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ maxWidth: 560, mx: 'auto', mb: 4 }}>
          Empresas que confiam na FlowUp para crescer no digital.
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {clientes.map((cliente, i) => (
            <Grid item xs={12} sm={6} md={4} key={i} sx={{ display: 'flex' }}>
              <Card
                elevation={0}
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  '&:hover': { boxShadow: 2 },
                }}
              >
                <CardActionArea
                  href={cliente.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                >
                  <CardContent sx={{ py: 3, px: 3 }}>
                    <Box
                      component="img"
                      src={`${cliente.imgurl}`}
                      alt={cliente.nome}
                      sx={{
                        width: 72,
                        height: 72,
                        borderRadius: '50%',
                        objectFit: 'cover',
                        mx: 'auto',
                        mb: 2,
                        display: 'block',
                        bgcolor: 'action.hover',
                      }}
                    />
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {cliente.nome}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', mb: 1.5 }}>
                      "{cliente.depoimento}"
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {cliente.handle}
                    </Typography>
                    <Typography variant="caption" sx={{ mt: 1, display: 'block', color: (theme) => theme.palette.mode === 'dark' ? '#fff' : 'primary.main' }}>
                      Ver mais →
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
