/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useRequest } from "../../models/Request";
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useModal } from "../../hooks/useModal";
import NouvelleDemande from "./nouvelle-demande/Modal";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Layout () {

    const queryClient = new QueryClient();
    const types = [
        {label: "En cours", value: "en-cours"},
        {label: "Terminees", value: "terminees"},
        {label: "Annulees", value: "annulees"},
    ]

    const location = useLocation();
    const getActive = ():string => {

        return location.search.includes('en-cours')
        ? 'en-cours' : location.search.includes('terminees') 
        ? 'terminees' : location.search.includes('annulees') 
        ? 'annulees' : 'en-cours';
    }

    const {
        fetchRequestsByCitizen,
        requestResponse,
    } = useRequest();

    const {
        getUser
    } = useAuth();

    const {
        openModal
    } = useModal();

    useEffect(() => {
        fetchRequestsByCitizen(getUser()?._id || '');
    }, []);

    

    return (<>

        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-[40px] font-semibold">Demandes</h2>
                    <p className="text-base text-[#7B7C7E]">
                        Vous avez 
                        <span className="mx-2 font-bold text-primary-700"> 
                            { requestResponse?.data.length || 0 }
                        </span>
                        demandes en cours de traitement
                    </p>
                </div>
                <div>
                    <button 
                        onClick={() => openModal(
                            <QueryClientProvider client={queryClient}>
                                <NouvelleDemande />
                            </QueryClientProvider>
                        )}
                    className="px-4 py-2 text-white rounded-md bg-primary-700">Nouvelle demande</button>
                </div>
            </div>

            <nav className="flex items-center gap-4">
                {
                    types.map((type, index) => {
                        
                        return <NavLink to={
                            {
                                pathname: "/app/demande",
                                search: `?type=${type.value}`
                                
                            }
                        } key={index} className={`p-2 ${getActive().includes(type.value) ? 'border-b-2 border-primary-700 text-primary-700' : ''}`}>
                            {type.label}
                        </NavLink>
                    })
                }
            </nav>

            <Outlet />
        </div>
    </>)
}