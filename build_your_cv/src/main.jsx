import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Summary } from './components/Summary'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>    
  </StrictMode>,
)
