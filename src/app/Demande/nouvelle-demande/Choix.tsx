import { useState } from "react";
import { IService } from "../../../models/Service";
import { ModalHead, ModalBody, ModalFooter } from "../../../components/ModalComponents";
import { normalizeString } from "../../../utils/global";
import { IInstitution } from "../../../models/Institution";



export function Choix({ services, handleChange, loading, close }: {
    services: any,
    loading: boolean,
    handleChange: (data: {
        service: IService | null,
        institution: IInstitution | null
    }) => void,
    close: () => void
}) {

    const [selectedService, setSelectedService] = useState<IService>();
    const [selectedInstitution, setSelectedInstitution] = useState<IInstitution>();

    const onChange = (service: string) => {
        const serviceObj: IService = services.find((s: IService) => s._id === service);
        setSelectedService(serviceObj);
    }

    const onInstitutionChange = (institution: string) => {
        if (!selectedService || !selectedService.institutions) return;
        const institutionObj: IInstitution = selectedService?.institutions.find((i: IInstitution) => i._id === institution) as IInstitution;
        setSelectedInstitution(institutionObj);
    }

    return (<>
        <ModalHead>
            Quel service souhaitez-vous demander ?
        </ModalHead>
        <ModalBody>
            <div className="">
                <label className="block text-sm text-gray-700 font-semibold">
                    Type de demande
                </label>
                { loading && <p>Chargement...</p> }
                {
                    services && <select
                        name={normalizeString('service')}
                        onChange={(e) => onChange(e.target.value)}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md border"
                    >
                        <option value="">Choisir un service</option>
                        {
                            services.map((service: IService, index: number) => {
                                return (
                                    <option key={index} value={service._id}>
                                        {service.name}
                                    </option>
                                )
                            })
                        }
                    </select>
                }
                {
                    selectedService && (<>
                        <label className="block text-sm text-gray-700 font-semibold mt-4">
                            Institution le plus proche
                        </label>
                        <select
                            name={normalizeString('institution')}
                            onChange={(e) => onInstitutionChange(e.target.value)}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md border"
                        >
                            <option value="">Choisir une institution</option>
                            {
                                selectedService.institutions.map((institution: IInstitution, index: number) => {
                                    return (
                                        <option key={index} value={institution._id}>
                                            {institution.name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </>)
                }
                {
                    selectedService && selectedInstitution && (<>
                        <div className="mt-4 space-y-4">
                            <label className="block text-lg text-gray-700 font-semibold">
                                Etapes à suivre
                            </label>
                            <ul className="space-y-2">
                                {
                                    selectedService.stepsToFollow.map((step: string, index: number) => {
                                        return (
                                            <li key={index} className="flex items-center">
                                                <span className="text-primary-700 font-semibold w-10">{index + 1}.</span>
                                                <p>{step}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                            <hr />

                            <label className="block text-lg text-gray-700 font-semibold">
                                Details sur le service
                            </label>

                            <ul className="space-y-2 list-inside">
                                <li className="text-base ml-2">
                                    <span className="text-primary-700 font-semibold">Qui peut faire la demande: </span>
                                    <p>{selectedService.whoCanMakeRequest}</p>
                                </li>
                                <li className="text-base ml-2">
                                    <span className="text-primary-700 font-semibold">Description: </span>
                                    <p>{selectedService.description}</p>
                                </li>
                                <li className="text-base ml-2">
                                    <span className="text-primary-700 font-semibold">Délai de traitement: </span>
                                    <p>{selectedService.processingTime}</p>
                                </li>
                                
                            </ul>
                        </div>  
                    </>)
                }
            </div>
        </ModalBody>
        <ModalFooter>
            <div className="flex-1 gap-4 flex">
                <button onClick={close} 
                    className={`bg-[#7B7C7E] text-white font-semibold px-4 py-2 rounded-lg`}>
                    Annuler
                </button>
            </div>
            <div className="flex items-center gap-4 ">
                <button onClick={() => handleChange({
                    service: selectedService as IService,
                    institution: selectedInstitution as IInstitution
                })} 
                    disabled={!selectedService || !selectedInstitution}
                    className={` text-white font-semibold px-4 py-2 rounded-lg ${(!selectedService || !selectedInstitution) ? 'bg-primary-200' : 'bg-primary-700'}`}>
                    Suivant
                </button>
            </div>
        </ModalFooter>
    </>)
}