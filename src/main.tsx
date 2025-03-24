import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './theme.tsx'
import { RecoilRoot } from 'recoil'
import React from 'react';

createRoot(document.getElementById('root')!).render(  
  <ThemeProvider theme={darkTheme}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </ThemeProvider>
)
