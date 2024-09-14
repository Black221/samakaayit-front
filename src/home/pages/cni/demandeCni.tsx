import { useState } from "react";
import InputForm from "../../../components/InputForm";
import { GoSearch } from "react-icons/go";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Select from "../../../components/Select";
import dummyCni from "../../../data/dummycni";
import PiecesCni from "../../../data/dummyPiece";

import audio from "../../../assets/audio.png";
import InputFile from "../../../components/InputFile";
import RecapCNISection from "./recapitulatifCni";

const DemandeCni = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const navigate = useNavigate();


  return (
    <>
      <section className="h-auto bg-[#085F28] py-20 md:py-36 mb-12 md:mb-24">
        <div className="flex flex-col items-center justify-center px-4 space-y-6 text-white md:space-y-10">
          <h2 className="text-2xl font-bold text-center md:text-3xl lg:text-5xl">
            Découvrez tous les services disponibles
          </h2>
          <p className="max-w-lg text-base text-center md:text-lg lg:text-xl lg:max-w-2xl">
            Besoin d'un service en particulier ? Parcourez notre liste complète
            de services ou recherchez le et trouvez rapidement ce dont vous avez
            besoin.
          </p>
          <div className="flex items-center w-full max-w-xs gap-2 px-4 py-2 bg-white rounded-full lg:max-w-md">
            <InputForm
              label=""
              placeholder="Rechercher"
              className="w-full text-black"
              aria-label="Rechercher un service"
              onChange={(e) => e}
            />
            <GoSearch size={24} color="gray" onClick={() => alert("Recherche")} />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto my-5">
        <div className="flex items-center mb-6 text-green-600 cursor-pointer" onClick={()=> navigate(-1)}>
          <IoArrowBack size={20} />
          <span className="ml-2 text-sm md:text-base">
            Retour
          </span>
        </div>

        <div className="flex flex-col items-center justify-center lg:flex-row">
          {Array.from({ length: 3 }, (_, idx) => (
            <>
              <div
                key={`line-${idx}`}
                className={`h-0.5 w-full max-w-xs lg:w-32 ${
                  currentStep > idx ? "bg-[#00AF41]" : "bg-gray-300"
                }`}
              />
              <div
                key={`step-${idx}`}
                className={`border flex items-center justify-center w-12 h-12 rounded-full ${
                  currentStep === idx + 1
                    ? "bg-[#00AF41] text-white"
                    : "bg-white text-black"
                } border-[#00AF41]`}
              >
                {idx + 1}
              </div>
            </>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center mt-5 space-x-0 lg:flex-row lg:space-x-10">
          {["Remplir le formulaire", "Fournir les documents", "Récapitulatif"].map((step, idx) => (
            <div
              key={idx}
              className={`md:translate-x-10 text-sm text-center lg:text-left ${
                currentStep == idx + 1 ? "text-[#00AF41] font-bold" : ""
              }`}
            >
              {step}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start justify-between max-w-6xl mx-auto mt-28 lg:flex-row">
        <div className="w-full mb-8 ">
          <div className="flex flex-col items-start gap-5 mb-6 md:flex-row md:items-center">
            <div>
              <h1 className="mb-2 text-xl font-bold text-green-800 md:mb-4 md:text-2xl">
                {dummyCni.title}
              </h1>
              <p className="mb-4 text-sm text-gray-600 md:mb-8 md:text-base">
                {dummyCni.description}
              </p>
            </div>
            <div className="flex items-center justify-start gap-3 mt-4 ml-5 md:justify-center md:gap-5 md:-translate-y-10">
              <Select
                onChange={(e) => e}
                className="w-24 h-8 text-sm outline-none md:w-32 md:h-10 md:text-base"
                label=""
                options={["Wolof"]}
              />
              <img src={audio} alt="audio" className="w-8 h-8 md:w-10 md:h-10" />
            </div>
          </div>

          <form className="w-full px-4 mt-5 lg:px-0">
            {currentStep === 1 && (
              <div className="flex flex-col items-center justify-center w-full gap-10 lg:gap-20">
                <div className="flex flex-col items-center justify-center w-full gap-10 mb-16 lg:flex-row lg:gap-20">
                  <div className="flex flex-col items-center justify-center w-full gap-5 lg:w-1/2">
                    <InputForm
                      onChange={(e) => e}
                      label="Prénom"
                      placeholder="Prénom"
                      className="w-full border-b border-gray-400"
                    />
                    <InputForm
                      onChange={(e) => e}
                      label="Nom"
                      placeholder="Nom"
                      className="w-full border-b border-gray-400"
                    />
                    <Select
                      onChange={(e) => e}
                      className="w-full border-b border-gray-400"
                      label="Sexe"
                      options={["Masculin", "Féminin"]}
                    />
                    <InputForm
                      onChange={(e) => e}
                      label="Date de Naissance"
                      placeholder="dd-mm-yyyy"
                      className="w-full border-b border-gray-400"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center w-full gap-5 lg:w-1/2">
                    <InputForm
                      onChange={(e) => e}
                      label="Nationalité"
                      placeholder="Sénégalaise, Française..."
                      className="w-full border-b border-gray-400"
                    />
                    <InputForm
                      onChange={(e) => e}
                      label="Pays de Naissance"
                      placeholder="Pays de Naissance"
                      className="w-full border-b border-gray-400"
                    />
                    <InputForm
                      onChange={(e) => e}
                      label="Lieu de Résidence"
                      placeholder="Lieu de Résidence"
                      className="w-full border-b border-gray-400"
                    />
                    <Select
                      onChange={(e) => e}
                      className="w-full border-b border-gray-400"
                      label="Situation Matrimoniale"
                      options={["Célibataire", "Marié(e)", "Divorcé(e)", "Veuf(ve)"]}
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="flex flex-col items-start gap-10">
                <div>
                  <h2 className="text-xl font-bold">Liste des Pièces</h2>
                  {PiecesCni.map((piece) => (
                    <div
                      key={piece.id}
                      className="flex items-center justify-between w-full px-4 py-2 my-2 bg-gray-100 rounded-md"
                    >
                      <p>
                        {piece.id}. {piece.name}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-start justify-center w-full gap-5 lg:w-1/2">
                  <InputFile
                    type="file"
                    onChange={(e) => e}
                    label="Télécharger les fichiers"
                    className="w-full px-5 py-3 border border-gray-400 rounded-xl"
                  />
                  <span className="text-[#ccc] text-sm">
                    * La taille maximale de vos fichiers ne doit pas dépasser 10 MB
                  </span>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <RecapCNISection/>
            )}
          </form>

          {currentStep  && (
            <div className="flex items-center justify-start w-full mt-10 ml-5">
              <button
                type="button"
                className="py-3 text-white bg-green-600 rounded-3xl px-9"
                onClick={handleNextStep}
              >
                {currentStep != 3 ? "Suivant" : "Soumettre"}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DemandeCni;
