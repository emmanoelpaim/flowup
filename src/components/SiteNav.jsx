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
import MenuIcon from '@mui/icons-material/Menu'
import { useThemeMode } from '../ThemeContext'

export const siteNavItems = [
  { id: 'banner', label: 'Início' },
  { id: 'servicos', label: 'Nossos Serviços' },
  { id: 'planos', label: 'Planos' },
  { id: 'clientes', label: 'Nossos Clientes' },
  { id: 'quem-somos', label: 'Quem Somos' },
  { id: 'equipe', label: 'Nossa Equipe' },
  { id: 'contato', label: 'Fale Conosco' },
]

const base = import.meta.env.BASE_URL

function sectionHref(id) {
  const root = base.endsWith('/') ? base.slice(0, -1) : base
  return `${root || ''}/#${id}`
}

export default function SiteNav() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const { mode, toggleMode } = useThemeMode()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: 'background.paper', color: mode === 'dark' ? '#fff' : 'primary.main', boxShadow: 2 }}>
        <Toolbar sx={{ justifyContent: 'space-between', py: 0.5 }}>
          <Box component="a" href={sectionHref('banner')} sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            {!logoError ? (
              <img
                src={`${base}img/logo.png`}
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
                <Button color="inherit" component="a" href={`${base}linktree`}>
                  Link Tree
                </Button>
                <Button color="inherit" component="a" href={`${base}lgpd`}>
                  LGPD
                </Button>
                {siteNavItems.map((item) => (
                  <Button key={item.id} color="inherit" component="a" href={sectionHref(item.id)}>
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
          <ListItem disablePadding>
            <ListItemButton component="a" href={`${base}linktree`} onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="Link Tree" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href={`${base}lgpd`} onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="LGPD" />
            </ListItemButton>
          </ListItem>
          {siteNavItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton component="a" href={sectionHref(item.id)} onClick={() => setDrawerOpen(false)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}
