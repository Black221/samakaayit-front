import { Calendar } from "../../components/Calendar"


export default function ParAnnee () {

    const mois = [
        'Janvier', 'Février', 'Mars', 'Avril', 
        'Mai', 'Juin', 'Juillet', 'Août', 
        'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ]

    return (<>
        
        <div className="grid grid-cols-3 gap-10 p-4 border-l">
            {
                mois.map((_, index) => {
                    return <div key={index} className="flex-1 items-center text-center gap-1 p-1">
                        <p className="text-xs">
                            <Calendar year={2024} month={index} getDate={() => {}} />
                        </p>
                    </div>
                })
            }
        </div>
    </>)
}