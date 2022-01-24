import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import View from "./view";

function Index({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState(false);
  const [tourStep, setTourStep] = useState(0);
  const [tourActive, setTourActive] = useState(true);

  let location = useLocation();

  const redirectTo = (item) => {
    if (!tourStep) {
      navigate(item);
      setMenuActive(false);
    }
  };

  const properties = {
    redirectTo,
    menuActive,
    setMenuActive,
    setIsAuthenticated,
    location,
    tourStep,
    setTourStep,
    tourActive,
    setTourActive,
  };

  return <View {...properties} />;
}

export default Index;
