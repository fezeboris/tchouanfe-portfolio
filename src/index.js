import React from 'react'
import ReactDom from 'react-dom'

import App from './App'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'

ReactDom.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
