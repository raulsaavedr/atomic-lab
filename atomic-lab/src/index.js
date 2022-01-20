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
import CreateForm from "./pages/new-project/create/form";
import CreateSelection from "./pages/new-project/create/selection";
import CreateSummary from "./pages/new-project/create/summary";
import Profile from "./pages/header-bar/pages/profile";
import Brands from "./pages/header-bar/pages/brands";
import BrandsForm from "./pages/header-bar/pages/brands/brands-form";
import Attached from "./pages/header-bar/pages/attached";
import Team from "./pages/header-bar/pages/team";
import Configuration from "./pages/header-bar/pages/configuration";
import HelpSupport from "./pages/header-bar/pages/help-support";

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
        <Route path="service/create/form" element={<CreateForm />} />
        <Route path="service/create/selection" element={<CreateSelection />} />
        <Route path="service/create/summary" element={<CreateSummary />} />

        <Route path="profile" element={<Profile />} />
        <Route path="brands" element={<Brands />} />
        <Route path="brands/brands-form" element={<BrandsForm />} />
        <Route path="attached" element={<Attached />} />
        <Route path="team" element={<Team />} />
        <Route path="configuration" element={<Configuration />} />
        <Route path="help-support" element={<HelpSupport />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
