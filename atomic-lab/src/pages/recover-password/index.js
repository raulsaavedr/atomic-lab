import React from "react";
import { useNavigate } from "react-router-dom";
import View from "./view";

function Index({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const redirectTo = (item) => {
    navigate(item);
  };

  const properties = { setIsAuthenticated, redirectTo };

  return <View {...properties} />;
}

export default Index;
