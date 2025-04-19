import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "../GlobalStyle/GlobalStyle.css"
import "../GlobalStyle/Ubunto.css"
import App from "./App.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
)
