import { useState, useEffect } from "react";
import { useModal } from "../../../hooks/useModal";
import { IService, useService } from "../../../models/Service";
import { Choix } from "./Choix";
import Formulaire from "./Formulaire";
import DocumentList from "./DocumentList";
import { useRequest } from "../../../models/Request";
import { IInstitution } from "../../../models/Institution";
import { useAuth } from "../../../hooks/useAuth";
import PayementMethod from "./PaymentMethod";
import Commentaire from "./Commentaire";
import { useMutation } from "@tanstack/react-query";

export default function NouvelleDemande() {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState<IService | null>(null);
  const [selectedInstitution, setSelectedInstitution] = useState<IInstitution | null>(null);
  const [formulaireData, setFormulaireData] = useState<any>({});
  const [paymentMethods, setPaymentMethods] = useState<string>("");
  const [commentByCitoyen, setCommentByCitoyen] = useState<string>("");
  const [documentResponses, setDocumentResponses] = useState<Record<string, string>>({});

  const { closeModal } = useModal();
  const { createRequest } = useRequest();
  const { getUser } = useAuth();
  const { fetchServices, data: servicesData, loading: loadingServices } = useService();

  useEffect(() => {
    fetchServices();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createDemandeMutation = useMutation({
    mutationFn: async (requestData: any) => createRequest(requestData),
    onSuccess: () => {
      alert("Demande envoyée avec succès!");
      window.location.href = "/app/demande";
    },
    onError: (error: any) => {
      console.error("Request creation error: ", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    },
  });

  const previous = () => setStep((prevStep) => prevStep - 1);

  const getChoice = (data: { service: IService | null; institution: IInstitution | null }) => {
    setSelectedService(data.service);
    setSelectedInstitution(data.institution);
    setStep(1);
  };

  const getFormulaire = (data: any) => {
    setFormulaireData(data);
    setStep(2);
  };

  const getDocument = (data: Record<string, string>) => {
    setDocumentResponses(data);
    setStep(3);
  };

  const getPayementMethod = (data: string) => {
    setPaymentMethods(data);
    setStep(4);
  };

  const getCommentaire = (data: string) => {
    setCommentByCitoyen(data);
    setStep(5);
    sendDemande();
  };

  const sendDemande = async () => {
    if (!selectedService || !formulaireData) {
      alert("Données manquantes pour la demande.");
      return;
    }
    
    try {
      const requestData = {
        citoyen: getUser()?._id,
        service: selectedService._id,
        institution: selectedInstitution?._id,
        textResponses: formulaireData,
        documentResponses,
        paymentMethods,
        commentByCitoyen,
      };

      await createDemandeMutation.mutateAsync(requestData);
    } catch (error) {
      console.error("Error during demande process: ", error);
      alert("Une erreur est survenue lors de la création de la demande.");
    }
  };

  return (
    <div className="flex flex-col">
      {step === 0 && (
        <Choix
          services={servicesData}
          loading={loadingServices}
          close={closeModal}
          handleChange={getChoice}
        />
      )}
      {step === 1 && selectedService && (
        <Formulaire
          service={selectedService}
          handleChange={getFormulaire}
          previous={previous}
        />
      )}
      {step === 2 && selectedService && (
        <DocumentList
          service={selectedService}
          handleChange={getDocument}
          previous={previous}
          
          
        />
      )}
      {step === 3 && (
        <PayementMethod handleChange={getPayementMethod} previous={previous} />
      )}
      {step === 4 && (
        <Commentaire handleChange={getCommentaire} previous={previous} />
      )}
      {step === 5 && (
        <div>
          {createDemandeMutation.isPending && <p>Envoi en cours...</p>}
          {createDemandeMutation.isError && <p>Erreur lors de la création de la demande.</p>}
        </div>
      )}
    </div>
  );
}