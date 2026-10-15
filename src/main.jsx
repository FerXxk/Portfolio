import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import gsap from 'gsap'
import './index.css'
import App from './App.jsx'

// Reduced motion: every GSAP animation finishes almost instantly instead of playing
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) gsap.globalTimeline.timeScale(100)

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
