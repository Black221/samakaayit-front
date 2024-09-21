import wave from "../../assets/wave.png"; 
import orangeMoney from "../../assets/orangeMoney.png";


interface PaymentProps {
  onSelect: (method: string) => void;
  selectedMethod: string;
}

export const Payment: React.FC<PaymentProps> = ({ onSelect, selectedMethod }) => {
  const options = [
    { id: "card", label: "Payer par carte", image: null },
    { id: "wave", label: "Payer par wave", image: wave },
    { id: "orangeMoney", label: "Payer par Orange Money", image: orangeMoney },
  ];

  return (
    <div className="w-2/6 mt-8">
      <h3 className="mb-4 text-lg font-semibold">Payer les frais de dossier</h3>
      <div className="space-y-4">
        {options.map((option) => (
          <button
            key={option.id}
            className={`flex items-center w-full px-4 py-3 text-left border border-gray-300 rounded-xl ${
              selectedMethod === option.id ? "border-green-600" : ""
            }`}
            onClick={() => onSelect(option.id)}
          >
            {option.image && (
              <img src={option.image} alt={option.label} className="w-24 h-20 mr-2 bg-cover" />
            )}
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};