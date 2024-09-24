import useAxios from "../hooks/useAxios";
import serverInstance from "../api/server";
import { useAuth } from "../hooks/useAuth";

export const useAuthService = () => {
    const { client, response, loading, error } = useAxios(serverInstance);
    const {
        logout: appLogout
    } = useAuth();

    const login = async (phoneNumber: string, password: string) => {
        return await client.post("/citoyens/auth/login", { phoneNumber, password }, {}, { retryConfig: { retries: 3, delay: 5000 } });
    };

    const logout = async () => {
        await client.get("/citoyens/auth/logout", {}, { retryConfig: { retries: 3, delay: 5000 } });
        appLogout();
    }

    return {
        login,
        logout,
        data: response?.result,
        loading,
        error
    };
}