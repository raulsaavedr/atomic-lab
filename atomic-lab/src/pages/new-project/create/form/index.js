import React from "react";
import { useNavigate } from "react-router-dom";
import View from "./view";

function Index({ setStep, step, serviceData }) {
  const navigate = useNavigate();

  const redirectToService = () => navigate(`/service/${serviceData}`, {
    state: { service: serviceData },
  });


  const properties = { redirectToService, setStep, step };

  return <View {...properties} />;
}

export default Index;
