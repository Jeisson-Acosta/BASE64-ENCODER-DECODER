import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { FileProvider } from './context/file.jsx'
import { TypeCodificationProvider } from './context/typeCondification.jsx'

createRoot(document.getElementById('root')).render(
  <FileProvider>
    <TypeCodificationProvider>
      <App />
    </TypeCodificationProvider>
  </FileProvider>,
)
