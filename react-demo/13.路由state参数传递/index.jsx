import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const react = ReactDOM.createRoot(document.querySelector('#root'));
react.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);