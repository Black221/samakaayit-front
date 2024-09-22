import { ModalBody, ModalFooter, ModalHead } from "../../../components/ModalComponents";
import { IService } from "../../../models/Service";

export default function Document({
    service,
    handleChange,
    previous,
}: {
    service: IService,
    handleChange: (data: any) => void;
    previous: () => void;
}) {

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const data: any = {};
    
        // Collect files for each document field
        for (let i = 0; i < service.fields.length; i++) {
            const field = service.fields[i];
            if (field.type.typeName.toLowerCase() === 'file') {
                const fileInput = e.target[field.name].files[0]; // No normalization, directly use field name
                if (fileInput) {
                    data[field.name] = fileInput; // Store file in data object
                }
            }
        }
    
        handleChange(data); // Pass all selected documents back to the parent
    };

    const validateForm = () => {
        return true; // You can add validation logic here if needed
    };

    return (
        <>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <ModalHead>
                    <div className="space-y-2">
                        <h1 className="text-3xl font-semibold">
                            {service.name}
                        </h1>
                        <p className="block text-sm font-semibold text-gray-700">
                            {service.description}
                        </p>
                    </div>
                </ModalHead>
                <ModalBody>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">
                            Documents à fournir
                        </h3>

                        {/* Display all file-type fields */}
                        <div className="space-y-2">
                            {service.fields.filter(
                                (field) => field.type.typeName.toLowerCase() === 'file'
                            ).map((field, index) => {
                                return (
                                    <div key={index} className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-primary-700">
                                            {field.name}
                                        </label>
                                        <input
                                            type="file"
                                            name={field.name} // Directly use the field name
                                            className="p-2 border border-gray-300 rounded-lg"
                                        />
                                    </div>
                                );
                            })}

                            {service.fields.filter(
                                (field) => field.type.typeName.toLowerCase() === 'file'
                            ).length === 0 && (
                                <p className="mt-10 text-center">
                                    <p>Aucun document exigé !</p>
                                    <p className="text-[#7B7C7E]">
                                        Vous pouvez passer à la prochaine étape.
                                    </p>
                                </p>
                            )}
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
                            disabled={!validateForm()}
                            className={`text-white font-semibold px-4 py-2 rounded-lg ${
                                !validateForm() ? 'bg-primary-200' : 'bg-primary-700'
                            }`}
                        >
                            Suivant
                        </button>
                    </div>
                </ModalFooter>
            </form>
        </>
    );
}
