import React, { useState, useContext, useEffect } from "react";
import CreateFormContext from "../../create-form-context";
import DataContext from "../../data-context";
import { useLocation, useNavigate } from "react-router-dom";
import { SERVICES_DATA } from "../constants";

import View from "./view";

function Index() {
  let location = useLocation();
  const navigate = useNavigate();

  const [serviceData] = useState(SERVICES_DATA.filter((service) => service.title_id === location?.state?.service)[0]);
  const [typePublication, setTypePublication] = useState("");
  const [typeManual, setTypeManual] = useState("");
  const [modalPriceTotal, setModalPriceTotal] = useState(0);
  const [modalMessage, setModalMessage] = useState(true);
  const [selectType, setSelectType] = useState("");
  const [socialNetwork, setSocialNetwork] = useState("");




  const {
    dataAll,
    brands
  } = useContext(DataContext);

  const data = useContext(CreateFormContext)[0];
  const [formData, setFormData] = useContext(CreateFormContext);



  useEffect(() => {

    setFormData({ ...formData, project_price: serviceData?.price?.basic[0].price, project_type: serviceData.title })


    let sum = 0;
    serviceData?.price?.basic.map((price) => (sum = price.price + sum));
    setModalPriceTotal(sum);
  }, []);

  const redirectToHome = () => navigate(`/new-project`);
  const redirectToForm = () => navigate(`/service/create`, {
    state: { service: location?.state?.service },
  });

  const properties = {
    serviceData,
    typePublication,
    setTypePublication,
    typeManual,
    setTypeManual,
    redirectToHome,
    modalPriceTotal,
    redirectToForm,
    selectType,
    setSelectType,
    modalMessage,
    setModalMessage,
    socialNetwork,
    setSocialNetwork,
    dataAll,
    brands,
    data,
    formData,
    setFormData,
    navigate
  };

  return <View {...properties} />;
}

export default Index;
