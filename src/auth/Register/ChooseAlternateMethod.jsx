import React, { useState } from 'react';
import Button from "../../components/Button";
import { BiLoaderCircle } from "react-icons/bi";
import { useLocation, useNavigate } from 'react-router-dom';

function ChooseAlternateMethod() {

    const [selectedMethod, setSelectedMethod] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { formData } = location.state || {}; // Récupérer les données du formulaire depuis la navigation

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(`Selected method: ${selectedMethod}`);

        // Simulation de la vérification du code
        setTimeout(() => {
            setLoading(false);
            if (selectedMethod === 'Par téléphone') {
                navigate('/connexion-confirmation-sms', { state: { formData, selectedMethod } });
            } else if (selectedMethod === 'Par e-mail') {
                navigate('/connexion-confirmation-email', { state: { formData, selectedMethod } });
            }

            // Logique pour vérifier le code
        }, 2000); // Remplacez ceci par la logique réelle
    };

    return (
        <div>
            <div className="lg:ml-20 mx-5 mt-16 mb-10">
                <a href="/" className='flex flex-col mb-10 items-center lg:flex-row'>
                    <img src="/Fichier 2.svg" alt="Logo" width={150} height={150} />
                </a>
                <div className="flex flex-col gap-10 justify-center items-center">
                    <img src="/send.png" alt="SMS envoyé" width={200} height={200} />

                    <div className="flex flex-col items-center justify-center gap-5">
                        <h2 className='font-bold text-center text-4xl max-w-[600px]'>Choisir une autre méthode</h2>
                        <p className='text-gray-500 text-center'>Choisissez la manière dont vous souhaitez recevoir le code</p>
                    </div>

                    <div className="flex flex-col gap-5">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5 justify-center items-center w-full max-w-4xl px-4 md:px-8">
                            <div className="flex flex-col gap-3">
                                <label className="flex gap-5 font-bold items-center">
                                    <input
                                        type="radio"
                                        name="method"
                                        value="phone"
                                        onChange={() => setSelectedMethod('Par téléphone')}
                                        className={`w-4 h-4 appearance-none border-2 border-green-500 rounded-full checked:bg-green-500 checked:border-green-500 checked:ring-1 checked:ring-green-500 checked:ring-offset-4 checked:ring-offset-white`}
                                    />
                                    Par téléphone
                                </label>
                                <label className="flex gap-5 font-bold items-center">
                                    <input
                                        type="radio"
                                        name="method"
                                        value="email"
                                        onChange={() => setSelectedMethod('Par e-mail')}
                                        className={`w-4 h-4 appearance-none border-2 border-green-500 rounded-full checked:bg-green-500 checked:border-green-500 checked:ring-1 checked:ring-green-500 checked:ring-offset-4 checked:ring-offset-white`}
                                    />
                                    Par e-mail
                                </label>
                            </div>

                            <Button
                                disabled={loading || !selectedMethod}
                                className="bg-[#00AF41] text-white w-full h-14 md:w-[350px] rounded-full mt-10 cursor-pointer"
                                label={loading ? <BiLoaderCircle size={20} className="animate-spin" /> : "Envoyer le code"}
                            />
                            <a href="/inscription" className='text-[#00AF41] underline font-bold'>Annuler</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChooseAlternateMethod;
