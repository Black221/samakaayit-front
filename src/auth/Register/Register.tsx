import { useState } from "react";
import Input from "../../components/Input";
import { CiUser } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import Button from "../../components/Button";
import { BiLoaderCircle } from "react-icons/bi";
import { BiUserPin } from "react-icons/bi";
import {
    validateFirstName,
    validateLastName,
    validateNumber,
    validateIdCardNumber,
    validatePassword,
    validateConfirmPassword
} from '../Validations/ValidateRegister';
import { useNavigate } from "react-router-dom";

interface FormErrors {
    firstName?: string | null;
    lastName?: string | null;
    number?: string | null;
    idCardNumber?: string | null;
    password?: string | null;
    confirmPassword?: string | null;
}

export default function Register() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        number: "",
        idCardNumber: "",
        password: "",
        confirmPassword: ""
    });

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const navigate = useNavigate();

    const handleChange = (name: string) => (value: string) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors: FormErrors = {
            firstName: validateFirstName(formData.firstName),
            lastName: validateLastName(formData.lastName),
            number: validateNumber(formData.number),
            idCardNumber: validateIdCardNumber(formData.idCardNumber),
            password: validatePassword(formData.password),
            confirmPassword: validateConfirmPassword(formData.password, formData.confirmPassword),
        };

        setErrors(validationErrors);

        if (Object.values(validationErrors).every(error => !error)) {
            setLoading(true);
            // Simuler la soumission des données
            setTimeout(() => {
                setLoading(false);
                navigate('/connexion-choisir-methode', { state: { formData } }); // Passer formData en tant qu'état
            }, 1000); // Remplacez ceci par l'appel API réel si nécessaire
        }
    };

    return (
        <div className="lg:ml-20 mx-5 mt-16">
            <a href="/" className="flex flex-col mb-10 items-center lg:flex-row">
                <img src="/Fichier 2.svg" alt="" width={150} height={150} />
            </a>
            <div className="flex flex-col gap-5 justify-center items-center">
                <div className="flex flex-col items-center justify-center gap-5">
                    <h2 className="text-4xl font-bold">Inscription</h2>
                    <div className="flex gap-2 mb-10">
                        <p className="text-gray-500">Vous avez déjà un compte ?</p>
                        <a href="/connexion" className="underline text-[#00AF41]">Se connecter</a>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 justify-center items-center w-full max-w-4xl px-4 md:px-8">
                    <div className="flex flex-col md:flex-row gap-5 md:gap-20 w-full">
                        <div className="flex flex-col gap-5 w-full md:w-1/2">
                            <div className="flex relative border-b-2 border-black pb-1">
                                <Input
                                    label="Prénom"
                                    type="text"
                                    placeholder="Prénom"
                                    onChange={handleChange('firstName')}
                                    icon={<CiUser size={20} />}
                                />
                            </div>
                            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                            <div className="flex border-b-2 border-black pb-1">
                                <Input
                                    label="Nom"
                                    type="text"
                                    placeholder="Nom"
                                    onChange={handleChange('lastName')}
                                    icon={<CiUser size={20} />}
                                />
                            </div>
                            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                            <div className="flex border-b-2 border-black pb-1">
                                <Input
                                    label="Numéro de téléphone"
                                    type="text"
                                    placeholder="+221"
                                    onChange={handleChange('number')}
                                    icon={<BsTelephone size={20} />}
                                />
                            </div>
                            {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}
                        </div>
                        <div className="flex flex-col gap-5 w-full md:w-1/2">
                            <div className="flex relative border-b-2 border-black pb-1">
                                <Input
                                    label="Numéro de la carte nationale d'identité"
                                    type="text"
                                    placeholder="CNI"
                                    onChange={handleChange('idCardNumber')}
                                    icon={<BiUserPin size={20} />}
                                />
                            </div>
                            {errors.idCardNumber && <p className="text-red-500 text-sm">{errors.idCardNumber}</p>}
                            <div className="flex border-b-2 border-black pb-1">
                                <Input
                                    label="Mot de passe"
                                    type="password"
                                    placeholder="Mot de passe"
                                    onChange={handleChange('password')}
                                    icon={<CiLock size={20} />}
                                />
                            </div>
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                            <div className="flex border-b-2 border-black pb-1">
                                <Input
                                    label="Confirmer le mot de passe"
                                    type="password"
                                    placeholder="Confirmer le mot de passe"
                                    onChange={handleChange('confirmPassword')}
                                    icon={<CiLock size={20} />}
                                />
                            </div>
                            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                        </div>
                    </div>
                    <Button
                        disabled={loading}
                        className="bg-[#00AF41] text-white w-full h-14 md:w-[300px] rounded-full mt-20 cursor-pointer"
                        label={loading ? <BiLoaderCircle size={20} className="animate-spin" /> : "Créer un compte"}
                    />
                </form>
            </div>
        </div>
    );
}
