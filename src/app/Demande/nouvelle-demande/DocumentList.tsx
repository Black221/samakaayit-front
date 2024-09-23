import { ModalBody, ModalFooter, ModalHead } from "../../../components/ModalComponents";
import { IService } from "../../../models/Service";
import { useAuth } from "../../../hooks/useAuth";
import { useDocument } from '../../../models/Document';
import { useEffect } from "react";

interface DocumentListProps {
    service: IService;
    handleChange: (data: Record<string, string>) => void;
    previous: () => void;
}

export default function DocumentList({ service, handleChange, previous }: DocumentListProps) {
    const { getUser } = useAuth();
    const userId = getUser()?._id;

    const { fetchDocumentsByCitizen, data: documents, loading } = useDocument();

    useEffect(() => {
        if (userId) fetchDocumentsByCitizen(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data: Record<string, string> = {};

        service.fields.forEach((field) => {
            if (field.type.typeName.toLowerCase() === 'file') {
                const value = formData.get(field.name);
                if (value) data[field.name] = value.toString();
            }
        });

        handleChange(data);
    };

    const hasFileFields = service.fields.some((field) => field.type.typeName.toLowerCase() === 'file');

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
            <ModalHead>
                <h1 className="text-3xl font-semibold">{service?.name}</h1>
                <p className="text-sm text-gray-700">{service?.description}</p>
            </ModalHead>

            <ModalBody>
                <h3 className="mb-4 text-xl font-semibold">Documents à fournir</h3>

                {loading ? (
                    <div className="space-y-4 animate-pulse">
                        <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="w-5/6 h-4 bg-gray-200 rounded"></div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {hasFileFields ? (
                            service.fields
                                .filter((field) => field.type.typeName.toLowerCase() === 'file')
                                .map((field, index: number) => (
                                    <div key={index} className="space-y-2">
                                        <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                                            {field.name}
                                        </label>
                                        <select
                                            id={field.name}
                                            name={field.name}
                                            className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            aria-describedby={`${field.name}-description`}
                                        >
                                            <option value="">-- Choisir un document --</option>
                                            {documents && documents?.map((document:any) => (
                                                <option key={document._id} value={document._id}>
                                                    {document.name}
                                                </option>
                                            ))}
                                        </select>
                                        <p id={`${field.name}-description`} className="mt-2 text-sm text-gray-500">
                                            Sélectionnez le document approprié pour {field.name}.
                                        </p>
                                    </div>
                                ))
                        ) : (
                            <p className="text-center text-gray-500">
                                Aucun document exigé. Vous pouvez passer à la prochaine étape.
                            </p>
                        )}
                    </div>
                )}
            </ModalBody>

            <ModalFooter>
                <button
                    type="button"
                    onClick={previous}
                    className="px-4 py-2 font-medium text-gray-700 transition-colors bg-gray-300 rounded-lg hover:bg-gray-400"
                >
                    Précédent
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 font-medium text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700"
                >
                    Suivant
                </button>
            </ModalFooter>
        </form>
    );
}
