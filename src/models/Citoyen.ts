import useAxios from "../hooks/useAxios";
import serverInstance from "../api/server";

// Define the ICitoyen interface for type safety
export interface ICitoyen {
  _id?: string;
  CNI: string;
  phoneNumber: string;
  name: string;
  surname: string;
  birthDate: string;  // ISO date string
  job: string;
  sex: string;
  password: string;
  fathersName: string;
  fathersSurname: string;
  mothersName: string;
  mothersSurname: string;
  maritalStatus: string;
  address: string;
  birthCountry: string;
  birthDepartment: string;
}

// The useCitoyen hook to manage CRUD operations for citizens
export const useCitoyen = () => {
  const { client, response, error, loading, invalidateCache, clearCache } = useAxios(serverInstance);

  // Fetch all citizens
  const fetchCitizens = async () => {
    try {
      await client.get('/citoyens', {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
    } catch (err) {
      console.error("Error fetching citizens:", err);
    }
  };

  // Fetch a citizen by ID
  const fetchCitizenById = async (id: string) => {
    try {
      await client.get(`/citoyens/${id}`, {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
    } catch (err) {
      console.error("Error fetching citizen by ID:", err);
    }
  };

  // Fetch a citizen by phone number
  const fetchCitizenByPhone = async (phoneNumber: string) => {
      await client.get(`/citoyens/phone?phoneNumber=${phoneNumber}`, {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
  };

  // Fetch a citizen by CNI
  const fetchCitizenByCNI = async (cni: string) => {
    try {
      await client.get(`/citoyens/cni?cni=${cni}`, {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
    } catch (err) {
      console.error("Error fetching citizen by CNI:", err);
    }
  };

  // Create a new citizen
  const createCitizen = async (citizenData: ICitoyen) => {
    try {
      await client.post('/citoyens', citizenData, {}, { retryConfig: { retries: 3, delay: 1000 } });
    } catch (err) {
      console.error("Error creating citizen:", err);
    }
  };

  // Update a citizen by ID
  const updateCitizen = async (id: string, citizenData: Partial<ICitoyen>) => {
    try {
      await client.put(`/citoyens/${id}`, citizenData, {}, { retryConfig: { retries: 3, delay: 1000 } });
    } catch (err) {
      console.error("Error updating citizen:", err);
    }
  };

  // Delete a citizen by ID
  const deleteCitizen = async (id: string) => {
    try {
      await client.delete(`/citoyens/${id}`, {}, { retryConfig: { retries: 3, delay: 1000 } });
    } catch (err) {
      console.error("Error deleting citizen:", err);
    }
  };

  return {
    response,         // Response data from the Axios hook
    error,            // Error from the Axios hook
    loading,          // Loading state from the Axios hook
    fetchCitizens,
    fetchCitizenById,
    fetchCitizenByPhone,
    fetchCitizenByCNI,
    createCitizen,
    updateCitizen,
    deleteCitizen,
    invalidateCache,  // Invalidate cache for a specific URL
    clearCache        // Clear the entire cache
  };
};
