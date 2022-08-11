import React, { useState, useContext } from "react";
import CreateFormContext from "../../../../create-form-context";
import { useNavigate } from "react-router-dom";
import DataContext from "../../../../data-context";
import {
  postCreateProject,
  updateCreditsUser,
  getDataUser,
  getAllProjects,
} from "../../../../services";
import { SUMMARY_OPTIONS } from "../../../constants";

import View from "./view";

function Index({ setStep, step }) {
  const data = useContext(CreateFormContext)[0];
  const [formData, setFormData] = useContext(CreateFormContext);
  const navigate = useNavigate();

  const { userData, setUserData, setAllProjects } = useContext(DataContext);

  const [modalMessageStart, setModalMessageStart] = useState(false);
  const [modalMessageStartStatus, setModalMessageStartStatus] = useState(false);
  const [modalMessageStartData, setModalMessageStartData] = useState({});
  const [modalBuyCredits, setModalBuyCredit] = useState(false);
  const [dataModals, setDataModals] = useState([]);
  const [fCustom, setFCustom] = useState(null);
  const [tCustom, setTCustom] = useState(null);
  const [timePrice, setTimePrice] = useState({
    price: SUMMARY_OPTIONS["tiempo"].options[0].price,
    text: SUMMARY_OPTIONS["tiempo"].options[0].text,
  });
  const [formatPrice, setFormatPrice] = useState({
    price: SUMMARY_OPTIONS["formato"].options[0].price,
    text: SUMMARY_OPTIONS["formato"].options[0].text,
  });
  const [reviewPrice, setReviewPrice] = useState({
    price: SUMMARY_OPTIONS["revisiones"].options[0].price,
    text: SUMMARY_OPTIONS["revisiones"].options[0].text,
  });
  const [sizePrice, setSizePrice] = useState({
    price: SUMMARY_OPTIONS["tamaño"].options[0].price,
    text: SUMMARY_OPTIONS["tamaño"].options[0].text,
  });
  const [editPrice, setEditPrice] = useState({
    price: SUMMARY_OPTIONS["editables"].options[0].price,
    text: SUMMARY_OPTIONS["editables"].options[0].text,
  });

  const getTotalProject = () => {
    return (
      parseInt(formData.project_price) +
      parseInt(timePrice.price) +
      parseInt(formatPrice.price) +
      parseInt(reviewPrice.price) +
      parseInt(sizePrice.price) +
      parseInt(editPrice.price)
    );
  };

  const [libertyLevel, setLibertyLevel] = useState("");

  const user_id = JSON.parse(sessionStorage?.getItem("atomiclab-user")).user_id;

  const handleGetActiveProjects = () => {
    setFormData({});

    navigate("/projects-active", {
      state: { new_project: true },
    });
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

    const dataFin = {
      ...data,
      user_id: user_id,
      costo_base: getTotalProject(),
      tiempo_entrega: timePrice.text,
      formato_entrega: formatPrice.text,
      revisiones: reviewPrice.text,
      tamaño: sizePrice.text,
      archivos_editables: editPrice.text,
      ...(fCustom && { f_custom: fCustom }),
      ...(tCustom && { t_custom: tCustom }),
    };
    formData.append("jsondataRequest", JSON.safeStringify(dataFin));

    postCreateProject(formData)
      .then((res) => {
        updateCreditsUser({
          user_id: user_id,
          value: parseInt(userData.credits) - getTotalProject(),
        }).then((res) => {
          getDataUser(user_id).then(({ data }) => {
            setUserData(data.user[0]);
          });
        });

        getAllProjects(user_id).then(({ data }) => {
          setAllProjects(data.response);
        });

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
    modalMessageStartData,
    handleGetActiveProjects,
    modalBuyCredits,
    setModalBuyCredit,
    dataModals,
    setDataModals,
    timePrice,
    setTimePrice,
    formatPrice,
    setFormatPrice,
    reviewPrice,
    setReviewPrice,
    sizePrice,
    setSizePrice,
    editPrice,
    setEditPrice,
    getTotalProject,
    setFCustom,
    setTCustom,
  };

  return <View {...properties} />;
}

export default Index;
