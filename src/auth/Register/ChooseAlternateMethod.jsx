import React, { useState } from 'react';
import Button from "../../components/Button";
import { BiLoaderCircle } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

function ChooseAlternateMethod() {

    const [selectedMethod, setSelectedMethod] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(`Selected method: ${selectedMethod}`);

        // Simulation de la vérification du code
        setTimeout(() => {
            setLoading(false);
            navigate('/connexion-confirmation'); // Remplacez ceci par la logique réelle

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
                        {/* Form with input */}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5 justify-center items-center w-full max-w-4xl px-4 md:px-8">
                            <div className="flex flex-col gap-3">
                                <label className='flex gap-5 font-bold'>
                                    <input
                                        type="radio"
                                        name="method"
                                        value="phone"
                                        onChange={() => setSelectedMethod('Par téléphone')}
                                    />
                                    Par téléphone
                                </label>
                                <label className='flex gap-5 font-bold'>
                                    <input
                                        type="radio"
                                        name="method"
                                        value="email"
                                        onChange={() => setSelectedMethod('Par e-mail')}
                                    />
                                    Par e-mail
                                </label>
                            </div>

                            <Button
                                disabled={loading}
                                className="bg-[#00AF41] text-white w-full h-14 md:w-[350px] rounded-full mt-10 cursor-pointer"
                                label={loading ? <BiLoaderCircle size={20} className="animate-spin" /> : "Envoyer le code"}
                            />
                            <a href="/connexion-choisir-methode" className='text-[#00AF41] underline font-bold'>Annuler</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChooseAlternateMethod;
