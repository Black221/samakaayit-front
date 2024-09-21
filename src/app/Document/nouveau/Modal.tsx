/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useModal } from "../../../hooks/useModal";
import { useAuth } from "../../../hooks/useAuth";
import Formulaire from "./Formulaire";




export default function NouvelleDemande () {

    const [step, setStep] = useState(0);

    const {
        closeModal
    } = useModal();

    const getDocument = (data: any) => {
        console.log(data);
    }


    return (<>
        <div className="flex flex-col ">
            { step === 0 && <Formulaire close={closeModal} onSubmit={getDocument} />}
        </div>
    </>)
}
