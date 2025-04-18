import { useState } from "react";
import Startpoint from "./components/Startpoint";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import Step6 from "./components/Step6";
import Endtpoint from "./components/Endpoint";

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
          case 1:
            return <Step2 onNext={handleNext} />;
          case 2:
            return <Step3 onNext={handleNext} />;
          case 3:
            return <Step4 onNext={handleNext} />;
          case 4:
            return <Step5 onNext={handleNext} />;
          case 5:
            return <Step6 onNext={handleNext} />;
          case 6:
            return <Endtpoint />;
          default:
            return null;
        }
      })()}
    </div>
  );
}

export default Details;