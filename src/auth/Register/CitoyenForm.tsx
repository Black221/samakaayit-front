import { useState } from "react";
import { ICitoyen } from "../../models/Citoyen"
import Input from "../../components/Input";
import { CiUser } from "react-icons/ci";
import { MaritalStatus } from "./MaritalStatusEnum";

interface FormErrors {
    CNI?: string | null;
    phoneNumber?: string | null;
    name?: string | null;
    surname?: string | null;
    birthDate?: string | null;
    job?: string | null;
    sex?: string | null;
    password?: string | null;
    confirmPassword?: string | null;
    fathersName?: string | null;
    fathersSurname?: string | null;
    mothersName?: string | null;
    mothersSurname?: string | null;
    maritalStatus?: string | null;
    address?: string | null;
    birthCountry?: string | null;
    birthDepartment?: string | null;
}

export default function CitoyenForm ({
    getCitoyenInfo
} : {
    getCitoyenInfo: (info: Partial<ICitoyen>) => void
}) {

    const [formData, setFormData] = useState<Partial<ICitoyen>>({
        name: "",
        surname: "",
        birthDate: "",
        sex: "M",
        maritalStatus: MaritalStatus.SINGLE,
        address: "",
        birthCountry: "",
        birthDepartment: "",
        fathersName: "",
        fathersSurname: "",
        mothersName: "",
        mothersSurname: "",
        job: "",
        CNI: "",
        phoneNumber: "",
    })

    // eslint-disable-next-line 
    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = () => {
        const errors: Partial<ICitoyen>= {};
        let isValid = true;

        if (!formData.name) {
            errors.name = "Le nom est requis";
            isValid = false;
        }

        if (!formData.surname) {
            errors.surname = "Le prénom est requis";
            isValid = false;
        }

        setErrors(errors);

        return isValid;
    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            getCitoyenInfo(formData);
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
                    Etape 1/2
                </h1>
                <p className="text-gray-500">
                    Veuillez renseigner les informations suivantes
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                <div className="flex flex-col  border-b-2">
                    <Input label="Nom de famille" type="text" placeholder="Nom de famille" onChange={handleChange('name')} icon={<CiUser size={20} />} />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div className="flex flex-col  border-b-2">
                    <Input label="Prénom" type="text" placeholder="Prénom" onChange={handleChange('surname')} icon={<CiUser size={20} />} />
                    {errors.surname && <p className="text-red-500 text-sm">{errors.surname}</p>}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">

                <div className="flex flex-col  border-b-2">
                    <label htmlFor="sex">
                        Sexe
                    </label>
                    <select name="sex" id="sex" className=" border-gray-300 p-2 rounded-none bg-transparent" onChange={(e) => handleChange ('sex')(e.target.value)} >
                        <option value="M">Masculin</option>
                        <option value="F">Féminin</option>
                    </select>
                </div>
                <div className="flex flex-col  border-b-2">
                    <Input label="Date de naissance" type="date" placeholder="Date de naissance" onChange={handleChange('birthDate')} icon={<CiUser size={20} />} />
                    {errors.birthDate && <p className="text-red-500 text-sm">{errors.birthDate}</p>}
                </div>
            </div>

            <button className="bg-[#00AF41] text-white w-full h-14 md:w-[300px] mb-10 mx-auto rounded-full cursor-pointer">Suivant</button>
        </form>
    </>)
}