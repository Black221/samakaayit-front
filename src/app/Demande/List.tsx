/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink, useLocation } from 'react-router-dom';
import { IRequest, useRequest } from '../../models/Request';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';
import { normalizeString } from '../../utils/global';

export default function List () {

    const location = useLocation();
    const getActive = ():string => {

        return location.search.includes('en-cours')
        ? 'en-cours' : location.search.includes('terminees') 
        ? 'termine' : location.search.includes('annulees') 
        ? 'rejete' : 'en-cours';
    }
    const {
        fetchRequestsByCitizen,
        requestResponse,
    } = useRequest();

    const {
        getUser,
    } = useAuth();

    const demandeToRender: IRequest[] = requestResponse?.data || [];


    useEffect(() => {
        fetchRequestsByCitizen(getUser()?._id || '');
    }, []);



    const statutColor = (status: string) => {
        const normalize = status
            .toLowerCase()
            .replace('-', ' ')
        ;

        if(normalize.includes('en attente') || normalize.includes('en cours')) {
            return 'bg-[#EAEAEA]'
        } else if (normalize.includes('confirmé') || normalize.includes('terminé') || normalize.includes('validé')) {
            return 'bg-primary-100'
        } else if (normalize.includes('annulé') || normalize.includes('rejeté')) {
            return 'bg-[#FFFAC2]'
        } else {
            return 'bg-[#F0CBB8]'
        }
    }

    return (<>
        
        <div>
            {
                demandeToRender
                .filter(demande => normalizeString(demande?.state as string) === normalizeString(getActive()))
                .map((demande, index) => {
                    return (
                        <NavLink to={
                            {
                                pathname: `${demande._id}`,
                                search: `?type=${demande.state}`
                                
                            }
                        } key={index} className="flex items-center gap-1 p-1 py-4 border-b border-[#7B7C7E]">
                            <div className={`w-20 h-20 `} >

                            </div>

                            <div className="flex-1 flex flex-col gap-1">
                                <p className="text-[14px] font-semibold">
                                    {demande.service.name}
                                </p>
                                
                                <p className="text-xs">
                                    {demande.service.documentName}
                                </p>
                                <p className="text-xs">
                                </p>
                            </div>

                            <div>
                                <p className={`w-32 text-black py-1 text-center text-xs font-semibold ${statutColor(demande?.state || "")}`}>
                                    {demande.state}
                                </p>
                            </div>
                            
                        </NavLink>
                )})
            }         
        </div>
    </>)
}