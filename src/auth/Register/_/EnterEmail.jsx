import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { BiLoaderCircle } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";

function SmsVerification() {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (value) => {
        setEmail(value); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(email);

        // Simulation de la vérification du code
        setTimeout(() => {
            setLoading(false);
            navigate('/connexion-confirmation-email', { state: { email } });

            // Logique pour vérifier le code
        }, 2000); // Remplacez ceci par la logique réelle
    };
    return (
        <div className="lg:ml-20 mx-5 mt-16 mb-10">
            <a href="/" className='flex flex-col mb-10 items-center lg:flex-row'>
                <img src="/Fichier 2.svg" alt="Logo" width={150} height={150} />
            </a>
            <div className="flex flex-col gap-10 justify-center items-center">
                <img src="/sendMail.png" alt="SMS envoyé" width={200} height={200} />

                <div className="flex flex-col items-center justify-center gap-5">
                    <h2 className='font-bold text-center text-4xl max-w-[950px]'>Entrez l'adresse e-mail où vous souhaitez recevoir le code de confirmation</h2>
                </div>

                <div className="flex flex-col items-center justify-center gap-5">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 justify-center items-center w-full max-w-4xl px-4 md:px-8">
                        <div className="flex relative border-b-2 border-black pb-1 w-full max-w-sm font-bold">
                            <Input
                                label="e-mail"
                                type="email"
                                placeholder="e-mail"
                                value={email}
                                icon={<MdOutlineMail />}
                                onChange={handleEmailChange} 
                            />
                        </div>
                        <Button
                            disabled={loading}
                            className="bg-[#00AF41] text-white w-full h-14 md:w-[350px] rounded-full mt-10 cursor-pointer"
                            label={loading ? <BiLoaderCircle size={20} className="animate-spin" /> : "Valider"}
                        />
                        <a href="/connexion-choisir-methode" className='text-[#00AF41] underline font-bold'>Choisir une autre méthode</a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SmsVerification;
