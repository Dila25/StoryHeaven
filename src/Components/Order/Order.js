import React, { useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepBank from "./components/StepBank";
import "./components/step.css";
function Order() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <div className="fullbody">
        <div className="stepper">
          <div className={`step ${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`step ${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`step ${step >= 3 ? "active" : ""}`}>3</div>
          <div className={`step ${step >= 4 ? "active" : ""}`}>4</div>
        </div>
      </div>

      <div className="form-container">
        <div className="fullbody">
          {step === 1 && <StepOne nextStep={nextStep} />}
          {step === 2 && <StepBank nextStep={nextStep} prevStep={prevStep} />}
          {step === 3 && <StepTwo nextStep={nextStep} prevStep={prevStep} />}
          {step === 4 && <StepThree prevStep={prevStep} />}
        </div>
      </div>
    </div>
  );
}

export default Order;
