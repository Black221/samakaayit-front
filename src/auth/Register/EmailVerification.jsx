import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Input from "../../components/Input";
import Button from "../../components/Button";
import { BiLoaderCircle } from "react-icons/bi";

function EmailVerification() {
    const location = useLocation();
    const { email } = location.state || {}; // Retrieve the email passed during navigation
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCodeChange = (value) => {
        setCode(value); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(email);

        // Simulate code verification
        setTimeout(() => {
            setLoading(false);
            // Logic to verify the code
        }, 2000); // Replace this with actual logic
    };

    // Format the email to hide part of it
    const formatEmail = (email) => {
        if (!email) return '';
        const [user, domain] = email.split('@');
        const visiblePart = user.slice(0, 3); // Show the first 3 letters
        const hiddenPart = user.slice(3).replace(/./g, '*'); // Hide the rest
        return `${visiblePart}${hiddenPart}@${domain}`;
    };

    return (
        <div className="lg:ml-20 mx-5 mt-16 mb-10">
            <a href="/" className='flex flex-col mb-10 items-center lg:flex-row'>
                <img src="/Fichier 2.svg" alt="Logo" width={150} height={150} />
            </a>
            <div className="flex flex-col gap-10 justify-center items-center">
                <img src="/sendMail.png" alt="Email envoyé" width={200} height={200} />

                <div className="flex flex-col items-center justify-center gap-5">
                    <h2 className='font-bold text-center text-4xl max-w-[600px]'>Nous vous avons envoyé un code de vérification par e-mail</h2>
                    <p className='text-gray-500'>Entrez le code que vous avez reçu par mail {formatEmail(email)}</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-5">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 justify-center items-center w-full max-w-4xl px-4 md:px-8">
                        <div className="flex relative border-b-2 border-black pb-1 w-full max-w-sm font-bold">
                            <Input
                                label="Entrer le code"
                                type="text"
                                placeholder="-        -        -        -        -        -"
                                value={code}
                                onChange={handleCodeChange} 
                                textAlign='text-center'
                                className='text-center'
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

export default EmailVerification;
