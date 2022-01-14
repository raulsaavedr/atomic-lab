import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HeaderBar from "./pages/header-bar";
import Home from "./pages/home";
import Service from "./pages/service";
import ActiveProjects from "./pages/active-projects";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="service/:name" element={<Service />} />
        <Route path="active-projects" element={<ActiveProjects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
