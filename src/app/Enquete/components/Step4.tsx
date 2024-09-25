import { FC, useState } from "react";
import Button from "../../../components/Button";
import monimage from "../../../assets/monimage.png";

interface Step4Props {
  onNext: () => void;
}

const Step4: FC<Step4Props> = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleNext = () => {
    if (selectedOption) {
      onNext();
    } else {
      alert("Veuillez sélectionner une option avant de continuer.");
    }
  };

  return (
    <div className="max-w-6xl p-4 mx-auto">
     
      <div className="flex">
        <div className="w-2/6 pr-4">
          <img src={monimage} className="w-full" alt="Portal usage illustration" />
        </div>
        
        <div className="w-4/6 pl-4">
          <div className="mb-6">
            <h2 className="mb-2 text-lg text-gray-600">Spécificité des services</h2>
            <span className="text-3xl font-bold">
            Etes-vous satisfait du délai de traitement de vos demandes ?
            </span>
          </div>
          
          <div className="mb-8 space-y-4">
            {["Oui", "Non"].map((option) => (
              <label
                key={option}
                className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                  selectedOption === option ? 'border-green-500 bg-green-50' : 'border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="portalUsage"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => setSelectedOption(option)}
                  className="mr-3"
                />
                <span className="text-lg">{option}</span>
              </label>
            ))}
          </div>
          
          <div>
            <Button
              label="Suivant"
              className="px-7 font-semibold py-2 rounded-full bg-[#FDEF42]"
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;