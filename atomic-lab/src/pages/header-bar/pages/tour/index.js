import React from "react";
import View from "./view";

function Index({ setTourStep, tourStep, setTourActive, title, text }) {
  const properties = { setTourStep, tourStep, setTourActive, title, text };

  return <View {...properties} />;
}

export default Index;
