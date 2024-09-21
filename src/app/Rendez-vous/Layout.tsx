import { Outlet, useNavigate } from "react-router-dom";
import { Calendar } from "../../components/Calendar";
import { useEffect, useState } from "react";



export default function Layout () {


    const navigate = useNavigate();
    const [currentFilter, setCurrentFilter] = useState('jour')


    const getDisplay = (filter: string) => {
        switch (filter) {
            case 'jour': // full date
                return 'Rendez-vous du jour'
            case 'semaine':
                return 'Rendez-vous de la semaine'
            case 'mois':
                return 'Rendez-vous du mois'
            case 'annee':
                return 'Rendez-vous de l\'année'
            default:
                return 'Rendez-vous du jour'
        }
    }

    const rendezVous = [
        {
            date: "2024-01-01",
            heure: "8:00",
            demande: "Demande de carte d'idendité nationale",
            status: "En attente",
        }
    ]

    const navTo = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentFilter(e.target.value)
        navigate(e.target.value)
    }

    useEffect(() => {
        setCurrentFilter(location.pathname.split('/').pop() || 'jour')
    }, [    ])

    return (<>

        <div className="flex h-full">
            <div className="w-72 border border-[#DADCE0]">
                
                <div className="p-2 space-y-4">
                    <Calendar getDate={() => {}} />

                    <div>
                        <h1>
                            Aujourd'hui
                        </h1>
                        {
                            rendezVous.map((rendezVous, index) => {
                                return <div key={index} className="flex gap-1 p-1">
                                    <div className={`w-2 h-2 mt-1 rounded-full ${rendezVous.status === 'En attente' ? 'bg-[#F5A623]' : 'bg-[#00AF41]'}`} />

                                    <div className="flex-1 flex">
                                        <p className="text-xs font-semibold">
                                            {rendezVous.demande}
                                        </p>
                                        
                                        <p className="text-xs">
                                            {rendezVous.heure}
                                        </p>
                                    </div>
                                    
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col">
                <div className="border border-[#DADCE0] p-4 border-l-0 flex justify-between">
                    <div className="flex  gap-4">
                        <h1 className="text-2xl">
                            {getDisplay(currentFilter)}
                        </h1>

                        <select className="border border-[#00AF41] p-1 rounded text-xs" value={currentFilter} onChange={navTo}>
                            <option value="jour">Jour</option>
                            <option value="semaine">Semaine</option>
                            <option value="mois">Mois</option>
                            <option value="annee">Année</option>
                        </select>
                    </div>

                    <p>Search icon</p>
                </div>
                <div className="flex-1 border-r border-b">
                    <Outlet />
                </div>
            </div>
        </div>
    </>)
}