import useAxios from "../hooks/useAxios";
import serverInstance from "../api/server";

// Define the IAdmin interface for type safety
export interface IAdmin {
  id?: string;
  CNI: string;
  phoneNumber: string;
  name: string;
  surname: string;
  birthDate: string;  // ISO date string
  job: string;
  sex: string;
  password: string;
  email: string;
}

// The useAdmin hook to manage CRUD operations for admins
export const useAdmin = () => {
  const { client, response, error, loading, invalidateCache, clearCache } = useAxios(serverInstance);

  // Fetch all admins
  const fetchAdmins = async () => {
    try {
      await client.get('/admins', {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
    } catch (err) {
      console.error("Error fetching admins:", err);
    }
  };

  // Fetch an admin by ID
  const fetchAdminById = async (id: string) => {
    try {
      await client.get(`/admins/${id}`, {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
    } catch (err) {
      console.error("Error fetching admin by ID:", err);
    }
  };

  // Create a new admin
  const createAdmin = async (adminData: IAdmin) => {
    try {
      await client.post('/admins', adminData, {}, { retryConfig: { retries: 3, delay: 1000 } });
    } catch (err) {
      console.error("Error creating admin:", err);
    }
  };

  // Update an admin by ID
  const updateAdmin = async (id: string, adminData: Partial<IAdmin>) => {
    try {
      await client.put(`/admins/${id}`, adminData, {}, { retryConfig: { retries: 3, delay: 1000 } });
    } catch (err) {
      console.error("Error updating admin:", err);
    }
  };

  // Delete an admin by ID
  const deleteAdmin = async (id: string) => {
    try {
      await client.delete(`/admins/${id}`, {}, { retryConfig: { retries: 3, delay: 1000 } });
    } catch (err) {
      console.error("Error deleting admin:", err);
    }
  };

  return {
    response,         // Response data from the Axios hook
    error,            // Error from the Axios hook
    loading,          // Loading state from the Axios hook
    fetchAdmins,
    fetchAdminById,
    createAdmin,
    updateAdmin,
    deleteAdmin,
    invalidateCache,  // Invalidate cache for a specific URL
    clearCache        // Clear the entire cache
  };
};
