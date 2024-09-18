/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useModal } from "../../../hooks/useModal";
import { IService, useService } from "../../../models/Service";
import { Choix } from "./Choix";
import Formulaire from "./Formulaire";
import Document from "./Document";
import { useRequest } from "../../../models/Request";
import { IInstitution } from "../../../models/Institution";
import { useAuth } from "../../../hooks/useAuth";
import PayementMethod from "./PaymentMethod";
import Commentaire from "./Commentaire";



export default function NouvelleDemande () {

    const [step, setStep] = useState(0);
    const [selectedService, setSelectedService] = useState<IService | null>(null);
    const [selectedInstitution, setSelectedInstitution] = useState<IInstitution | null>(null);
    const [formulaireData, setFormulaireData] = useState<any>();
    const [paymentMethods, setPaymentMethod] = useState<any>();
    const [commentByCitoyen, setCommentByCitoyen] = useState<any>();
    const [documents, setDocuments] = useState<any>();

    const {
        closeModal
    } = useModal();


    const save = () => {
        console.log('save');
    }

    const cancel = () => {
        console.log('cancel');
        save();
        closeModal();
    }

    const {
        createRequest,
        requestResponse,
        requestLoading,
        requestError,
    } = useRequest();
    const {
        fetchServices,
        data,
        loading
    } = useService();

    const {
        getUser
    } = useAuth();

    const previous = () => {
        setStep(step - 1);
    }

    const getChoice = (data: {
        service: IService | null,
        institution: IInstitution | null
    }) => {
        setSelectedService(data.service);
        setSelectedInstitution(data.institution);
        setStep(1);
    }

    const getFormulaire = (data: any) => {
        setFormulaireData(data);
        console.log(data);
        setStep(2);
    }

    const getDocument = (data: any) => {
        setDocuments(data);
        console.log(data);
        setStep(3);
    }

    const getPayementMethod = (data: any) => {
        console.log(data);
        setPaymentMethod(data);
        setStep(4);
    }

    const getCommentaire = (data: any) => {
        console.log(data);
        setCommentByCitoyen(data);
        setStep(5);
        sendDemande();
    }

    const sendDemande = () => {
        if (!selectedService || !formulaireData || !documents) return;
        const requestData = {
            citoyen: getUser()?._id,
            service: selectedService?._id,
            institution: selectedInstitution?._id,
            textResponses: formulaireData,
            documentResponses: documents,
            commentByCitoyen: commentByCitoyen,
            paymentMethods: paymentMethods
        }
        createRequest(requestData);
    }

    useEffect(() => {
        fetchServices();
    }, []);

    return (<>
        <div className="flex flex-col ">
            { step === 0 && <Choix services={data} loading={loading} close={cancel} handleChange={getChoice}/>}
            { step === 1 && selectedService &&  <Formulaire service={selectedService} handleChange={getFormulaire} previous={previous} /> }
            { step === 2 && selectedService && <Document service={selectedService} handleChange={getDocument} previous={previous} /> }
            { step === 3 && <PayementMethod handleChange={getPayementMethod} previous={previous} /> }
            { step === 4 && <Commentaire handleChange={getCommentaire} previous={previous} /> }
            { step === 5 && <div>
                
                {requestLoading && <p>Chargement...</p>}
                {requestResponse && <p>{requestResponse}</p>}
                {requestError && <p>{requestError}</p>}
                {}
            </div>}
        </div>
    </>)
}
