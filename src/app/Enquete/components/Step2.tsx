import { FC, useState } from "react";
import Button from "../../../components/Button";
import monimage from "../../../assets/monimage.png";

interface Step2Props {
  onNext: () => void;
}

const Step2: FC<Step2Props> = ({ onNext }) => {
  const [selectedRating, setSelectedRating] = useState<string | null>(null);

  const ratingOptions = [
    { value: "very-satisfied", label: "Trés satisfait", icon: "😃" },
    { value: "satisfied", label: "Satisfait", icon: "🙂" },
    { value: "somewhat-satisfied", label: "Peu satisfait", icon: "😐" },
    { value: "not-satisfied", label: "Pas satisfait", icon: "🙁" },
  ];

  const handleNext = () => {
    if (selectedRating) {
      onNext();
    } else {
      alert("Veuillez sélectionner une option avant de continuer.");
    }
  };

  return (
    <div className="flex max-w-6xl p-4 mx-auto">
      <div className="w-2/6 pr-4 mt-10">
        <img src={monimage} className="w-full" alt="Satisfaction survey illustration" />
      </div>
      
      <div className="w-4/6 pl-4">
        <div className="mb-6">
          <h2 className="mb-2 text-lg text-gray-600">Satisfaction générale</h2>
          <span className="text-2xl font-bold">
            À quel point êtes vous satisfait de nos services ?
          </span>
        </div>
        
        <div className="mb-8 space-y-4">
          {ratingOptions.map((option) => (
            <label
              key={option.value}
              className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                selectedRating === option.value ? 'border-green-500 bg-green-50' : 'border-gray-300'
              }`}
            >
              <input
                type="radio"
                name="satisfaction"
                value={option.value}
                checked={selectedRating === option.value}
                onChange={() => setSelectedRating(option.value)}
                className="sr-only"
              />
              <span className="mr-3 text-2xl">{option.icon}</span>
              <span className="text-lg">{option.label}</span>
            </label>
          ))}
        </div>
        
        <div>
          <Button
            label="Suivant"
            className="px-7 font-semibold w-1/5 py-2 rounded-full bg-[#FDEF42]"
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default Step2;