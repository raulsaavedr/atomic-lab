import React from "react";
import { useNavigate } from "react-router-dom";
import View from "./view";

function Index({ setStep, step }) {
  const navigate = useNavigate();

  const redirectToService = () => navigate(`/service/redes-sociales`);


  const properties = { redirectToService, setStep, step };

  return <View {...properties} />;
}

export default Index;
