import React from "react";
import { useNavigate } from "react-router-dom";
import View from "./view";

function Index() {
  const navigate = useNavigate();

  const redirectToSelection = () => navigate(`/service/create/selection`);

  const properties = { redirectToSelection };

  return <View {...properties} />;
}

export default Index;
