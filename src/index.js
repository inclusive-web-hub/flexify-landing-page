import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./stylesheets/styles.css"
import "./stylesheets/responsive.css"
import "./stylesheets/animation-text.css"
import "./stylesheets/header.css"
import "./App.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
