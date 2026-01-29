import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { EncoderProvider } from './context/encoder.jsx'
import { TypeCodificationProvider } from './context/typeCondification.jsx'

createRoot(document.getElementById('root')).render(
  <TypeCodificationProvider>
    <EncoderProvider>
      <App />
    </EncoderProvider>,
  </TypeCodificationProvider>
)
