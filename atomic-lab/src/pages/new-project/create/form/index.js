import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import View from "./view";

function Index() {
  const navigate = useNavigate();

  const redirectToService = () => navigate(`/service/redes-sociales`);
  const redirectToSelection = () => navigate(`/service/create/selection`);

  const properties = { redirectToService, redirectToSelection };

  return <View {...properties} />;
}

export default Index;
