import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import View from "./view";

function Index() {
  const navigate = useNavigate();
  const [modalMessage, setModalMessage] = useState(false);
  const [libertyLevel, setLibertyLevel] = useState("");
  const [startProject, setStartproject] = useState(false);

  const redirectToSelection = () => navigate(`/service/create/selection`);

  const properties = {
    redirectToSelection,
    modalMessage,
    setModalMessage,
    libertyLevel,
    setLibertyLevel,
    startProject,
    setStartproject,
  };

  return <View {...properties} />;
}

export default Index;
