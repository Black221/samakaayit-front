import { ModalHead, ModalBody, ModalFooter } from "../../../components/ModalComponents";


export default function PayementMethod({
    handleChange,
    previous,
}: {
    handleChange: (paymentMethod: string) => void; // Now expecting a string
    previous: () => void;
}) {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const paymentMethod = e.target['paymentMethods'].value; // Directly getting the string value
        handleChange(paymentMethod); // Passing only the string
    };

    return (
        <form onSubmit={handleSubmit}>
            <ModalHead>
                <div className="space-y-2">
                    <h1 className="text-3xl font-semibold">Méthode de paiement</h1>
                    <p className="block text-sm font-semibold text-gray-700">
                        Choisissez votre méthode de paiement
                    </p>
                </div>
            </ModalHead>
            <ModalBody>
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Méthode de paiement</h3>
                    <div className="space-y-2">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-primary-700">
                                Méthode de paiement
                            </label>
                            <select
                                name="paymentMethods"
                                className="p-2 border border-gray-300 rounded-lg"
                            >
                                <option value="wave">Wave</option>
                                <option value="orange-money">Orange Money</option>
                                <option value="carte">Carte</option>
                            </select>
                        </div>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <div className="flex flex-1 gap-4">
                    <button
                        onClick={previous}
                        className="bg-[#7B7C7E] text-white font-semibold px-4 py-2 rounded-lg"
                    >
                        Précédent
                    </button>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        type="submit"
                        className="px-4 py-2 font-semibold text-white rounded-lg bg-primary-700"
                    >
                        Suivant
                    </button>
                </div>
            </ModalFooter>
        </form>
    );
}
