import React, { FC, useState } from "react";
import Button from "../../../components/Button";
import monimage from "../../../assets/monimage.png";

interface Step6Props {
  onNext: (data: string) => void;
}

const Step6: FC<Step6Props> = ({ onNext }) => {
  const [improvement, setImprovement] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setImprovement(e.target.value);
  };

  const handleNext = () => {
    if (improvement.trim() !== "") {
      onNext(improvement);
    } else {
      alert("Veuillez entrer vos suggestions d'amélioration avant de continuer.");
    }
  };

  return (
    <div className="max-w-6xl p-4 mx-auto">
      <div className="flex">
        <div className="w-2/6 pr-4">
          <img src={monimage} className="w-full" alt="Amélioration illustration" />
        </div>
        
        <div className="w-4/6 pl-4">
          <div className="mb-6">
            <h2 className="mb-2 text-lg text-gray-600">Amélioration</h2>
            <span className="text-3xl font-bold">
              Quelles sont les principales améliorations que vous souhaiteriez voir ?
            </span>
          </div>
          
          <div className="mb-8">
            <textarea
              value={improvement}
              onChange={handleChange}
              placeholder="Écrire ici"
              className="w-full h-32 p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          
          <div className="w-2/6">
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

export default Step6;