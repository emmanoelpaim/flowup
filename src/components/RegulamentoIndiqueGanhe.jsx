import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function RegulamentoIndiqueGanhe() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: { xs: 5, md: 8 } }}>
      <Container maxWidth="md">
        <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 3, p: { xs: 3, md: 5 }, boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 12px 36px rgba(0,0,0,0.45)' : '0 16px 40px rgba(27, 63, 99, 0.16)' }}>
          <Stack spacing={2}>
            <Typography variant="h4" sx={{ color: (theme) => theme.palette.mode === 'dark' ? '#fff' : 'primary.main' }}>
              Regulamento — Indique e Ganhe
            </Typography>
            <Typography variant="body1" color="text.secondary">
              O programa Indique e Ganhe da FlowUp Digital recompensa quem indica novos clientes que contratem nossos serviços, conforme as regras abaixo.
            </Typography>
            <Typography variant="h6">Benefício</Typography>
            <Typography variant="body1" color="text.secondary">
              O indicador recebe o equivalente a 10% (dez por cento) do valor do contrato finalizado com o cliente indicado, pago uma única vez, após a confirmação do primeiro pagamento efetuado por esse cliente.
            </Typography>
            <Typography variant="h6">Condição de elegibilidade</Typography>
            <Typography variant="body1" color="text.secondary">
              O pagamento da bonificação depende da confirmação do próprio cliente, prestada por meio do formulário de pesquisa oficial enviado pela FlowUp Digital, no qual o cliente deve validar a indicação e as informações necessárias ao programa.
            </Typography>
            <Typography variant="h6">Disposições gerais</Typography>
            <Typography variant="body1" color="text.secondary">
              Contratos cancelados, não pagos ou com inadimplência podem não gerar direito à bonificação. A FlowUp Digital poderá solicitar documentação ou dados para comprovar a indicação e o vínculo contratual. O programa pode ser alterado ou encerrado mediante comunicação pelos canais oficiais.
            </Typography>
            <Typography variant="h6">Contato</Typography>
            <Typography variant="body1" color="text.secondary">
              Dúvidas sobre o regulamento podem ser esclarecidas pelos canais oficiais de atendimento da FlowUp Digital.
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
