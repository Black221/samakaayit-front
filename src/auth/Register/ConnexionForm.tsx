import { useState } from "react";
import { CiLock } from "react-icons/ci"
import { validatePassword, validatePhoneNumber } from "../Validations/ValidateLogin";
import Input from "../../components/Input";

interface FormErrors {
    phoneNumber?: string | null;
    password?: string | null;
    confirmPassword?: string | null;
}

export default function ConnexionForm ({
    getInfoConnexion,
    previousStep
} : {
    getInfoConnexion: (info: {phoneNumber: string, password: string}) => void,
    previousStep: () => void
}) {

    const [errors, setErrors] = useState<FormErrors>({});
    const [formData, setFormData] = useState({
        phoneNumber: "+221",
        password: "",
        confirmPassword: ""
    });

    const validateForm = () => {
        const errors: FormErrors = {};
        let isValid = true;

        if (!formData.phoneNumber) {
            errors.phoneNumber = "Le numéro de téléphone est requis"
        }
        
        if (validatePhoneNumber(formData.phoneNumber)) {
            errors.phoneNumber = "Le numéro de téléphone doit être un numéro de téléphone valide";
            isValid = false;
        }


        if (!formData.password) {
            errors.password = "Le mot de passe est requis";
            isValid = false;
        } else if (validatePassword(formData.password)) {
            errors.password = "Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial";
            isValid = false;
        }

        if (!formData.confirmPassword) {
            errors.confirmPassword = "La confirmation du mot de passe est requise";
            isValid = false;
        } else if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = "Les mots de passe ne correspondent pas";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    }
    
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            if (!formData.phoneNumber.includes("+221"))
                formData.phoneNumber = "+221" + formData.phoneNumber;
            getInfoConnexion({phoneNumber: formData.phoneNumber, password: formData.password});
        }
    }

    const handleChange = (name: string) => (value: string) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };



    return (<>

        <form  onSubmit={onSubmit} className="flex flex-col gap-10 w-[786px]">
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold">
                    Etape 2/2
                </h1>
                <p className="text-gray-500">
                    Veuillez renseigner les informations suivantes pour vous connecter
                </p>
            </div>
            <div className="flex flex-col border-b-2">
                <Input label="Numéro de téléphone"  type="text" placeholder="Numéro de téléphone" onChange={handleChange('phoneNumber')} icon={<CiLock size={20} />} />
                {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                <div className="flex flex-col  border-b-2">
                    <Input label="Mot de passe" type="password" id="passwd  " placeholder="Mot de passe" onChange={handleChange('password')} icon={<CiLock size={20} />} />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>

                <div className="flex flex-col  border-b-2">
                    <Input label="Confirmer le mot de passe" type="password" placeholder="Confirmer le mot de passe" onChange={handleChange('confirmPassword')} icon={<CiLock size={20} />} />
                    {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-5">
                <button onClick={previousStep} className="bg-primary-100 text-primary-700 w-full h-14 md:w-[300px] mb-10 mx-auto rounded-full cursor-pointer">Précédent</button>
                <button className="bg-primary-700 text-white w-full h-14 md:w-[300px] mb-10 mx-auto rounded-full cursor-pointer">Suivant</button>
            </div>
        </form>
        
    </>)
}