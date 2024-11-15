import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.jsx'
import EditUser from '../luis/EditUser.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <EditUser></EditUser>
    <App />
  </StrictMode>,
)
