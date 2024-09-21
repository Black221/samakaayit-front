import useAxios from "../hooks/useAxios";
import serverInstance from "../api/server";

// Define the IInstitution interface for type safety
export interface IInstitution {
    _id?: string;
    name: string;
    department: string;
    domain: string;
    locality: string;
}

// The useInstitution hook to manage CRUD operations for institutions
export const useInstitution = () => {
    const { client, response, error, loading, invalidateCache, clearCache } = useAxios(serverInstance);

    // Fetch all institutions
    const fetchInstitutions = async () => {
        try {
            await client.get('/institutions', {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
        } catch (err) {
            console.error("Error fetching institutions:", err);
        }
    };

    // Fetch an institution by ID
    const fetchInstitutionById = async (id: string) => {
        try {
            await client.get(`/institutions/${id}`, {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
        } catch (err) {
            console.error("Error fetching institution by ID:", err);
        }
    };

    // Create a new institution
    const createInstitution = async (institutionData: IInstitution) => {
        try {
            await client.post('/institutions', institutionData, {}, { retryConfig: { retries: 3, delay: 1000 } });
        } catch (err) {
            console.error("Error creating institution:", err);
        }
    };

    // Update an institution by ID
    const updateInstitution = async (id: string, institutionData: Partial<IInstitution>) => {
        try {
            await client.put(`/institutions/${id}`, institutionData, {}, { retryConfig: { retries: 3, delay: 1000 } });
        } catch (err) {
            console.error("Error updating institution:", err);
        }
    };

    // Delete an institution by ID
    const deleteInstitution = async (id: string) => {
        try {
            await client.delete(`/institutions/${id}`, {}, { retryConfig: { retries: 3, delay: 1000 } });
        } catch (err) {
            console.error("Error deleting institution:", err);
        }
    };

    // Fetch institutions by domain
    const fetchInstitutionsByDomain = async (domain: string) => {
        try {
            await client.get(`/institutions/getbydomain/${domain}`, {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
        } catch (err) {
            console.error("Error fetching institutions by domain:", err);
        }
    };

    return {
        response,         // Response data from the Axios hook
        error,            // Error from the Axios hook
        loading,          // Loading state from the Axios hook
        fetchInstitutions,
        fetchInstitutionById,
        createInstitution,
        updateInstitution,
        deleteInstitution,
        fetchInstitutionsByDomain,
        invalidateCache,  // Invalidate cache for a specific URL
        clearCache        // Clear the entire cache
    };
};
