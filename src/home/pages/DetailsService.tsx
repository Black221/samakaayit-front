import { GoSearch } from "react-icons/go";
import Input from "../../components/Input";
import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import watch from '../../assets/watch.png';
import Button from "../../components/Button";
import dummyCni from "../../data/dummycni";
import audio from '../../assets/audio.png';                 
import Select from "../../components/Select";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


interface Institution {
  _id: string;
  name: string;
  department: string;
  domain: string;
  locality: string;
  services?: string[];
  __v?: number;
}

interface Field {
  label: string;
  fieldType: string;
  required: boolean;
}

interface Service {
  _id: string;
  name: string;
  category: string;
  documentName: string;
  fees: number;
  processingTime: string;
  description: string;
  link: string;
  institutions: Institution[];
  fields: Field[];
}

export default function DetailsService() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate()
  
  const { serviceId } = useParams();
  
  const getSingleService = async(serviceId: string): Promise<Service> => {
    const {data} = await axios.get(`https://gouvhackaton-1.onrender.com/services/${serviceId}`);
    return data || [];
  }
  
  const { data: service, error, isLoading } = useQuery<Service, Error>({
    queryKey: ['service', serviceId],
    queryFn: () => getSingleService(serviceId!),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(service?.name)

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
          <div className="flex items-center w-full max-w-xs gap-2 px-4 py-2 bg-white rounded-full lg:max-w-md">
            <Input
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

      <section className="container max-w-5xl px-4 mx-auto mb-12 md:mb-24">
        <div className="flex items-center mb-6 text-green-600 cursor-pointer">
          <IoArrowBack size={20} />
          <Link to="/services" className="ml-2 text-sm md:text-base">Retour</Link>
        </div>

        <div className="flex flex-col items-start justify-between lg:flex-row">
          <div className="w-full mb-8 lg:w-3/5 lg:mb-0 lg:mr-8">
            <div className="flex flex-col items-start w-full gap-5 mb-6 md:flex-row md:items-center">
              <div>
                <h1 className="mb-2 text-xl font-bold text-green-800 md:mb-4 md:text-2xl">
                  {service?.name}
                </h1>
                <p className="mb-4 text-sm text-gray-600 md:mb-8 md:text-base">{dummyCni?.description}</p>
              </div>
              <div className="flex items-center justify-start gap-3 mt-4 md:justify-center md:gap-5 md:-translate-y-16">
                <Select onChange={(e) => e} className="w-24 h-8 text-sm md:w-32 md:h-10 md:text-base" label="" options={["Wolof"]} />
                <img src={audio} alt="audio" className="w-8 h-8 md:w-10 md:h-10"/>
              </div>
            </div>
            
            <div className="mb-8 space-y-4">
              {[
                { title: "Frais de dossier :", content: `${service?.fees} FCFA` },
                { title: "Délai de traitement :", content: service?.processingTime },
                { title: "Document délivré :", content: service?.documentName },
                { title: "Institutions compétentes :", content: service?.institutions.map(inst => inst.name).join(", ") },
              ].map((item, index) => (
                <div key={index} className="flex flex-col gap-2 md:gap-3">
                  <h3 className="text-sm font-semibold text-green-800 md:text-base">{item.title}</h3>
                  <p className="text-sm md:text-base">{item.content}</p>
                </div>
              ))}
            </div>

            <div className="p-4 md:p-6 mb-8 md:mb-16 border rounded-2xl border-[#acd8bc] mt-8 md:mt-20">
              <h3 className="mb-3 text-sm font-semibold text-green-800 md:mb-4 md:text-base">Etapes à suivre</h3>
              <ul className="pl-5 ml-2 space-y-2 text-sm list-disc md:ml-3 md:text-base">
                {dummyCni.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
              <Button label="Faire une demande" className="w-full px-4 py-2 text-sm text-white transition-all duration-200 ease-in-out bg-green-600 rounded-full md:px-6 md:py-3 md:text-base md:w-auto hover:bg-green-600/80" 
              onClick={()=> navigate(`/services/${serviceId}/demande`)}
              />
              <a href="#" className="text-base font-semibold underline md:text-lg text-neutral-900">Prendre rendez-vous</a>
            </div>
          </div>

          <div className="w-full lg:w-2/5 mt-8 lg:mt-28 rounded-[32px] bg-[#DAF9D87A] flex items-center flex-col px-4 md:px-16 py-8">
            <div className="flex items-center justify-center w-full h-48 mb-4 rounded-lg md:h-64">
              <img src={watch} alt="CNIwatch" className="max-w-full max-h-full" />
            </div>
            <a href="#" className="font-semibold text-[#00AF41] underline text-center text-sm md:text-base">Regarder le tutoriel</a>
          </div>
        </div>
      </section>
    </>
  );
}