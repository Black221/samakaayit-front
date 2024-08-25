import { useState } from "react";
import Input from "../components/Input";
import { CiLock } from "react-icons/ci";
import Button from "../components/Button";
import { BiLoaderCircle } from "react-icons/bi";
import { BiUserPin } from "react-icons/bi";
import {
    validateIdCardNumber,
    validatePassword,
} from './Validations/ValidateLogin';

interface FormErrors {
    idCardNumber?: string | null;
    password?: string | null;
}

export default function Login() {
    const [formData, setFormData] = useState({
        idCardNumber: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
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
            idCardNumber: validateIdCardNumber(formData.idCardNumber),
            password: validatePassword(formData.password),
        };

        setErrors(validationErrors);

        if (Object.values(validationErrors).every(error => !error)) {
            setLoading(true);
            console.log("Form Data:", formData);
        }
    };

    return (
        <div className="lg:ml-20 mx-5 mt-16 ">
            <img src="/Fichier 2.svg" alt="" width={150} height={150} />
            <div className="flex flex-col gap-5 justify-center items-center">
                <div className="flex flex-col items-center justify-center gap-5">
                    <h2 className="text-4xl font-bold">Connexion</h2>
                    <div className="flex gap-2 mb-10">
                        <p className="text-gray-500">Vous n'avez pas de compte ?</p>
                        <a href="/inscription" className="underline text-[#00AF41]">S'inscrire</a>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 justify-center items-center w-full max-w-4xl px-4 md:px-8">
                    <div className="flex flex-col gap-5 md:w-1/2">
                        <div className="border-b-2 border-black pb-1">
                            <Input
                                label="Numéro de la carte nationale d'identité"
                                type="text"
                                placeholder="CNI"
                                onChange={handleChange('idCardNumber')}
                                icon={<BiUserPin size={20} />}
                            />
                        </div>
                        {errors.idCardNumber && <p className="text-red-500 text-sm">{errors.idCardNumber}</p>}
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

