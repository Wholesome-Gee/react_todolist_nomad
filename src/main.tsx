import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './theme.tsx'

createRoot(document.getElementById('root')!).render(  
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
)
