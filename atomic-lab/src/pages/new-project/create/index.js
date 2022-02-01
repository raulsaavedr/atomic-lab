import React, { useState } from "react";
import View from "./view";

function Index() {



  const [step, setStep] = useState(1);




  const properties = { step, setStep };

  return <View {...properties} />;
}

export default Index;
