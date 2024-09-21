import wave from "../../../assets/wave.png";
import orangeMoney from "../../../assets/orangemoney.png";

const recapData = [
  { label: "Prénom", value: "Aminata" },
  { label: "Nom", value: "Ndoye" },
  { label: "Sexe", value: "Féminin" },
  { label: "Date de naissance", value: "21/03/1998" },
  { label: "Nationalité", value: "Sénégalaise" },
  { label: "Pays de naissance", value: "Pays de naissance" },
  { label: "Lieu de résidence", value: "Zac mbao, cité des forces françaises du cap vert" },
  { label: "Situation matrimoniale", value: "Célibataire" },
  { label: "Prénom du père", value: "Amadou" },
  { label: "Nom du père", value: "Ndoye" },
  { label: "Prénom de la mère", value: "Bineta" },
  { label: "Nom de la mère", value: "Faye" },
];

const piecesFournies = [
  "Papier de résidence",
  "Extrait de naissance"
];

const RecapCNISection = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full gap-10">
      <h2 className="text-xl font-bold">Vérifiez toutes vos Informations avant de valider</h2>
      
      <div className="w-full">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {recapData.map((item, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-sm text-gray-500">{item.label}</span>
              <span className="text-base font-medium">{item.value}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <h3 className="mb-2 text-lg font-semibold">Liste des pièces fournis</h3>
          <ul className="list-disc list-inside">
            {piecesFournies.map((piece, index) => (
              <li key={index} className="text-base">{piece}</li>
            ))}
          </ul>
        </div>
        
        <div className="w-2/6 mt-8">
          <h3 className="mb-4 text-lg font-semibold">Payer les frais de dossier</h3>
          <div className="space-y-4">
            <button className="w-full px-4 py-3 text-left border border-gray-300 rounded-xl">
              Payer par carte
            </button>
            <button className="flex items-center w-full px-4 py-3 text-left border border-gray-300 rounded-xl">
              <img src={wave} alt="Wave" className="w-24 h-20 mr-2 bg-cover" />
              Payer par wave
            </button>
            <button className="flex items-center w-full px-4 py-3 text-left border border-gray-300 rounded-xl">
              <img src={orangeMoney} alt="Orange Money" className="w-24 h-20 mr-2 bg-cover" />
              Payer par orange money
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecapCNISection;