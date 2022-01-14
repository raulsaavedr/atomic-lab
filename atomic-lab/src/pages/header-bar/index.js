import React from "react";
import { useNavigate } from "react-router-dom";
import View from "./view";

function Index() {
  const navigate = useNavigate();

  const redirectTo = (item) => navigate(item);

  const properties = { redirectTo };

  return <View {...properties} />;
}

export default Index;
