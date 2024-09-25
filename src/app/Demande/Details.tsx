/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useRequest } from "../../models/Request"
import { useParams } from 'react-router-dom';
import { normalizeString } from "../../utils/global";


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

    const info: {
        [key: string]: string;
    } = requestResponse.data?.textResponses;

    const doc: {
        [key: string]: string;
    } = requestResponse.data?.documentResponses;

    return (<>

        <div className="pt-4" />
        <hr className="border-t border-primary-600" />
        <div className="space-y-10 pt-4 ">

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

            <div className="flex flex-col gap-6">
                <div className="">
                    <h2 className="text-xl font-bold">
                        Résumé de la demande
                    </h2>
                </div>

                <div className="flex flex-col gap-2">
                    <div className=" flex gap-2">
                        <p className="text text-xs">
                            Date de la demande :
                        </p>
                        <p className="text-xs text-white bg-primary-700 px-2 py-1 rounded-full">
                            {requestResponse.data?.createdAt}
                        </p>
                    </div>

                    <div className=" flex gap-2 items-center">
                        <p className="text text-xs">
                            Etat :
                        </p>
                        <p className="text-xs text-white bg-primary-700 px-2 py-1 rounded-full">
                            {requestResponse.data?.state}
                        </p>
                    </div>
                </div>

                <div className="">
                    <h2 className="text-lg font-bold">
                        Informations fournies
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {info && Object.keys(info).map((key, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">
                                {key}
                            </p>
                            <p className="text-sm ">
                            <span className="text-gray-500 p-4 w-72 border rounded-full block">
                                    {info[key]}
                            </span>
                            </p>
                        </div>
                    ))}
                </div>

                <div className="">
                    <h2 className="text-lg font-bold">
                        Documents fournis
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {doc && Object.keys(doc).map((key, index) => (
                            <div key={index} className="flex flex-row gap-4 bg-primary-700 text-white rounded-md w-fit p-4 py-2 mt-2">
                                <a 
                                    href={baseUrl + "/documents/file/" + doc[key]}
                                    target="_blank" rel="noreferrer">
                                    {key}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
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

                {normalizeString(requestResponse.data?.state) === normalizeString("terminé") && <>
                
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

                                <div key={index} className="flex flex-row gap-4 bg-primary-700 text-white rounded-md w-fit p-4 py-2">
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