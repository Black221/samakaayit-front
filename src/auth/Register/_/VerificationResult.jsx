import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { FaArrowRight } from "react-icons/fa";

function VerificationResult() {

    return (
        <div className="lg:ml-20 mx-5 mt-16 mb-10">
            <a href="/" className='flex flex-col mb-10 items-center lg:flex-row'>
                <img src="/Fichier 2.svg" alt="Logo" width={150} height={150} />
            </a>
            <div className="flex flex-col gap-10 justify-center items-center">
                <h2 className='font-bold text-center text-4xl'>Nous vous souhaitons la bienvenue</h2>
                <img src="/welcome.png" alt="" width={500} height={500} />
                <a href="/" className="text-[#00AF41] underline font-bold flex justify-center items-center gap-2 cursor-pointer  ">
                    Retourner à l'accueil
                    <FaArrowRight />
                </a>
            </div>
        </div>
    );
}

export default VerificationResult;
