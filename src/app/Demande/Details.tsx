/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useRequest } from "../../models/Request"
import { useParams } from 'react-router-dom';


export default function Details () {

    const {
        id
    } = useParams();
    
    const {
        fetchRequestById,
        requestResponse,
        requestLoading,
        requestError
    } = useRequest();

    useEffect(() => {
        fetchRequestById(id || "");
        return () => {};
    }, [id]);

    if (requestLoading) {
        return <div>Chargement...</div>
    }

    if (requestError) {
        return <div>Erreur</div>
    }

    if (!requestResponse) {
        return <div>Erreur</div>
    }


    return (<>

        <div className="pt-4" />
        <hr className="border-t border-primary-600" />
        <div className="space-y-10 pt-4">

            <div className="space-y-2">
                <h1 className="text-xl font-bold">
                    {requestResponse.data?.service.name}
                </h1>
                <p>
                    {requestResponse.data?.service.documentName}
                </p>
                <p className="text-base text-gray-500">
                    {requestResponse.data?.service.description}
                </p>
            </div>

            <hr />

            <div className="grid grid-cols-2 gap-10 w-fit">

                <div className="col-span-2">
                    <h2 className="text-xl font-bold">
                        Informations personnelles
                    </h2>
                </div>

                <div className="col-span-2">
                    <p className="font-semibold">
                        CNI
                    </p>
                    <p>
                        {requestResponse.data?.citoyen.CNI || 'Non renseigné'}
                    </p>
                </div>

                <div className="text-base">
                    <p className="font-semibold">
                        Nom
                    </p>
                    <p>
                        {requestResponse.data?.citoyen.name || 'Non renseigné'}
                    </p>
                </div>
                <div className="text-base">
                    <p className="font-semibold">
                        Prénom
                    </p>
                    <p>
                        {requestResponse.data?.citoyen.surname || 'Non renseigné'}
                    </p>
                </div>

                <div className="text-base">
                    <p className="font-semibold">
                        Date de naissance
                    </p>
                    <p>
                        {requestResponse.data?.citoyen.birthday || 'Non renseigné'}
                    </p>
                </div>

                <div className="text-base">
                    <p className="font-semibold">
                        Sexe
                    </p>
                    <p>
                        {requestResponse.data?.citoyen.sex || 'Non renseigné'}
                    </p>
                </div>

                <div className="text-base">
                    <p className="font-semibold">
                        Pays de naissance
                    </p>
                    <p>
                        {requestResponse.data?.citoyen.birthCountry || 'Non renseigné'}
                    </p>
                </div>
                
                <div className="text-base">
                    <p className="font-semibold">
                        Nationalité
                    </p>
                    <p>
                        {requestResponse.data?.citoyen.nationality || 'Non renseigné'}
                    </p>
                </div>

                <div className="text-base">
                    <p className="font-semibold">
                        Adresse
                    </p>
                    <p>
                        {requestResponse.data?.citoyen.address || 'Non renseigné'}
                    </p>
                </div>

                <div className="text-base">
                    <p className="font-semibold">
                        Situation matrimoniale
                    </p>
                    <p>
                        {requestResponse.data?.citoyen.maritalStatus || 'Non renseigné'}
                    </p>
                </div>

                <div className="text-base">
                    <p className="font-semibold">
                        Profession
                    </p>
                    <p>
                        {requestResponse.data?.citoyen.job || 'Non renseigné'}
                    </p>
                </div>


                <div className="text-base">
                    <p className="font-semibold">
                        Téléphone
                    </p>
                    <p>
                        {requestResponse.data?.citoyen.phoneNumber || 'Non renseigné'}
                    </p>
                </div>  
            </div>

            <hr />
            <div className="grid grid-cols-2 gap-10 w-fit">
                <div className="col-span-2">
                    <h2 className="text-xl font-bold">
                        Informations Parentales
                    </h2>
                </div>

                <div className="text-base">
                    <p className="font-semibold">
                        Nom du père
                    </p>
                    <p>
                        {requestResponse.data?.citoyen.fathersName || 'Non renseigné'}
                    </p>
                </div>

                <div className="text-base">
                    <p className="font-semibold">
                        Nom de la mère
                    </p>
                    <p>
                        {requestResponse.data?.citoyen.mothersName || 'Non renseigné'}
                    </p>
                </div>

            </div>

            <hr />

            <div className="grid grid-cols-2 gap-10 w-fit">
                    
                <div className="col-span-2">
                    <h2 className="text-xl font-bold">
                        Informations de la demande
                    </h2>
                </div>
    
                <div className="text-base">
                    <p className="font-semibold">
                        Statut
                    </p>
                    <p>
                        {requestResponse.data?.state}
                    </p>
                </div>

                <div className="text-base">
                    <p className="font-semibold">
                        Date de dépôt
                    </p>
                    <p>
                        {requestResponse.data?.createdAt}
                    </p>
                </div>
    
                <div className="text-base">
                    <p className="font-semibold">
                        Liste des pièces
                    </p>
                    <ol className="list-decimal list-inside ml-2 mt-2">
                        <li>
                            Ancien certificat de naisance
                            <p className="border rounded-2xl p-4 px-6 mt-1 text-sm w-fit">
                                <span className="mr-6">Icon</span> Ouvrir le fichier
                            </p>
                        </li>
                    </ol>
                </div>
            </div>

            <hr />

            <div className="text-base">
                <div className="col-span-2">
                    <h2 className="text-xl font-bold">
                        Informations de paiement
                    </h2>
                </div>
                <p className="border rounded-2xl p-4 px-6 mt-1 text-sm w-fit">
                    <span className="mr-6">Icon</span> Payé par 
                    {requestResponse.data?.paymentMethod || 'Non renseigné'}
                </p>
            </div>
        </div>
    </>)
}