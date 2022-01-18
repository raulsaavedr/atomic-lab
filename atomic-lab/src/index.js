import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HeaderBar from "./pages/header-bar";
import Home from "./pages/home";
import Service from "./pages/service";
import ActiveProjects from "./pages/active-projects";
import NewProject from "./pages/new-project";
import FinishProjects from "./pages/finish-projects";
import StatusProject from "./pages/status-project";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="service/:name" element={<Service />} />
        <Route path="active-projects" element={<ActiveProjects />} />
        <Route path="new-project" element={<NewProject />} />
        <Route path="finish-projects" element={<FinishProjects />} />
        <Route path="status-project/:id" element={<StatusProject />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
