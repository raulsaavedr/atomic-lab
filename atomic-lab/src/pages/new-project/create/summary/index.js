import React, { useState } from "react";
import View from "./view";

function Index({ setStep, step }) {

  const [modalMessage, setModalMessage] = useState(false);
  const [libertyLevel, setLibertyLevel] = useState("");
  const [startProject, setStartproject] = useState(false);


  const properties = {
    modalMessage,
    setModalMessage,
    libertyLevel,
    setLibertyLevel,
    startProject,
    setStartproject,
    setStep,
    step,
  };

  return <View {...properties} />;
}

export default Index;
