import useAxios from "../hooks/useAxios";
import serverInstance from "../api/server";

export const useAuthService = () => {
    const { client, response, loading, error } = useAxios(serverInstance);

    const login = async (phoneNumber: string, password: string) => {
        return await client.post("/citoyens/auth/login", { phoneNumber, password }, {}, { retryConfig: { retries: 3, delay: 5000 } });
    };

    return {
        login,
        data: response?.data,
        loading,
        error
    };
}