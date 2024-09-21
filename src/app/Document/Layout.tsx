/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet, useLocation } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
import NouvelleDemande from "./nouveau/Modal";

export default function Layout () {


   

    const {
        openModal
    } = useModal();

    const location = useLocation();

    

    return (<>

        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-[40px] font-semibold">
                        Documents
                    </h2>
                    <p className="text-base text-[#7B7C7E]">
                        {
                            location.pathname === '/app/document' ? 'Tous vos documents' : 'Vos documents'
                        }
                    </p>
                </div>
                <div>
                    <button 
                        onClick={() => openModal(
                            <NouvelleDemande/>
                        )}
                    className="bg-primary-700 text-white px-4 py-2 rounded-md">
                        Ajouter un document
                    </button>
                </div>
            </div>

            <hr />

            <Outlet />
        </div>
    </>)
}