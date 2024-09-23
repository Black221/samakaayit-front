import { ModalBody, ModalFooter, ModalHead } from "../../../components/ModalComponents";
import { IService } from "../../../models/Service";

interface IData {
    [key: string]: any;
}

export default function Formulaire({
    service,
    handleChange,
    previous,
}: {
    service: IService;
    handleChange: (data: any) => void;
    previous: () => void;
}) {
    const validateForm = () => {
        return true;
    };

    function handleSubmit(e: any) {
        e.preventDefault();
        const data: IData = {};

        for (let i = 0; i < service.fields.length; i++) {
            const field = service.fields[i];
            if (field.type.typeName.toLowerCase() === 'file') {
                continue;
            }
            data[field.name] = e.target[field.name].value;
        }

        handleChange(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <ModalHead>
                    <div className="space-y-2">
                        <h1 className="text-3xl font-semibold">{service.name}</h1>
                        <p className="block text-sm font-semibold text-gray-700">
                            {service.description}
                        </p>
                    </div>
                </ModalHead>
                <ModalBody>
                    <h4 className="text-lg font-semibold">
                        Veuillez remplir les champs suivants
                    </h4>
                    <div className="mt-4 space-y-4">
                        {service?.fields?.map((field, index) => (
                            <div key={index} className="space-y-2">
                                {field.type.typeName.toLowerCase() !== "file" && (
                                    <label className="font-semibold text-gray-700">
                                        {field.name}
                                    </label>
                                )}
                                {(field.type.typeName.toLowerCase() === 'text' ||
                                    field.type.typeName.toLowerCase() === 'number' ||
                                    field.type.typeName.toLowerCase() === 'email' ||
                                    field.type.typeName.toLowerCase() === 'password' ||
                                    field.type.typeName.toLowerCase() === 'tel' ||
                                    field.type.typeName.toLowerCase() === 'date') && (
                                    <input
                                        type={field.type.typeName.toLowerCase()}
                                        name={field.name}
                                        className="block w-full py-2 pl-3 pr-10 mt-1 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                    />
                                )}
                                {field.type.typeName.toLowerCase() === 'textarea' && (
                                    <textarea
                                        name={field.name}
                                        className="block w-full py-2 pl-3 pr-10 mt-1 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                    />
                                )}
                                {field.type.typeName.toLowerCase() === 'select' && (
                                    <select
                                        name={field.name}
                                        className="block w-full py-2 pl-3 pr-10 mt-1 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                    >
                                        <option value="">Choisir une option</option>
                                        {field.type.options.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                )}
                                {field.type.typeName.toLowerCase() === 'radio' && (
                                    <div className="flex items-center gap-4">
                                        {field.type.options.map((option, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <input
                                                    type="radio"
                                                    name={field.name}
                                                    id={option}
                                                    value={option}
                                                />
                                                <label htmlFor={option}>{option}</label>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
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
