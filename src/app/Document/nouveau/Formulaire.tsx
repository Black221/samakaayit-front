import { useState } from "react";
import InputFile from "../../../components/InputFile";
import { ModalBody, ModalFooter, ModalHead } from "../../../components/ModalComponents";
import { IDocument } from "../../../models/Document";
import { useAuth } from "../../../hooks/useAuth";

export default function Formulaire ({
    onSubmit,
    close
} : {
    onSubmit: (data: any) => void,
    close: () => void
}) {

    const [document, setDocument] = useState<any>(null);
    const [name, setName] = useState<string>('');

    const {
        getUser
    } = useAuth();

    const handleSubmit = () => {

        console.log(document);
        const data: IDocument = {
            name,
            originalname: document.originalname,
            mimetype: document.mimetype,
            size: document.size,
            buffer: document.base64,
            uploadedBy: getUser()._id as string
        }
        onSubmit(data);
    }

    return (<>
        <ModalHead>
            Nouveau document
        </ModalHead>
        <ModalBody>
           <div className="space-y-4">
                <div className="sm:col-span-6">
                    <label className="block font-medium text-gray-700">Nom du document</label>
                    <input 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text" 
                        placeholder="Exemple: mon cni" 
                        className="mt-1 block w-full border-gray-300 border-b-2 p-2 focus:border-primary-700 focus:ring focus:ring-primary-700 focus:ring-opacity-50 focus:outline-none" 
                    />
                </div>
                <InputFile previews={false} accept="application/pdf" onChoose={(file) => {
                    setDocument(file);
                }}/>
           </div>

        </ModalBody>
        <ModalFooter>
            <button onClick={close} className="text-primary-700 px-4 py-2 rounded-md hover:bg-primary-700 hover:text-white">Annuler</button>
            <button disabled={
                !document || !name || document.size > (1024 * 1024) / 4
            } onClick={handleSubmit} type="submit" className="bg-primary-700 text-white px-4 py-2 rounded-md">Ajouter</button>
        </ModalFooter>
    </>)
}