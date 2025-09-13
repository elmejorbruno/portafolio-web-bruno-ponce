import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { theme } from '../styleGlobal.jsx'
import { ThemeProvider } from 'styled-components'
import {  HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter>
        
        <App />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
