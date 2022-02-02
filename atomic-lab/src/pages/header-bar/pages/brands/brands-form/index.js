import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import View from "./view";

function Index({ data }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const redirectTo = (route) => navigate(route);

  const properties = { id, data, redirectTo };

  return <View {...properties} />;
}

export default Index;
