import useAxios from "../hooks/useAxios";
import serverInstance from "../api/server";

export const useRegisterService = () => {
    const { client, response, loading, error } = useAxios(serverInstance);

    const register = async (registrationData: {
        CNI: string,
        phoneNumber: string,
        name: string,
        surname: string,
        birthDate: string,
        job: string,
        sex: string,
        password: string,
        confirmPassword: string,
        fathersName: string,
        fathersSurname: string,
        mothersName: string,
        mothersSurname: string,
        maritalStatus: string,
        address: string,
        birthCountry: string,
        birthDepartment: string
    }) => {
        return await client.post("/citoyens/auth/signup", registrationData, {}, { retryConfig: { retries: 3, delay: 5000 } });
    };

    return {
        register,
        data: response?.result,
        loading,
        error
    };
};
