import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './card.jsx'

createRoot(document.getElementById('root')).render(
 <>
    <Card username="Priyanka"/>
    <Card username="Nandani"/>
    <App />
    </>

)
