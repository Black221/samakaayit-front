import { Outlet } from "react-router-dom";
import { Calendar } from "../../components/Calendar";
import useCalendar from './../../hooks/useCalendar';



export default function Layout () {

    const { getYear } = useCalendar()
    const today = new Date();
    const thisYear = getYear(today.getFullYear());
    const thisMonth = thisYear.months[today.getMonth()];
    const thisWeek = thisMonth.weeks[Math.floor((today.getDate() - 1) / 7)]

    console.log(thisWeek)
    console.log(thisMonth)
    console.log(thisYear)


    const rendezVous = [
        {
            date: "2024-01-01",
            heure: "8:00",
            demande: "Demande de carte d'idendité nationale",
            status: "En attente",
        }
    ]

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
                        <h1 className="text-2xl">Janvier 2024</h1>

                        <select className="border border-[#00AF41] p-1 rounded text-xs">
                            <option value="jour">Jour</option>
                            <option value="semain">Semaine</option>
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