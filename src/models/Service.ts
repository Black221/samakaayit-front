import useAxios from "../hooks/useAxios";
import serverInstance from "../api/server";
import { IInstitution } from "./Institution";

// Define the IService and IServiceField interfaces for type safety
export interface IServiceField {
  _id?: string;
  name: string;
  type: IFieldType;
  required: boolean;
}

export interface IFieldType {
  typeName: string;
  options: string[];
}

export interface IService {
  _id?: string;
  name: string;
  category: string;
  documentName: string;
  fees: number;
  processingTime: string;
  description: string;
  link: string;
  institutions: IInstitution[];
  fields: IServiceField[];
  whoCanMakeRequest: string;
  structureInCharge: string;
  competentInstitution: string;
  serviceHours: string;
  stepsToFollow: string[];
  youtubeLink: string;
  wolofVoiceLink: string;
}

// The useService hook to manage CRUD operations for services
export const useService = () => {
  const { client, response, error, loading, invalidateCache, clearCache } = useAxios(serverInstance);

  // Fetch all services
  const fetchServices = async () => {
      await client.get('/services', {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
  };

  // Fetch a service by ID
  const fetchServiceById = async (id: string) => {
      await client.get(`/services/${id}`, {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
  };

  // Create a new service
  const createService = async (serviceData: IService) => {
      await client.post('/services', serviceData, {}, { retryConfig: { retries: 3, delay: 1000 } });
  };

  // Update a service by ID
  const updateService = async (id: string, serviceData: Partial<IService>) => {
      await client.put(`/services/${id}`, serviceData, {}, { retryConfig: { retries: 3, delay: 1000 } });
  };

  // Delete a service by ID
  const deleteService = async (id: string) => {
      await client.delete(`/services/${id}`, {}, { retryConfig: { retries: 3, delay: 1000 } });
  };

  // Fetch services by category
  const fetchServicesByCategory = async (category: string) => {
      await client.get(`/services/category/${category}`, {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
  };

  // Fetch services by institution ID
  const fetchServicesByInstitution = async (institutionId: string) => {
      await client.get(`/services/byInstitution/${institutionId}`, {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
  };

  return {
    data : response?.data as IService[],         // Response data from the Axios hook
    error,            // Error from the Axios hook
    loading,          // Loading state from the Axios hook
    fetchServices,
    fetchServiceById,
    createService,
    updateService,
    deleteService,
    fetchServicesByCategory,
    fetchServicesByInstitution,
    invalidateCache,  // Invalidate cache for a specific URL
    clearCache        // Clear the entire cache
  };
};
