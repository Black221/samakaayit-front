import useAxios from "../hooks/useAxios";
import serverInstance from "../api/server";
import { ICitoyen } from "./Citoyen";
import { IService } from "./Service";
import { IInstitution } from "./Institution";

// Define the IRequest interface for type safety
export interface IRequest {
  _id?: string;
  citoyen: ICitoyen;
  service: IService;
  institution: IInstitution;
  commentByCitoyen: string;
  dateAndHourTreatment?: string;  // ISO date string
  dateAndHour?: string;  // ISO date string
  createdAt?: string; // ISO date string
  textResponses: Record<string, string>;  // key-value pairs for responses
  documentResponses: Record<string, string>;  // key-value pairs for documents
  paymentMethods: string;
  state?: string;
}

// The useRequest hook to manage CRUD operations for requests
export const useRequest = () => {
  const { client, response, error, loading, invalidateCache, clearCache } = useAxios(serverInstance);

  // Fetch all requests
  const fetchRequests = async () => {
    await client.get('/requests', {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
  };

  // Fetch a request by ID
  const fetchRequestById = async (id: string) => {
    await client.get(`/requests/${id}`, {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
  };

  // Fetch requests by citizen ID
  const fetchRequestsByCitizen = async (citizenId: string) => {
    await client.get(`/requests/citoyen/${citizenId}`, {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
  };

  // Create a new request
  const createRequest = async (requestData: any) => {
      await client.post('/requests', requestData, {}, { retryConfig: { retries: 3, delay: 1000 } });
  };

  // Update a request by ID
  const updateRequest = async (id: string, requestData: Partial<IRequest>) => {
    await client.put(`/requests/${id}`, requestData, {}, { retryConfig: { retries: 3, delay: 1000 } });
  };

  // Delete a request by ID
  const deleteRequest = async (id: string) => {
    await client.delete(`/requests/${id}`, {}, { retryConfig: { retries: 3, delay: 1000 } });
  };

  // Fetch requests by service and fonctionnaire ID
  const fetchRequestsByServiceAndFonctionnaire = async (serviceId: string, fonctionnaireId: string) => {
    await client.get(`/requests/service/${serviceId}/fonctionnaire/${fonctionnaireId}`, {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
  };

  return {
    requestResponse: response,
    requestError: error,
    requestLoading: loading,
    fetchRequests,
    fetchRequestById,
    fetchRequestsByCitizen,
    createRequest,
    updateRequest,
    deleteRequest,
    fetchRequestsByServiceAndFonctionnaire,
    invalidateCache,  // Invalidate cache for a specific URL
    clearCache        // Clear the entire cache
  };
};
