import { ModalHead, ModalBody, ModalFooter } from "../../../components/ModalComponents";



export default function PayementMethod ({
    handleChange,
    previous,
}: {
    handleChange: (data: any) => void;
    previous: () => void;
}) {

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const data: any = {};

        data['paymentMethod'] = e.target['paymentMethod'].value;

        handleChange(data);
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <ModalHead>
                <div className="space-y-2">
                    <h1 className="text-3xl font-semibold">
                        Méthode de paiement
                    </h1>
                    <p className="block text-sm text-gray-700 font-semibold">
                        Choisissez votre méthode de paiement
                    </p>
                </div>
            </ModalHead>
            <ModalBody>
            <div className="space-y-4">
                    <h3 className="text-xl font-semibold">
                        Méthode de paiement
                    </h3>

                    <div className="space-y-2">
                        <div className="flex flex-col gap-2">
                            <label className="text-primary-700 font-semibold text-sm">Méthode de paiement</label>
                            
                            <select 
                                name="paymentMethod"
                                className="border border-gray-300 rounded-lg p-2"
                            >
                                <option value="cash">Espèces</option>
                                <option value="check">Chèque</option>
                                <option value="transfer">Virement bancaire</option>
                            </select>
                        </div>
                    </div>
            </div>
            </ModalBody>
            <ModalFooter>
            <div className="flex-1 gap-4 flex">
                    <button onClick={previous} 
                        className={`bg-[#7B7C7E] text-white font-semibold px-4 py-2 rounded-lg`}>
                        Précédent
                    </button>
                </div>
                <div className="flex items-center gap-4 ">
                    <button 
                        className={` text-white font-semibold px-4 py-2 rounded-lg bg-primary-700`}>
                        Suivant
                    </button>
                </div>
            </ModalFooter>
        </form>
    </>)
}