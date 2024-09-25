import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterService } from "../registerService";
import ConnexionForm from "./ConnexionForm";
import CitoyenForm from "./CitoyenForm";
import { ICitoyen } from "../../models/Citoyen";



export default function Register() {
   
    const navigate = useNavigate();

    const { register, data, loading, error } = useRegisterService();

    const [citoyen, setCitoyen] = useState<Partial<ICitoyen>>({});
    const [errors, setErrors] = useState<any>({});


    const handleSubmit = async (data: any) => {
        await register(data);
    };


    useEffect(() => {
        if (data) {
            console.log(data);
            navigate('/connexion');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const [step, setStep] = useState(1);

    
    const getInfoConnexion = (info: {phoneNumber: string, password: string}) => {
        setStep(3);
        if (citoyen)
            handleSubmit({
                ...citoyen,
                ...info
            });
        else {
            setErrors({message: "Erreur lors de l'inscription, des informations sont manquantes"});
        }
    }

    const getCitoyenInfo = (info: Partial<ICitoyen>) => {
        setCitoyen(info);
        setStep(2);
    }

   



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
                        
                {step === 1 && (
                    <CitoyenForm
                        getCitoyenInfo={getCitoyenInfo}
                    />
                )}

                {step === 2 && (
                    <ConnexionForm
                        previousStep={() => setStep(1)}
                        getInfoConnexion={getInfoConnexion}
                    />
                )}

                {step === 3 && (<>
                    {loading && <p>Chargement...</p>}
                    {error && <p>Erreur lors de l'inscription</p>}
                    { data && (<>
                        <div>
                            <h1 className="text-2xl font-bold">Inscription réussie</h1>
                            <p className="text-gray-500">Vous pouvez maintenant vous connecter</p>
                        </div>
                    </>)}
                </>)}

                {
                    errors.message && <p className="text-red-500 text-sm">{errors.message}</p>
                }
            </div>
        </div>
    );
}
