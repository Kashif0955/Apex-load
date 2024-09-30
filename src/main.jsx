import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'node_modules/antd/dist/reset.css';








createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
