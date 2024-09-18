import useAxios from "../hooks/useAxios";
import serverInstance from "../api/server";

export interface IFonctionnaire {
    id?: string;
    CNI: string;
    phoneNumber: string;
    name: string;
    surname: string;
    birthDate: string;
    job: string;
    sex: string;
    password: string;
    idNumber: string;
    email: string;
    role: string;
    institutionId: string;
}


export const useFonctionnaire = () => {
    const { client, response, error, loading, invalidateCache, clearCache } = useAxios(serverInstance);  // axiosInstance passed to useAxios

    // Fetch all fonctionnaires
    const fetchFonctionnaires = async () => {
        try {
            await client.get('/fonctionnaires', {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
        } catch (err) {
            console.error("Error fetching fonctionnaires:", err);
        }
    };

    // Fetch a fonctionnaire by ID
    const fetchFonctionnaireById = async (id: string) => {
        try {
            await client.get(`/fonctionnaires/${id}`, {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
        } catch (err) {
            console.error("Error fetching fonctionnaire by ID:", err);
        }
    };

    // Create a new fonctionnaire
    const createFonctionnaire = async (fonctionnaireData: IFonctionnaire) => {
        try {
            await client.post('/fonctionnaires', fonctionnaireData, {}, { retryConfig: { retries: 3, delay: 1000 } });
        } catch (err) {
            console.error("Error creating fonctionnaire:", err);
        }
    };

    // Update a fonctionnaire by ID
    const updateFonctionnaire = async (id: string, fonctionnaireData: Partial<IFonctionnaire>) => {
        try {
            await client.put(`/fonctionnaires/${id}`, fonctionnaireData, {}, { retryConfig: { retries: 3, delay: 1000 } });
        } catch (err) {
            console.error("Error updating fonctionnaire:", err);
        }
    };

    // Delete a fonctionnaire by ID
    const deleteFonctionnaire = async (id: string) => {
        try {
            await client.delete(`/fonctionnaires/${id}`, {}, { retryConfig: { retries: 3, delay: 1000 } });
        } catch (err) {
            console.error("Error deleting fonctionnaire:", err);
        }
    };

    return {
        response,         // Response data from the Axios hook
        error,            // Error from the Axios hook
        loading,          // Loading state from the Axios hook
        fetchFonctionnaires,
        fetchFonctionnaireById,
        createFonctionnaire,
        updateFonctionnaire,
        deleteFonctionnaire,
        invalidateCache,  // Invalidate cache for a specific URL
        clearCache        // Clear the entire cache
    };
};
