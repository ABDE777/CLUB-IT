import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { SpeedInsights } from "@vercel/speed-insights/react"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SpeedInsights /> {/* Ajout de Speed Insights ici */}
    <App />
  </React.StrictMode>
)
