import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App1 from './Lotto.jsx'
import Lotto from "./Lotto.jsx";


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Lotto />
  // </StrictMode>,
)
