import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import View from "./view";

function Index() {
  const navigate = useNavigate();

  const redirectToForm = () => navigate(`/service/create/form`);
  const redirectToSummary = () => navigate(`/service/create/summary`);

  const properties = { redirectToForm, redirectToSummary };

  return <View {...properties} />;
}

export default Index;
