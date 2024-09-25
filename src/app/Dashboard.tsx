import img from '../assets/monimage.png';
import { IRequest, useRequest } from '../models/Request';
import { useAuth } from '../hooks/useAuth';
import { useCallback, useEffect } from 'react';
import { useRendezvous, IRendezvous } from '../models/Rendezvous';


export default function Dashboard () {

    const {
        fetchRequestsByCitizen,
        requestResponse,
        requestLoading,
    } = useRequest();

    const {
        fetchRendezvousByCitizen,
        rendezvousResponse,
        rendezvousError,
        rendezvousLoading,
    } = useRendezvous();

    const {
        getUser,
    } = useAuth();

    const fetchAll = useCallback(() => {
        fetchRequestsByCitizen(getUser()?._id || '');
        fetchRendezvousByCitizen(getUser()?._id || '');
    }, []);

    useEffect(() => {
        fetchAll();
    }, [fetchAll]);


    return (
        <div className="flex w-full h-full gap-4 p-1 bg-white">
            <div className="flex flex-col flex-1 h-full gap-4">
                <div className="flex gap-4">
                    <div className="flex w-1/2 gap-4 p-4 bg-white rounded-lg shadow drop-shadow">
                        <div className="flex flex-col gap-1 p-4 bg-primary-50 rounded-2xl">
                            <div></div>
                            <p className="text-[24px] font-semibold">
                                { requestResponse && requestResponse.data.length || 0 }
                            </p>
                            <p className="text-base font-semibold">Total de demandes</p>
                        </div>
                        <div className="flex flex-col gap-1 p-4 bg-tertiary-100 rounded-2xl">
                            <div></div>
                            <p className="text-[24px] font-semibold">
                                { rendezvousResponse && rendezvousResponse.data.length || 0 }   
                            </p>
                            <p className="text-base font-semibold">Total de rendez-vous</p>
                        </div>
                    </div>
                    <div className="w-1/2 p-4 text-sm bg-white rounded-lg shadow drop-shadow">
                        <div className="flex justify-between mb-2">
                            <h2 className="text-[18px] text-[#818181]">Historique</h2>
                            <button></button>
                        </div>
                        {
                            requestLoading ? <p>Loading...</p>
                           : (requestResponse && requestResponse.data.slice(0,3).map((request: IRequest, index: number) => {
                                return (
                                    <div key={request._id || index} className="">
                                        <h3 className="text-[12px] text-secondary-900 font-bold flex justify-between">
                                            <p>{request.service.name || 'Service'}</p>
                                            <p className="text-[10px] text-[#7B7C7E]">{request.state}</p>
                                        </h3>
                                        <p className="text-[10px] text-[#7B7C7E]">
                                            {request.dateAndHourTreatment || request.dateAndHour || request?.createdAt || 'pas de date'}
                                        </p>
                                    </div>
                                )
                            }))
                        }
                        
                    </div>
                </div>
                <div className="flex-1 p-4 bg-white rounded-lg shadow drop-shadow">
                    <div className="flex justify-between mb-2">
                        <h2 className="text-[18px] text-[#818181]">Rendez-vous</h2>
                        <button></button>
                    </div>
                    <h2 className="text-2xl font-semibold">
                        Janvier
                    </h2>
                    <div>
                        { rendezvousResponse && rendezvousResponse.data.map((rendezvous: IRendezvous, index: number) => {
                            return <div key={index} className="flex justify-between mb-2">
                                <h3 className="text-[12px] text-secondary-900 font-bold">{rendezvous.type}</h3>
                                <p className="text-[12px] text-[#7B7C7E]">{rendezvous.comment}</p>
                            </div>
                        }) }
                        {
                            rendezvousLoading && <p>Loading...</p>
                        }
                        {
                            rendezvousResponse && rendezvousResponse
                        }
                        {
                            rendezvousError && rendezvousError
                        }
                    </div>
                </div>
            </div>


            <div className="flex flex-col gap-4 w-80">
                <div className="p-4 bg-white rounded-lg shadow drop-shadow">
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className="w-full p-3 font-bold text-center rounded-tr-full rounded-bl-full bg-tertiary-400">
                       <a href="/app/enquete">Enquête de satisfaction</a>
                    </div>
                    <div className="py-4 space-y-2">
                        <h3 className="text-[18px] font-semibold">Votre avis intéresse</h3>
                        <p className="text-[12px] text-[#818181]">
                            Aidez nous à améliorer nos services en nous 
                            faisant part de vos impréssions
                        </p>
                    </div>
                </div>
                <div className="flex-1 p-4 bg-white rounded-lg shadow drop-shadow">
                    <div className="flex justify-between mb-4">
                        <h2 className="text-[18px] text-[#818181]">Notifications</h2>
                        <button></button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
