import React from "react";
import { useParams } from "react-router-dom";
import View from "./view";

function Index() {
  const { id } = useParams();

  const properties = { id };

  return <View {...properties} />;
}

export default Index;
