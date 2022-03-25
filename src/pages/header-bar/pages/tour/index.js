import React from "react";
import View from "./view";

function Index({ setTourStep, tourStep, setTourActive, title, text, updateTour }) {
  const properties = { setTourStep, tourStep, setTourActive, title, text, updateTour };

  return <View {...properties} />;
}

export default Index;
