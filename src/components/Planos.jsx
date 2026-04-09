import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

export default function Planos() {
  const plans = [
    {
      title: 'Starter Content',
      price: 'R$ 900/mês',
      description: 'Ideal para negócios locais que precisam começar a se posicionar.',
      includes: [
        'Planejamento estratégico mensal',
        '8 posts feed (arte ou carrossel)',
        '8 legendas estratégicas',
        '4 roteiros de stories',
        'Calendário editorial',
        '1 reunião mensal'
      ],
      frequency: 'Frequência média: 2 posts por semana'
    },
    {
      title: 'Growth Content',
      price: 'R$ 1.500/mês',
      description: 'Ideal para quem quer gerar autoridade e atrair clientes constantemente.',
      includes: [
        'Planejamento estratégico mensal',
        '12 posts feed (carrossel, imagem ou misto)',
        '12 legendas estratégicas',
        '8 roteiros de stories',
        'Estratégia de posicionamento',
        'Análise de perfil',
        '1 reunião mensal'
      ],
      frequency: 'Frequência: 3 posts por semana',
      highlight: true,
      tag: 'Melhor custo benefício'
    },
    {
      title: 'Authority Content',
      price: 'R$ 2.200/mês',
      description: 'Ideal para profissionais liberais, clínicas e negócios online.',
      includes: [
        'Planejamento estratégico completo',
        '16 posts feed',
        '12 roteiros de stories',
        '4 roteiros de vídeo (Reels)',
        'Estratégia de autoridade',
        'Estudo de concorrência',
        'Relatório mensal simples',
        '2 reuniões mensais'
      ],
      frequency: 'Foco em construção de marca e percepção premium.'
    },
    {
      title: 'Content + Reels Performance',
      price: 'R$ 2.800/mês',
      description: 'Perfeito para quem quer crescer rápido no Instagram.',
      includes: [
        '12 posts feed',
        '8 roteiros de Reels',
        'Estratégia de conteúdo voltada à conversão',
        'Análise de métricas',
        'Planejamento quinzenal'
      ]
    }
  ]

  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography variant="h4" align="center" fontWeight={700} gutterBottom sx={{ color: (theme) => theme.palette.mode === 'dark' ? '#fff' : 'primary.main' }}>
          Planos
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ maxWidth: 560, mx: 'auto', mb: 4 }}>
          Planos e investimentos sob medida para o seu negócio. Entre em contato que vamos te ajudar a escolher o melhor plano para você.
        </Typography>
        <Grid container spacing={3}>
          {plans.map((plan, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{ position: 'relative', height: '100%', overflow: 'hidden', borderRadius: '12px' }}>
                {/*
                <Box
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: -36,
                    width: 140,
                    height: 28,
                    bgcolor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: 'rotate(45deg)',
                    zIndex: 2
                  }}
                >
                  <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.75rem' }}>
                    {discountPercent}% OFF
                  </Typography>
                </Box>
                */}
                <Card
                  sx={{
                    height: '100%',
                    border: '1px solid',
                    borderTopWidth: 3,
                    borderRadius: '12px',
                    borderColor: plan.highlight ? 'secondary.main' : 'divider',
                    boxShadow: (theme) => theme.palette.mode === 'dark'
                      ? '0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)'
                      : '0 12px 40px rgba(27, 63, 99, 0.18), 0 2px 8px rgba(0,0,0,0.08)',
                    transition: 'transform 0.2s, box-shadow 0.2s'
                  }}
                >
                  <CardContent>
                    {plan.tag && (
                      <Typography variant="overline" color="primary.light">
                        {plan.tag}
                      </Typography>
                    )}
                    <Typography variant="h6" gutterBottom>
                      {plan.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {plan.description}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, my: 2 }}>
                      {plan.includes.map((item, i) => (
                        <Typography key={i} component="li" variant="body2">
                          {item}
                        </Typography>
                      ))}
                    </Box>
                    {plan.frequency && (
                      <Typography variant="body2" color="text.secondary">
                        {plan.frequency}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box >
  )
}
