import { ModalBody, ModalFooter, ModalHead } from "../../../components/ModalComponents";
import { IService } from "../../../models/Service";
import { normalizeString } from "../../../utils/global";


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

        for (let i = 0; i < service.fields.length; i++) {
            const field = service.fields[i];
            if (field.type.typeName.toLowerCase() === 'file') {
                data[normalizeString(field.name)] = e.target[normalizeString(field.name)].files[0];
            }
        }

        handleChange(data);
    }
    const validateForm = () => {
        return true;
    }

    return (<>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <ModalHead>
                <div className="space-y-2">
                    <h1 className="text-3xl font-semibold">
                        {service.name}
                    </h1>
                    <p className="block text-sm text-gray-700 font-semibold">
                        {service.description}
                    </p>
                </div>
            </ModalHead>
            <ModalBody>
            <div className="space-y-4">
                    <h3 className="text-xl font-semibold">
                        Documents à fournir
                    </h3>

                    {/* Prendre tout les type document dans fields */}
                    <div className="space-y-2">
                        {
                            service.fields.filter(
                                (field) => field.type.typeName.toLowerCase() === 'file'
                            ).map((field, index) => {
                                return (
                                    <div key={index} className="flex flex-col gap-2">
                                        <label className="text-primary-700 font-semibold text-sm">{field.name}</label>
                                        
                                        <input type="file" 
                                            name={normalizeString(field.name)}
                                            className="border border-gray-300 rounded-lg p-2"
                                        />
                                    </div>
                                )
                            })
                        }

                        {
                            service.fields.filter(
                                (field) => field.type.typeName.toLowerCase() === 'file'
                            ).length === 0 && <p className="text-center mt-10">
                                <p>Aucun document exigé !</p>
                                <p className="text-[#7B7C7E]">
                                    Vous pouvez passer à la prochaine étape.
                                </p>
                            </p>
                        }
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
                    <button type="submit"
                        disabled={!validateForm()}
                        className={` text-white font-semibold px-4 py-2 rounded-lg ${!validateForm() ? 'bg-primary-200' : 'bg-primary-700'}`}>
                        Suivant
                    </button>
                </div>
            </ModalFooter>
        </form>
    </>)   
}