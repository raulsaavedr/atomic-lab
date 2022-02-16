import React, { useEffect, useState } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { USER_DATA } from "./pages/constats";

import AuthContext from "./auth-context";
import CreateFormContext from "./create-form-context";
import DataContext from "./data-context";

import Login from "./pages/login";
import SignUpEmail from "./pages/signUp/signup-email";
import SignUp from "./pages/signUp";
import HeaderBar from "./pages/header-bar";
import Home from "./pages/home";
import Service from "./pages/service";
import ActiveProjects from "./pages/active-projects";
import NewProject from "./pages/new-project";
import FinishProjects from "./pages/finish-projects";
import StatusProject from "./pages/status-project";
import Profile from "./pages/header-bar/pages/profile";
import Brands from "./pages/header-bar/pages/brands";
import BrandsForm from "./pages/header-bar/pages/brands/brands-form";
import Attached from "./pages/header-bar/pages/attached";
import Team from "./pages/header-bar/pages/team";
import Configuration from "./pages/header-bar/pages/configuration";
import HelpSupport from "./pages/header-bar/pages/help-support";
import RecoverPassword from "./pages/recover-password";
import RecoverPasswordEmail from "./pages/recover-password/send-email";
import Onboarding from "./pages/onboarding";
import Reviews from "./pages/reviews";

import Create from "./pages/new-project/create";

import "./app.scss";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({});

  function toggleAuthenticated() {
    setIsAuthenticated((isAuthenticated) => !isAuthenticated);
  }

  const [dataAll, setDataAll] = useState([]);

  useEffect(() => {

    setIsAuthenticated(sessionStorage.getItem('atomiclab-user') ? true : false)

  }, []);




  return (
    <div className="app">
      <DataContext.Provider value={{ dataAll, setDataAll }}>
        <HashRouter>
          {isAuthenticated && !USER_DATA.onboarding && (
            <HeaderBar setIsAuthenticated={setIsAuthenticated} />
          )}

          <Routes>
            {isAuthenticated ? (
              <>
                <Route path="/" element={<Home />} />

                <Route path="active-projects" element={<ActiveProjects />} />
                <Route path="new-project" element={<NewProject />} />
                <Route path="finish-projects" element={<FinishProjects />} />
                <Route path="status-project/:id" element={<StatusProject />} />

                <Route
                  path="service/create"
                  element={
                    <CreateFormContext.Provider value={[formData, setFormData]}>
                      <Create />
                    </CreateFormContext.Provider>
                  }
                />

                <Route
                  path="service/:name"
                  element={
                    <CreateFormContext.Provider value={[formData, setFormData]}>
                      <Service />
                    </CreateFormContext.Provider>
                  }
                />

                <Route path="profile" element={<Profile data={dataAll} />} />
                <Route path="brands" element={<Brands data={dataAll} />} />
                <Route
                  path="brands/brands-form/:id"
                  element={<BrandsForm data={dataAll} />}
                />
                <Route path="brands/brands-form" element={<BrandsForm />} />
                <Route path="attached" element={<Attached data={dataAll} />} />
                <Route path="team" element={<Team data={dataAll} />} />
                <Route path="configuration" element={<Configuration />} />
                <Route path="help-support" element={<HelpSupport />} />
                <Route path="onboarding" element={<Onboarding />} />
                <Route path="reviews/:id" element={<Reviews />} />
              </>
            ) : (
              <>
                <Route
                  path="/"
                  element={
                    <AuthContext.Provider
                      value={{ isAuthenticated, toggleAuthenticated }}
                    >
                      <Login />
                    </AuthContext.Provider>
                  }
                />

                <Route path="/sing-up/email" element={<SignUpEmail />} />
                <Route path="/sing-up" element={<SignUp />} />
                <Route path="/recover-password" element={<RecoverPassword />} />
                <Route
                  path="/recover-password/email"
                  element={<RecoverPasswordEmail />}
                />
              </>
            )}
          </Routes>
        </HashRouter>
      </DataContext.Provider>
    </div>
  );
}

export default App;
