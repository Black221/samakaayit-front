import useAxios from "../hooks/useAxios";
import serverInstance from "../api/server";

// Define the IRendezvous interface for type safety
export interface IRendezvous {
  id?: string;
  citoyen: string;
  institution: string;
  dateAndHour: string;  // ISO date string
  duration?: number;
  state: string;
  priority: string;
  type: string;
  comment?: string;
}

// The useRendezvous hook to manage CRUD operations for appointments
export const useRendezvous = () => {
  const { client, response, error, loading, invalidateCache, clearCache } = useAxios(serverInstance);

  // Fetch all rendezvous
  const fetchRendezvous = async () => {
    try {
      await client.get('/rendezvous', {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
    } catch (err) {
      console.error("Error fetching rendezvous:", err);
    }
  };

  // Fetch a rendezvous by ID
  const fetchRendezvousById = async (id: string) => {
    try {
      await client.get(`/rendezvous/${id}`, {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
    } catch (err) {
      console.error("Error fetching rendezvous by ID:", err);
    }
  };

  // Fetch rendezvous by citizen ID
  const fetchRendezvousByCitizen = async (citizenId: string) => {
    try {
      await client.get(`/rendezvous/citoyen/${citizenId}`, {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
    } catch (err) {
      console.error("Error fetching rendezvous by citizen:", err);
    }
  };

  // Fetch rendezvous by fonctionnaire ID
  const fetchRendezvousByFonctionnaire = async (fonctionnaireId: string) => {
    try {
      await client.get(`/rendezvous/fonctionnaire/${fonctionnaireId}`, {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
    } catch (err) {
      console.error("Error fetching rendezvous by fonctionnaire:", err);
    }
  };

  // Fetch rendezvous by institution ID
  const fetchRendezvousByInstitution = async (institutionId: string) => {
    try {
      await client.get(`/rendezvous/institution/${institutionId}`, {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
    } catch (err) {
      console.error("Error fetching rendezvous by institution:", err);
    }
  };

  // Create a new rendezvous
  const createRendezvous = async (rendezvousData: IRendezvous) => {
    try {
      await client.post('/rendezvous', rendezvousData, {}, { retryConfig: { retries: 3, delay: 1000 } });
    } catch (err) {
      console.error("Error creating rendezvous:", err);
    }
  };

  // Update a rendezvous by ID
  const updateRendezvous = async (id: string, rendezvousData: Partial<IRendezvous>) => {
    try {
      await client.put(`/rendezvous/${id}`, rendezvousData, {}, { retryConfig: { retries: 3, delay: 1000 } });
    } catch (err) {
      console.error("Error updating rendezvous:", err);
    }
  };

  // Delete a rendezvous by ID
  const deleteRendezvous = async (id: string) => {
    try {
      await client.delete(`/rendezvous/${id}`, {}, { retryConfig: { retries: 3, delay: 1000 } });
    } catch (err) {
      console.error("Error deleting rendezvous:", err);
    }
  };

  return {
    rendezvousResponse: response,     // Response data from the Axios hook
    rendezvousError: error,           // Error from the Axios hook
    rendezvousLoading: loading,       // Loading state from the Axios hook
    fetchRendezvous,
    fetchRendezvousById,
    fetchRendezvousByCitizen,
    fetchRendezvousByFonctionnaire,
    fetchRendezvousByInstitution,
    createRendezvous,
    updateRendezvous,
    deleteRendezvous,
    invalidateCache,  // Invalidate cache for a specific URL
    clearCache        // Clear the entire cache
  };
};
