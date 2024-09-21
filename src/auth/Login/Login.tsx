import { useEffect, useState } from "react";
import Input from "../../components/Input";
import { CiLock } from "react-icons/ci";
import Button from "../../components/Button";
import { BiLoaderCircle } from "react-icons/bi";
import { BiUserPin } from "react-icons/bi";
import {useAuthService} from "./../authService";
import {
    validatePhoneNumber,
    validatePassword,
} from '../Validations/ValidateLogin';
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface FormErrors {
    phoneNumber?: string | null;
    password?: string | null;
}

export default function Login() {
    const [formData, setFormData] = useState({
        phoneNumber: "",
        password: "",
    });

    const navigate = useNavigate()

    const auth = useAuth()

    const { login, data, error, loading } = useAuthService();

    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (name: string) => (value: string) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors: FormErrors = {
            phoneNumber: validatePhoneNumber(formData.phoneNumber),
            password: validatePassword(formData.password),
        };

        setErrors(validationErrors);

        if (Object.values(validationErrors).every(error => !error)) {
            login("+33" + formData.phoneNumber, formData.password)

        }
    };

    useEffect(() => {
        if (data) {
            console.log(data);
            auth.login(data);
            navigate('/app')
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <div className="lg:ml-20 mx-5 mt-16 ">
            <a href="/" className="flex flex-col mb-10 items-center lg:flex-row">
                <img src="/Fichier 2.svg" alt="" width={150} height={150} />
            </a>
            <div className="flex flex-col gap-5 justify-center items-center">
                <div className="flex flex-col items-center justify-center gap-5">
                    <h2 className="text-4xl font-bold">Connexion</h2>
                    <div className="flex gap-2 mb-10">
                        <p className="text-gray-500">Vous n'avez pas de compte ?</p>
                        <a href="/inscription" className="underline text-[#00AF41]">S'inscrire</a>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 justify-center items-center w-full max-w-4xl px-4 md:px-8">
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <div className="flex flex-col gap-5 md:w-1/2">
                        <div className="border-b-2 border-black pb-1">
                            <Input
                                label="Numéro de téléphone"
                                type="text"
                                placeholder="Numéro de téléphone"
                                onChange={handleChange('phoneNumber')}
                                icon={<BiUserPin size={20} />}
                            />
                        </div>
                        {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                        <div className="border-b-2 border-black pb-1">
                            <Input
                                label="Mot de passe"
                                type="password"
                                placeholder="Mot de passe"
                                onChange={handleChange('password')}
                                icon={<CiLock size={20} />}
                            />
                        </div>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

                        <Button
                            disabled={loading}
                            className="bg-[#00AF41] text-white w-full h-14 rounded-full mt-10 cursor-pointer"
                            label={loading ? <BiLoaderCircle size={20} className="animate-spin w-full" /> : "Se connecter"}
                        />
                    </div>
                </form>

            </div>
        </div>
    )
}

