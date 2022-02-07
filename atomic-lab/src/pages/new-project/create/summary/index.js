import React, { useState, useContext } from "react";
import CreateFormContext from "../../../../create-form-context";
import { useNavigate } from "react-router-dom";
import DataContext from "../../../../data-context";
import { getDataUser, postCreateProject } from "../../../../services";

import View from "./view";

function Index({ setStep, step }) {
  const data = useContext(CreateFormContext)[0];
  const [formData, setFormData] = useContext(CreateFormContext);
  const navigate = useNavigate();

  const { dataAll, setDataAll } = useContext(DataContext);

  const [modalMessageStart, setModalMessageStart] = useState(false);
  const [modalMessageStartStatus, setModalMessageStartStatus] = useState(false);
  const [modalMessageStartData, setModalMessageStartData] = useState({});

  const [libertyLevel, setLibertyLevel] = useState("");

  const handleGetDataUser = () => {
    getDataUser(1).then((data) => {
      setDataAll(data);
    });
  };

  const handleStartProject = () => {



    console.log(data)

    postCreateProject({ ...data, user_id: dataAll.user[0].id })
      .then((res) => {
        setModalMessageStartStatus(true);
        setModalMessageStartData({
          type: "ok",
          message: "¡FELICITACIONES!",
          subMessage: "¡Tu proyecto se ha iniciado exitosamente!",
        });
      })
      .catch((error) => {
        setModalMessageStartStatus(true);
        setModalMessageStartData({
          type: "error",
          message: "¡ERROR!",
          subMessage: "Hubo un error :(, intente de nuevo",
        });
      });
  };

  const properties = {
    modalMessageStart,
    setModalMessageStart,
    modalMessageStartStatus,
    setModalMessageStartStatus,
    libertyLevel,
    setLibertyLevel,
    setStep,
    step,
    handleStartProject,
    data,
    formData,
    setFormData,
    navigate,
    modalMessageStartData,
    handleGetDataUser,
  };

  return <View {...properties} />;
}

export default Index;
