import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
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


const fetchServices = async (): Promise<Service[]> => {
const { data } = await axios.get("https://gouvhackaton-1.onrender.com/services", { timeout: 10000 });

return data.data || [];  
};

export default function List () {

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("Tous les services");
    const servicesPerPage = 6;
  
    const { data: services, error, isLoading } = useQuery<Service[], Error>({ queryKey: ['services'], queryFn: fetchServices });
    
    const categories = useMemo<string[]>(():any[] => {
      const allCategories = services?.map((service: any) => service.category) || [];
      return ["Tous les services", ...new Set(allCategories)];
    }, [services]);
  
    const filteredServices = useMemo(() => {
      if (!services) return [];
      if (selectedCategory === "Tous les services") {
        return services;
      }
      return services.filter((service: any) => service.category === selectedCategory);
    }, [services, selectedCategory]);
  
    if (isLoading) return <div className="flex h-[480px] items-center justify-center">Loading...</div>;
    if (error) return <div className="flex h-[480px] items-center justify-center">An error occurred: {error.message}</div>;
  
    const indexOfLastService = currentPage * servicesPerPage;
    const indexOfFirstService = indexOfLastService - servicesPerPage;
    const currentServices = filteredServices.slice(indexOfFirstService, indexOfLastService);
    const totalPages = Math.ceil(filteredServices.length / servicesPerPage);

    return (<>

    <section className="max-w-8xl px-4 mx-auto lg:px-[100px]">
        <div className="flex flex-col gap-16 lg:flex-row">
          <div className="lg:w-1/4 pr-6 border-r border-[#7B7C7E]">
            <h3 className="mb-10 text-2xl font-bold">Catégories</h3>
            <ul className="flex flex-col justify-center gap-4 ml-3 ">
              {categories.map((category) => (
                <li
                  key={category}  
                  className={`cursor-pointer text-lg ${
                    selectedCategory === category ? "text-green-800 font-bold" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-3/4">
            <h3 className="mb-6 text-2xl font-semibold">Tous les services</h3>
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:w-4/5">
              {currentServices.map((service: any) => (
                <div
                  key={service._id}
                  className="p-5 bg-white rounded-[20px] border border-[#085F28] flex justify-between flex-col gap-3"
                >
                  <h3 className="text-xl font-bold text-[#085F28]">
                    {service.name}
                  </h3>
                  <p className="text-[#646464]">{service.description}</p>
                  
                  <div className="flex items-center justify-center w-full mt-4">
                    <Link to={"/services/"+service._id} className="text-white text-center bg-[#00AF41] px-6 py-2 w-full rounded-[68px] hover:bg-[#00AF41]/80 transition-all duration-300 ease-in-out">
                        Afficher les détails
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full gap-5 mx-auto mt-10 mb-20 lg:w-3/4">
          <FaArrowLeft
            className={`cursor-pointer ${currentPage === 1 ? "hidden" : "block"}`}
            onClick={() => setCurrentPage(currentPage - 1)}
          />
          <div className="flex items-center justify-center gap-0.5">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 text-lg py-2 mx-1 rounded-full ${
                  currentPage === page
                    ? "text-green-600 font-semibold"
                    : "text-gray-400"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <FaArrowRight
            className={`cursor-pointer ${currentPage === totalPages ? "hidden" : "block"}`}
            onClick={() => setCurrentPage(currentPage + 1)}
          />
        </div>
      </section>
    
    </>)
}