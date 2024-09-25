import { useState } from "react";
import Startpoint from "./components/Startpoint";

function Details() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 6));
  };

  return (
    <div>
      {(() => {
        switch (step) {
          case 0:
            return <Startpoint onNext={handleNext} />;
          // case 1:
          //   return <Step2 onNext={handleNext} />;
          // case 2:
          //   return <Step3 onNext={handleNext} />;
          // case 3:
          //   return <Step4 onNext={handleNext} />;
          // case 4:
          //   return <Step5 onNext={handleNext} />;
          // case 5:
          //   return <Endpoint />;
          default:
            return null;
        }
      })()}
    </div>
  );
}

export default Details;