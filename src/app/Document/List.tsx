/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useDocument } from "../../models/Document"

export default function List () {



    const {
        fetchDocumentsByCitizen,
        data,
        loading
    } = useDocument();
  
    const {
        getUser 
    } = useAuth();

    useEffect(() => {
        fetchDocumentsByCitizen(getUser()?._id as string);
        return () => {};
    }, []);


    return (<>
        
        <div>
            {
                loading ? (
                    <div>Chargement...</div>
                ) : (
                    <div className="flex flex-wrap gap-4 pr-4">
                        {
                            data?.map((doc: any) => (
                                <div key={doc._id} className="min-w-80 flex-1 p-4 bg-gray-100 rounded-md">
                                    <div className="text-xl">
                                        <div className="text-xs text-gray-500">Nom</div>
                                        <div>{doc.name}</div>
                                    </div>
                                    <div className="text-base">
                                        <div className="text-xs text-gray-500">Date</div>
                                        <div>{doc?.date}</div>
                                    </div>
                                    <div className="text-sm">
                                        <a href={
                                            `https://gouvhackaton-1.onrender.com/documents/file/${doc._id}`
                                        }  className="bg-primary-700 text-white px-4 py-1 rounded-md  block w-fit mt-2">
                                            Télécharger
                                        </a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }    
        </div>
    </>)
}