import { useState } from "react";
import Input from "../../components/Input";
import { CiUser, CiLock, CiHome } from "react-icons/ci";
import { MdPeopleOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { SiLinuxprofessionalinstitute } from "react-icons/si";
import Button from "../../components/Button";
import { BiLoaderCircle, BiUserPin } from "react-icons/bi";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { MaritalStatus } from "./MaritalStatusEnum";
import ReCAPTCHA from "react-google-recaptcha";
import {
    validateCNI,
    validatePhoneNumber,
    validateName,
    validateSurname,
    validateBirthDate,
    validateJob,
    validateSex,
    validatePassword,
    validateConfirmPassword,
    validateFathersName,
    validateFathersSurname,
    validateMothersName,
    validateMothersSurname,
    validateMaritalStatus,
    validateAddress,
    validateBirthCountry,
    validateBirthDepartment
} from '../Validations/ValidateRegister';

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


export default function Register() {
    const ReCaptChaKEY = import.meta.env.VITE_RECAPTCHA_KEY_CLIENT;

    const [formData, setFormData] = useState({
        CNI: "",
        phoneNumber: "",
        name: "",
        surname: "",
        birthDate: "",
        job: "",
        sex: "M",
        password: "",
        confirmPassword: "",
        fathersName: "",
        fathersSurname: "",
        mothersName: "",
        mothersSurname: "",
        maritalStatus: MaritalStatus.SINGLE,
        address: "",
        birthCountry: "",
        birthDepartment: "",
    });

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [captchaValidated, setCaptchaValidated] = useState(false);
    const [captchaError, setCaptchaError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleChange = (name: string) => (value: string) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Exécuter les validations
        const validationErrors: FormErrors = {
            CNI: validateCNI(formData.CNI),
            phoneNumber: validatePhoneNumber(formData.phoneNumber),
            name: validateName(formData.name),
            surname: validateSurname(formData.surname),
            birthDate: validateBirthDate(formData.birthDate),
            job: validateJob(formData.job),
            sex: validateSex(formData.sex),
            password: validatePassword(formData.password),
            confirmPassword: validateConfirmPassword(formData.password, formData.confirmPassword),
            fathersName: validateFathersName(formData.fathersName),
            fathersSurname: validateFathersSurname(formData.fathersSurname),
            mothersName: validateMothersName(formData.mothersName),
            mothersSurname: validateMothersSurname(formData.mothersSurname),
            maritalStatus: validateMaritalStatus(formData.maritalStatus),
            address: validateAddress(formData.address),
            birthCountry: validateBirthCountry(formData.birthCountry),
            birthDepartment: validateBirthDepartment(formData.birthDepartment),
        };

        setErrors(validationErrors);

        // Vérifier s'il y a des erreurs dans les champs ou si le captcha est non validé
        if (!captchaValidated) {
            setCaptchaError("Veuillez compléter le reCAPTCHA.");
        } else {
            setCaptchaError(null);
        }

        if (Object.values(validationErrors).every(error => !error) && captchaValidated) {
            // Si pas d'erreurs, on peut soumettre le formulaire
            setLoading(true);
            try {
                // const response = await fetch('/api/register', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify(formData),
                // });

                // if (response.ok) {
                    navigate('/connexion-choisir-methode', { state: { formData } });
                // } else {
                //     const errorData = await response.json();
                //     console.error('Erreur du serveur:', errorData);
                // }
            } catch (error) {
                console.error('Erreur réseau:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    const onChange = (token: string | null) => {
        if (token) {
            setCaptchaValidated(true);
            setCaptchaError(null); // Clear any previous errors
        } else {
            setCaptchaValidated(false);
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
                <form onSubmit={handleSubmit} className="flex flex-col gap-10 justify-center items-center w-full max-w-7xl px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
                        {/* Colonne 1 */}
                        <div className="flex flex-col gap-5">
                            <Input label="Nom de famille" type="text" placeholder="Nom de famille" onChange={handleChange('name')} icon={<CiUser size={20} />} />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                            <Input label="Prénom" type="text" placeholder="Prénom" onChange={handleChange('surname')} icon={<CiUser size={20} />} />
                            {errors.surname && <p className="text-red-500 text-sm">{errors.surname}</p>}

                            <Input label="Carte Nationale d’Identité" type="text" placeholder="CNI" onChange={handleChange('CNI')} icon={<BiUserPin size={20} />} />
                            {errors.CNI && <p className="text-red-500 text-sm">{errors.CNI}</p>}

                            <Input label="Numéro de téléphone" type="text" placeholder="Numéro de téléphone" onChange={handleChange('phoneNumber')} icon={<BsTelephone size={20} />} />
                            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}



                            <Input label="Date de naissance" type="date" onChange={handleChange('birthDate')} icon={<BsFillCalendar2CheckFill size={20} />} />
                            {errors.birthDate && <p className="text-red-500 text-sm">{errors.birthDate}</p>}
                        </div>

                        {/* Colonne 2 */}
                        <div className="flex flex-col gap-5">
                            <Input label="Profession" type="text" placeholder="Profession" onChange={handleChange('job')} icon={<SiLinuxprofessionalinstitute size={20} />} />
                            {errors.job && <p className="text-red-500 text-sm">{errors.job}</p>}

                            <Input label="Sexe" type="text" placeholder="Sexe (M/F)" onChange={handleChange('sex')} icon={<MdPeopleOutline size={20} />} />
                            {errors.sex && <p className="text-red-500 text-sm">{errors.sex}</p>}

                            <Input label="Nom du père" type="text" placeholder="Nom du père" onChange={handleChange('fathersName')} icon={<CiUser size={20} />} />
                            {errors.fathersName && <p className="text-red-500 text-sm">{errors.fathersName}</p>}

                            <Input label="Prénom du père" type="text" placeholder="Prénom du père" onChange={handleChange('fathersSurname')} icon={<CiUser size={20} />} />
                            {errors.fathersSurname && <p className="text-red-500 text-sm">{errors.fathersSurname}</p>}

                            <Input label="Nom de la mère" type="text" placeholder="Nom de la mère" onChange={handleChange('mothersName')} icon={<CiUser size={20} />} />
                            {errors.mothersName && <p className="text-red-500 text-sm">{errors.mothersName}</p>}
                        </div>

                        {/* Colonne 3 */}
                        <div className="flex flex-col gap-5">
                            <Input label="Prénom de la mère" type="text" placeholder="Prénom de la mère" onChange={handleChange('mothersSurname')} icon={<CiUser size={20} />} />
                            {errors.mothersSurname && <p className="text-red-500 text-sm">{errors.mothersSurname}</p>}

                            <div className="flex flex-col gap-5">
                                <label htmlFor="maritalStatus">État civil</label>
                                <select
                                    id="maritalStatus"
                                    value={formData.maritalStatus}
                                    onChange={(e) => handleChange('maritalStatus')(e.target.value)}
                                    className="border border-gray-300 p-2 rounded-md bg-[#F2F2F2]"
                                >
                                    <option value={MaritalStatus.SINGLE}>Célibataire</option>
                                    <option value={MaritalStatus.MARRIED}>Marié(e)</option>
                                    <option value={MaritalStatus.DIVORCED}>Divorcé(e)</option>
                                    <option value={MaritalStatus.WIDOWED}>Veuf(ve)</option>
                                </select>
                                {errors.maritalStatus && <p className="text-red-500 text-sm">{errors.maritalStatus}</p>}
                            </div>


                            <Input label="Adresse" type="text" placeholder="Adresse" onChange={handleChange('address')} icon={<IoLocationOutline size={20} />} />
                            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}

                            <Input label="Pays de naissance" type="text" placeholder="Pays de naissance" onChange={handleChange('birthCountry')} icon={<CiHome size={20} />} />
                            {errors.birthCountry && <p className="text-red-500 text-sm">{errors.birthCountry}</p>}

                            <Input label="Département de naissance" type="text" placeholder="Département de naissance" onChange={handleChange('birthDepartment')} icon={<CiHome size={20} />} />
                            {errors.birthDepartment && <p className="text-red-500 text-sm">{errors.birthDepartment}</p>}
                        </div>
                    </div>

                    {/* Mot de passe et confirmation */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                        <div className="flex flex-col">
                            <Input label="Mot de passe" type="password" placeholder="Mot de passe" onChange={handleChange('password')} icon={<CiLock size={20} />} />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </div>

                        <div className="flex flex-col">
                            <Input label="Confirmer le mot de passe" type="password" placeholder="Confirmer le mot de passe" onChange={handleChange('confirmPassword')} icon={<CiLock size={20} />} />
                            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                        </div>
                    </div>

                    {/* Recapcha */}
                    <ReCAPTCHA sitekey={ReCaptChaKEY} onChange={onChange} />
                    {captchaError && <p className="text-red-500 text-sm">{captchaError}</p>}

                    {/* Bouton de soumission */}
                    <Button disabled={loading} className="bg-[#00AF41] text-white w-full h-14 md:w-[300px] mb-10 rounded-full cursor-pointer" label={loading ? <BiLoaderCircle size={20} className="animate-spin" /> : "Créer un compte"} />
                </form>

            </div>
        </div>
    );
}
