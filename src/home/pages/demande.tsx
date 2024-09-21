import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import InputForm from "../../components/InputForm";
import { GoSearch } from "react-icons/go";
import { IoArrowBack } from "react-icons/io5";
import Select from "../../components/Select";
import audio from "../../assets/audio.png";
import InputFile from "../../components/InputFile";
import { Payment } from "../components/Payment";

interface Field {
  uuid: string;
  name: string;
  type: {
    typeName: string;
    options: string[];
  };
  required: boolean;
}

interface Service {
  _id: string;
  name: string;
  description: string;
  fields: Field[];
}

const DynamicServiceForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, string | string[] | File>>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  const getService = async (serviceId: string): Promise<Service> => {
    const { data } = await axios.get(`https://gouvhackaton-1.onrender.com/services/${serviceId}`);
    return data;
  };

  const { data: service, isLoading, error } = useQuery<Service, Error>({
    queryKey: ['service', serviceId],
    queryFn: () => getService(serviceId!),
  });

  const mutation = useMutation<void, Error, FormData>({
    mutationFn: (formData: FormData) =>
      axios.post("https://gouvhackaton-1.onrender.com/requests", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then(() => {}),
  });

  const handleInputChange = (fieldName: string, value: string | string[] | File) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handlePaymentMethodSelect = (method: string) => {
    setPaymentMethod(method);
    handleInputChange("paymentMethod", method); 
  };

  const sendRequest = () => {
    const formDataToSend = new FormData();
    
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(item => formDataToSend.append(key, item));
      } else if (value instanceof File) {
        formDataToSend.append(key, value, value.name);
      } else {
        formDataToSend.append(key, value as string);
      }
    });

    mutation.mutate(formDataToSend, {
      onSuccess: () => {
        alert("Request submitted successfully!");
        navigate("/");
      },
      onError: (error) => {
        console.error("Error submitting request:", error);
        alert("There was an error submitting your request.");
      },
    });
  };

  
  const handleNextStep = () => {
    if (currentStep < 3){
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }else if (currentStep === 3){
      sendRequest()
    }else ;
  };
  
  const renderField = (field: Field) => {
    const fieldType = field.type.typeName.toLowerCase();

    if (currentStep === 1 && fieldType === 'file') return null;
    
    if (currentStep === 2 && fieldType !== 'file') return null;
    
    switch (fieldType) {
      case 'text':
      case 'url':
      case 'tel':
      case 'number':
      case 'date':
        return (
          <InputForm
            key={field.uuid}
            onChange={(e) => handleInputChange(field.name, e)}
            label={field.name}
            placeholder={field.name}
            type={fieldType}
            className="w-full border-b border-gray-400"
          />
        );
      case 'checkbox':
        return (
          <div key={field.uuid} className="w-full">
            <label>{field.name}</label>
            {field.type.options.map((option) => (
              <div key={option}>
                <input
                  type="checkbox"
                  id={`${field.name}-${option}`}
                  name={field.name}
                  value={option}
                  onChange={(e) => {
                    const currentValue = formData[field.name] as string[] || [];
                    const newValue = e.target.checked
                      ? [...currentValue, option]
                      : currentValue.filter((v) => v !== option);
                    handleInputChange(field.name, newValue);
                  }}
                  required={field.required}
                />
                <label htmlFor={`${field.name}-${option}`}>{option}</label>
              </div>
            ))}
          </div>
        );
      case 'radio':
        return (
          <div key={field.uuid} className="w-full">
            <label>{field.name}</label>
            {field.type.options.map((option) => (
              <div key={option}>
                <input
                  type="radio"
                  id={`${field.name}-${option}`}
                  name={field.name}
                  value={option}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                  required={field.required}
                />
                <label htmlFor={`${field.name}-${option}`}>{option}</label>
              </div>
            ))}
          </div>
        );
        case 'file':
          return (
            <InputFile
              key={field.uuid}
              type="file"
              onChange={(e) => {
                const file = e ? e[0] : null;
                if (file) {
                  handleInputChange(field.name, file);
                }
              }}
              label={field.name}
              className="w-full px-5 py-3 border border-gray-400 rounded-xl"
            />
          );
      case 'textarea':
        return (
          <div key={field.uuid} className="w-full">
            <label>{field.name}</label>
            <textarea
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              placeholder={field.name}
              required={field.required}
              className="w-full p-2 border border-gray-400 rounded-md"
              rows={3}
            />
          </div>
        );
      case 'select':
        return (
          <Select
            key={field.uuid}
            onChange={(value) => handleInputChange(field.name, value)}
            className="w-full border-b border-gray-400"
            label={field.name}
            options={field.type.options}
          />
        );
      default:
        return null;
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <section className="h-auto bg-[#085F28] py-20 md:py-36 mb-12 md:mb-24">
        <div className="flex flex-col items-center justify-center px-4 space-y-6 text-white md:space-y-10">
          <h2 className="text-2xl font-bold text-center md:text-3xl lg:text-5xl">
            Découvrez tous les services disponibles
          </h2>
          <p className="max-w-lg text-base text-center md:text-lg lg:text-xl lg:max-w-2xl">
            Besoin d'un service en particulier ? Parcourez notre liste complète
            de services ou recherchez le et trouvez rapidement ce dont vous avez
            besoin.
          </p>
          <div className="flex items-center w-full max-w-xs gap-2 px-6 py-4 bg-white rounded-full lg:max-w-md">
            <InputForm
              label=""
              placeholder="Rechercher"
              onChange={(e) => setSearchTerm(e)}
              className="w-full text-black"
            />
            <GoSearch
              size={24}
              color="gray"
              onClick={() => alert(searchTerm)}
            />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto my-5">
        <div className="flex items-center mb-6 text-green-600 cursor-pointer" onClick={() => navigate(-1)}>
          <IoArrowBack size={20} />
          <span className="ml-2 text-sm md:text-base">Retour</span>
        </div>

        <div className="flex flex-col items-center justify-center lg:flex-row">
          {Array.from({ length: 3 }, (_, idx) => (
            <>
              <div
                key={`line-${idx}`}
                className={`h-0.5 w-full max-w-xs lg:w-32 ${
                  currentStep > idx ? "bg-[#00AF41]" : "bg-gray-300"
                }`}
              />
              <div
                key={`step-${idx}`}
                className={`border flex items-center justify-center w-12 h-12 rounded-full ${
                  currentStep === idx + 1
                    ? "bg-[#00AF41] text-white"
                    : "bg-white text-black"
                } border-[#00AF41]`}
              >
                {idx + 1}
              </div>
            </>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center mt-5 space-x-0 lg:flex-row lg:space-x-10">
          {["Remplir le formulaire", "Fournir les documents", "Récapitulatif"].map((step, idx) => (
            <div
              key={idx}
              className={`md:translate-x-10 text-sm text-center lg:text-left ${
                currentStep === idx + 1 ? "text-[#00AF41] font-bold" : ""
              }`}
            >
              {step}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start justify-between max-w-6xl mx-auto mt-28 lg:flex-row">
        <div className="w-full mb-8">
          <div className="flex flex-col items-start gap-5 mb-6 md:flex-row md:items-center">
            <div>
              <h1 className="mb-2 text-xl font-bold text-green-800 md:mb-4 md:text-2xl">
                {service?.name}
              </h1>
              <p className="mb-4 text-sm text-gray-600 md:mb-8 md:text-base">
                {service?.description}
              </p>
            </div>
            <div className="flex items-center justify-start gap-3 mt-4 ml-5 md:justify-center md:gap-5 md:-translate-y-10">
              <Select
                onChange={(e) => e}
                className="w-24 h-8 text-sm outline-none md:w-32 md:h-10 md:text-base"
                label=""
                options={["Wolof"]}
              />
              <img src={audio} alt="audio" className="w-8 h-8 md:w-10 md:h-10" />
            </div>
          </div>

          <form className="w-full px-4 mt-5 lg:px-0">
            {currentStep === 1 && (
              <div className="flex flex-col items-center justify-center w-full gap-10 lg:gap-20">
                <div className="flex flex-col items-center justify-center w-full gap-10 mb-16 lg:flex-row lg:gap-20">
                  <div className="flex flex-col items-center justify-center w-full gap-5 lg:w-1/2">
                    {service?.fields.slice(0, Math.ceil(service.fields.length / 2)).map(renderField)}
                  </div>
                  <div className="flex flex-col items-center justify-center w-full gap-5 lg:w-1/2">
                    {service?.fields.slice(Math.ceil(service.fields.length / 2)).map(renderField)}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="flex flex-col items-start gap-10">
                <div>
                  <h2 className="text-xl font-bold">Liste des Pièces</h2>
                  {service?.fields.filter(field => field.type.typeName.toLowerCase() === 'file').map((field, index) => (
                    <div key={field.uuid} className="flex items-center justify-between w-full px-4 py-2 my-2 bg-gray-100 rounded-md">
                      <p>{index + 1}. {field.name}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-start justify-center w-full gap-5 lg:w-1/2">
                  {service?.fields.filter(field => field.type.typeName.toLowerCase() === 'file').map(renderField)}
                  <span className="text-[#ccc] text-sm">
                    * La taille maximale de vos fichiers ne doit pas dépasser 10 MB
                  </span>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <>
                <div>
                  <h2 className="mb-4 text-xl font-bold">Récapitulatif</h2>
                  {Object.entries(formData).map(([key, value]) => (
                    <div key={key} className="mb-2">
                      <strong>{key}:</strong> {Array.isArray(value) ? value.join(", ") : value instanceof File ? value.name : value}
                    </div>
                  ))}
                </div>
                <Payment          onSelect={handlePaymentMethodSelect}
                selectedMethod={paymentMethod}
              />
              
              </>
            )}
          </form>

          {currentStep && (
            <div className="flex items-center justify-start w-full mt-10 ">
              <button
                type="button"
                className="py-3 text-white bg-green-600 rounded-3xl px-9"
                onClick={handleNextStep}
              >
                {currentStep !== 3 ? "Suivant" : "Soumettre"}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DynamicServiceForm;