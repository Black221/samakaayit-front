/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useModal } from "../../../hooks/useModal";
import Formulaire from "./Formulaire";
import { useDocument } from "../../../models/Document";
import { ModalBody, ModalFooter, ModalHead } from "../../../components/ModalComponents";




export default function NouvelleDemande () {

    const [step, setStep] = useState(0);


    const {
        closeModal
    } = useModal();

    const {
        createDocument,
        data,
        loading
    } = useDocument();

    const getDocument = (data: any) => {
        setStep(1);
        createDocument(data);
    }


    return (<>
        <div className="flex flex-col ">
            { step === 0 && <Formulaire close={closeModal} onSubmit={getDocument} />}
            { step === 1 && <Terminate  response={data} loading={loading} close={closeModal} />}
        </div>
    </>)
}



function Terminate ({
    response,
    loading,
    close
} : {
    response: any,
    loading: boolean,
    close: () => void,
}) {

    return (<>
        <ModalHead>
            {
                loading ? ("Traitement en cours...") : ("Traitement terminé.")
            }
        </ModalHead>
        <ModalBody>
            {
                loading ? (
                    <p>Chargement...</p>
                ) : (
                    response ? (
                        <p>Document créé avec succès</p>
                    ) : (
                        <p>Erreur lors de la création du document</p>
                    )
                )
            }
        </ModalBody>
        <ModalFooter>
            <div></div>
            <button 
                disabled={loading}
                onClick={
                    () => {
                        close();
                        if (response) {
                            window.location.reload();
                        }
                    }
                } 
                className={`px-4 py-2 rounded-md ${loading ? "bg-gray-300 text-gray-500" : "bg-primary-700 text-white"} hover:bg-primary-700 hover:text-white`}>
                    Fermer
                </button>
        </ModalFooter>
    </>)
}