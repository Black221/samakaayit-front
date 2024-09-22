import { useState, useEffect } from "react";
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
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface DocumentData {
  originalname: string;
  mimetype: string;
  size: number;
  buffer: string;
  name: string;
  path: string;
  date: string;
  uploadedBy: string;
}

export default function NouvelleDemande() {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState<IService | null>(null);
  const [selectedInstitution, setSelectedInstitution] = useState<IInstitution | null>(null);
  const [formulaireData, setFormulaireData] = useState<any>();
  const [paymentMethods, setPaymentMethod] = useState<string>();
  const [commentByCitoyen, setCommentByCitoyen] = useState<any>();
  const [documents, setDocuments] = useState<Record<string, File> | null>(null);

  const { closeModal } = useModal();
  const { createRequest } = useRequest();
  const { getUser } = useAuth();
  const { fetchServices, data: servicesData, loading: loadingServices } = useService();

  useEffect(() => {
    fetchServices();
  }, []);

  // Mutation to upload a document
  const documentUploadMutation = useMutation({
    mutationFn: async (documentData: DocumentData) => {
      const response = await axios.post(
        "https://gouvhackaton-1.onrender.com/documents",
        documentData
      );
      return response.data;
    },
    onSuccess: (data: any) => {
      console.log("Document upload successful, ID:", data._id);
    },
    onError: (error: any) => {
      console.error("Document upload error: ", error);
      throw new Error("Document upload failed.");
    },
  });

  // Mutation to create the request
  const createDemandeMutation = useMutation({
    mutationFn: async (requestData: any) => {
      return createRequest(requestData);
    },
    onSuccess: () => {
      alert("Demande envoyée avec succès!");
      console.log("Request created successfully!");
      window.location.href = "/app/demande";
    },
    onError: (error: any) => {
      console.error("Request creation error: ", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    },
  });

  const previous = () => {
    setStep(step - 1);
  };

  const getChoice = (data: { service: IService | null; institution: IInstitution | null }) => {
    setSelectedService(data.service);
    setSelectedInstitution(data.institution);
    setStep(1);
  };

  const getFormulaire = (data: any) => {
    setFormulaireData(data);
    setStep(2);
  };

  const getDocument = (data: any) => {
    setDocuments(data);
    setStep(3);
  };

  const getPayementMethod = (data: string) => {
    setPaymentMethod(data); // data is now just the string of the selected payment method
    setStep(4);
  };

  const getCommentaire = (data: any) => {
    setCommentByCitoyen(data);
    setStep(5);
    sendDemande(); // Send the final request here after gathering all data.
  };

  // Sequential function to upload documents and then create the request
  const sendDemande = async () => {
    if (!selectedService || !formulaireData || !documents) {
      alert("Données manquantes pour la demande.");
      return;
    }

    try {
      // Step 1: Upload documents first
      const documentResponses: Record<string, string> = {};

      for (const [label, file] of Object.entries(documents)) {
        const documentData: DocumentData = {
          originalname: file.name,
          mimetype: file.type,
          size: file.size,
          buffer: btoa(String.fromCharCode(...new Uint8Array(await file.arrayBuffer()))),
          name: file.name,
          path: `/documents/${file.name}`,
          date: new Date().toISOString(),
          uploadedBy: getUser()?._id || "",
        };

        const documentResponse = await documentUploadMutation.mutateAsync(documentData);

        if (documentResponse._id) {
          documentResponses[label] = documentResponse._id; // Collect the document ID for request creation
        } else {
          throw new Error("Document upload failed.");
        }
      }

      // Step 2: Create the request after successful document uploads
      const requestData = {
        citoyen: getUser()?._id,
        service: selectedService?._id,
        institution: selectedInstitution?._id,
        textResponses: formulaireData,
        documentResponses,
        paymentMethods : paymentMethods,
        commentByCitoyen,
      };

      console.log("Final Request Data: ", requestData);
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
        <Document service={selectedService} handleChange={getDocument} previous={previous} />
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
