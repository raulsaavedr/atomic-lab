import React from "react";
import { useNavigate } from "react-router-dom";

import View from "./view";

function Index({ service }) {
  const navigate = useNavigate();


  const redirectToServicePage = () =>
    navigate(`/service/${service.title.replaceAll(" ", "-").toLowerCase()}`, {
      state: { service: service, },
    });

  const properties = {
    service,
    redirectToServicePage,
  };

  return <View {...properties} />;
}

export default Index;
