import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/output.css'
import { TopPage } from './components/pages/TopPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TopPage />
  </StrictMode>,
)
