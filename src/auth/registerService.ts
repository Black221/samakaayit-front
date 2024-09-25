import useAxios from "../hooks/useAxios";
import serverInstance from "../api/server";
import { ICitoyen } from "../models/Citoyen";

export const useRegisterService = () => {
    const { client, response, loading, error } = useAxios(serverInstance);

    const register = async (registrationData: Partial<ICitoyen>) => {
        return await client.post("/citoyens/auth/signup", registrationData, {}, { retryConfig: { retries: 3, delay: 5000 } });
    };

    return {
        register,
        data: response?.result,
        loading,
        error
    };
};
