import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AnimatedBackground } from './components/AnimatedBackground.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimatedBackground />
    <App />
  </React.StrictMode>,
)
