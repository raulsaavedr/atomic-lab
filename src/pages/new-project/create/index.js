import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import View from "./view";

function Index() {

  let location = useLocation();

  const [step, setStep] = useState(1);
  const [serviceData] = useState(location?.state?.service);



  const properties = { step, setStep, serviceData };

  return <View {...properties} />;
}

export default Index;
