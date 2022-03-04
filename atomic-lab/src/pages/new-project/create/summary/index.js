import React, { useState, useContext } from "react";
import CreateFormContext from "../../../../create-form-context";
import { useNavigate } from "react-router-dom";
import DataContext from "../../../../data-context";
import { postCreateProject, getActiveProjects } from "../../../../services";

import View from "./view";

function Index({ setStep, step }) {
  const data = useContext(CreateFormContext)[0];
  const [formData, setFormData] = useContext(CreateFormContext);
  const navigate = useNavigate();

  const { setActiveProjects } = useContext(DataContext);

  const [modalMessageStart, setModalMessageStart] = useState(false);
  const [modalMessageStartStatus, setModalMessageStartStatus] = useState(false);
  const [modalMessageStartData, setModalMessageStartData] = useState({});
  const [modalBuyCredits, setModalBuyCredit] = useState(false);
  const [dataModals, setDataModals] = useState([]);

  const [libertyLevel, setLibertyLevel] = useState("");

  const user_id = JSON.parse(
    sessionStorage?.getItem("atomiclab-user")
  ).user_id;

  const handleGetActiveProjects = () => {
    getActiveProjects(user_id).then(({ data }) => {
      setActiveProjects(data.active_projects);
    });
    setFormData({});
  };


  const handleStartProject = () => {
    JSON.safeStringify = (obj, indent = 2) => {
      let cache = [];
      const retVal = JSON.stringify(
        obj,
        (key, value) =>
          typeof value === "object" && value !== null
            ? cache.includes(value)
              ? undefined // Duplicate reference found, discard key
              : cache.push(value) && value // Store value in our collection
            : value,
        indent
      );
      cache = null;
      return retVal;
    };

    const formData = new FormData();

    data.img_array &&
      data.img_array.map((image) =>
        formData.append(image.name, image.formData)
      );
    data.references &&
      data.references.map((reference) =>
        formData.append(reference.name_file, reference.file)
      );

    const dataFin = { ...data, user_id: user_id };
    formData.append("jsondataRequest", JSON.safeStringify(dataFin));

    postCreateProject(formData)
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
    handleGetActiveProjects,
    modalBuyCredits,
    setModalBuyCredit, dataModals, setDataModals
  };

  return <View {...properties} />;
}

export default Index;
