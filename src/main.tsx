import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { HospitalContextProvider } from './context/HospitalContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HospitalContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HospitalContextProvider>
  </StrictMode>,
)
