import React from "react";
import { BrowserRouter } from "react-router-dom";
import IndexRouter from "./router/IndexRouter";
import "./App.css";
export default function App() {
  return (
    <BrowserRouter>
      <IndexRouter></IndexRouter>
    </BrowserRouter>
  );
}
