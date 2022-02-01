import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import View from "./view";

function Index() {
  let location = useLocation();
  const navigate = useNavigate();

  const [serviceData] = useState(location?.state?.service);
  const [typePublication, setTypePublication] = useState("");
  const [typeManual, setTypeManual] = useState("");
  const [modalPriceTotal, setModalPriceTotal] = useState(0);
  const [modalMessage, setModalMessage] = useState(true);
  const [selectType, setSelectType] = useState("");
  const [socialNetwork, setSocialNetwork] = useState("");

  useEffect(() => {
    let sum = 0;
    serviceData?.price?.basic.map((price) => (sum = price.price + sum));
    setModalPriceTotal(sum);
  }, []);

  const redirectToHome = () => navigate(`/`);
  const redirectToForm = () => navigate(`/service/create`);

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
    socialNetwork, setSocialNetwork
  };

  return <View {...properties} />;
}

export default Index;
