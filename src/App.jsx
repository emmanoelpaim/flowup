import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import useMediaQuery from '@mui/material/useMediaQuery'
import useTheme from '@mui/material/styles/useTheme'
import DarkMode from '@mui/icons-material/DarkMode'
import LightMode from '@mui/icons-material/LightMode'
import Banner from './components/Banner'
import Servicos from './components/Servicos'
import Planos from './components/Planos'
import Clientes from './components/Clientes'
import QuemSomos from './components/QuemSomos'
import NossaEquipe from './components/NossaEquipe'
import FaleConosco from './components/FaleConosco'
import { useThemeMode } from './ThemeContext'
import MenuIcon from '@mui/icons-material/Menu'

const navItems = [
  { id: 'banner', label: 'Início' },
  { id: 'servicos', label: 'Nossos Serviços' },
  { id: 'planos', label: 'Planos' },
  { id: 'clientes', label: 'Nossos Clientes' },
  { id: 'quem-somos', label: 'Quem Somos' },
  { id: 'equipe', label: 'Nossa Equipe' },
  { id: 'contato', label: 'Fale Conosco' },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const { mode, toggleMode } = useThemeMode()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: 'background.paper', color: mode === 'dark' ? '#fff' : 'primary.main', boxShadow: 2 }}>
        <Toolbar sx={{ justifyContent: 'space-between', py: 0.5 }}>
          <Box component="a" href="#" onClick={(e) => { e.preventDefault(); scrollTo('banner') }} sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            {!logoError ? (
              <img
                src={mode === 'dark' ? `${import.meta.env.BASE_URL}img/logo.png` : `${import.meta.env.BASE_URL}img/logo.png`}
                alt="FlowUp"
                height={48}
                style={{ marginRight: 8 }}
                onError={() => setLogoError(true)}
              />
            ) : (
              <Typography variant="h6" sx={{ color: 'inherit', fontWeight: 700 }}>FlowUp</Typography>
            )}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <IconButton color="inherit" onClick={toggleMode} aria-label={mode === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro'}>
              {mode === 'light' ? <DarkMode /> : <LightMode />}
            </IconButton>
            {isMobile ? (
              <IconButton color="inherit" onClick={() => setDrawerOpen(true)} aria-label="menu">
                <MenuIcon />
              </IconButton>
            ) : (
              <>
                {navItems.map((item) => (
                  <Button key={item.id} color="inherit" onClick={() => scrollTo(item.id)}>
                    {item.label}
                  </Button>
                ))}
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List sx={{ width: 260, pt: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={() => { scrollTo(item.id); setDrawerOpen(false) }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main>
        <section id="banner">
          <Banner />
        </section>
        <section id="servicos">
          <Servicos />
        </section>
        <section id="planos">
          <Planos />
        </section>
        <section id="clientes">
          <Clientes />
        </section>
        <section id="quem-somos">
          <QuemSomos />
        </section>
        <section id="equipe">
          <NossaEquipe />
        </section>
        <section id="contato">
          <FaleConosco />
        </section>
      </main>
      <Box
        component="a"
        href="https://wa.me/5551980305426"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1300,
          width: 56,
          height: 56,
          borderRadius: '50%',
          bgcolor: '#25D366',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 3,
          '&:hover': { bgcolor: '#20bd5a' },
        }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </Box>
    </>
  )
}
