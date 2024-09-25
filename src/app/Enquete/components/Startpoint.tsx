import Button from "../../../components/Button";
import monimage from "../../../assets/monimage.png"
import { FC } from "react";

interface StartpointProps {
  onNext: () => void;
}

const Startpoint: FC<StartpointProps> = ({ onNext }) => (
  <div className="flex flex-col items-center justify-center mt-10">
    <h1 className="mb-10 text-4xl font-bold text-pretty">Enquête de satisfaction</h1>
    <p className="mb-5 text-lg">Aidez nous à améliorer nos services en nous faisant part de vos impressions. </p>
    <img src={monimage} className="w-2/5 mb-10 bg-cover h-2/5" alt="image"/>
    <Button label="Démarrer" className="px-7 font-semibold  w-1/5 py-2 rounded-full bg-[#FDEF42]"  onClick={onNext}/>
  </div>
);

export default Startpoint;