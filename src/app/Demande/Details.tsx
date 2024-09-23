/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useRequest } from "../../models/Request"
import { useParams } from 'react-router-dom';


export default function Details () {

    const {
        id
    } = useParams();

    const baseUrl = "https://gouvhackaton-1.onrender.com";
    
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

            <div className="flex flex-col gap-4">

                <div className="">
                    <h2 className="text-xl font-bold">
                        Réponse à la demande
                    </h2>
                </div>

                <div className="">
                    <p className="font-semibold">
                        Etat
                    </p>
                    <p>
                        {requestResponse.data?.state}
                    </p>
                </div>

                {requestResponse.data?.state === "terminé" && <>
                
                    <div className="">
                        <p className="font-semibold">
                            Commentaire
                        </p>
                        <p>
                            {requestResponse.data?.commentByAgent}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="font-semibold">
                            Documents
                        </p>
                        <div className="flex flex-col gap-4">
                            {requestResponse.data?.documentResponses && 
                            (requestResponse.data?.documentsByAgent.map((doc: any, index:number) => (

                                <div key={index} className="flex flex-row gap-4 bg-primary-100 rounded-md w-fit p-4 py-2">
                                    <a 
                                        href={baseUrl + "/documents/file/" + doc}
                                        target="_blank" rel="noreferrer">
                                        Télécharger
                                    </a>
                                </div>
                            )))}
                        </div>
                    </div>
                </>}
            </div>
        </div>
    </>)
}