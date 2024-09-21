/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useModal } from "../../../hooks/useModal";
import Formulaire from "./Formulaire";
import { useDocument } from "../../../models/Document";




export default function NouvelleDemande () {

    const [step, setStep] = useState(0);


    const {
        closeModal
    } = useModal();

    const {
        createDocument,
    } = useDocument();

    const getDocument = (data: any) => {
        setStep(1);
        createDocument(data);
    }


    return (<>
        <div className="flex flex-col ">
            { step === 0 && <Formulaire close={closeModal} onSubmit={getDocument} />}
            { step === 1 && <div>Document</div>}
        </div>
    </>)
}
