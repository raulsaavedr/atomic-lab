import React from "react";
import Form from "./form";
import Selection from "./selection";
import Summary from "./summary";
import "./styles.scss";

function View({ step, setStep }) {
  return (
    <div>
      {step === 1 && <Form setStep={setStep} step={step} />}
      {step === 2 && <Selection setStep={setStep} step={step} />}
      {step === 3 && <Summary setStep={setStep} step={step} />}
    </div>
  );
}

export default View;
