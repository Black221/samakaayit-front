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
                    <div className="flex flex-wrap gap-4">
                        {
                            data?.map((doc: any) => (
                                <div key={doc._id} className="min-w-72 p-4 bg-gray-100 rounded-md">
                                    <div className="text-xl">
                                        <div className="text-xs text-gray-500">Nom</div>
                                        <div>{doc.name}</div>
                                    </div>
                                    <div className="text-base">
                                        <div className="text-xs text-gray-500">Date</div>
                                        <div>{doc?.date}</div>
                                    </div>
                                    <div className="text-sm">
                                        <button className="bg-blue-500 text-white px-4 py-1 rounded-md mt-2">
                                            Télécharger
                                        </button>
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