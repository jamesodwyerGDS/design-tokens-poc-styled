import React from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={{}}>
    <App />
  </ThemeProvider>
)
