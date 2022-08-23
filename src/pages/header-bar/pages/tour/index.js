import React from "react";
import View from "./view";

function Index({ setTourStep, tourStep, setTourActive, title, text, updateTour, rol }) {

  const numberSteps = rol === 1? 4 : 3
  const properties = { setTourStep, tourStep, setTourActive, title, text, updateTour, numberSteps };

  return <View {...properties} />;
}

export default Index;
