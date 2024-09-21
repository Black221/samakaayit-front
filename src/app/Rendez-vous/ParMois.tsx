

export default function ParMois () {
    

    const maxWeeks = 6;

    // const heures = [
    //     ['8:00', '8:15', '8:30', '8:45'],
    //     ['9:00', '9:15', '9:30', '9:45'],
    //     ['10:00', '10:15', '10:30', '10:45'],
    //     ['11:00', '11:15', '11:30', '11:45'],
    //     ['12:00', '12:15', '12:30', '12:45'],
    //     ['13:00', '13:15', '13:30', '13:45'],
    //     ['14:00', '14:15', '14:30', '14:45'],
    //     ['15:00', '15:15', '15:30', '15:45'],
    //     ['16:00', '16:15', '16:30', '16:45'],
    //     ['17:00', '17:15', '17:30', '17:45'],
    // ]

    const jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']

    // const data = [
    //     {
    //         date: '2024-01-01',
    //         rendezVous: [
    //             {
    //                 heure: '8:00',
    //                 demande: "Demande de carte d'identité nationale",
    //                 status: 'En attente'
    //             },
    //             {
    //                 heure: '11:15',
    //                 demande: "Demande de carte d'identité nationale",
    //                 status: 'Confirmé'
    //             },
    //             {
    //                 heure: '9:00',
    //                 demande: "Demande de carte d'identité nationale",
    //                 status: 'Confirmé'
    //             }
    //         ]
    //     }
    // ]


    return (<>
        <div className="h-full flex flex-col overflow-auto">
            <div className="flex w-full border-b">
                <div className="flex-1 flex">
                {
                    jours.map((jour, index) => {
                        return <div key={index} className="flex-1 border-l items-center text-center gap-1 p-1">
                            <p className="text-xs">
                                {jour}
                            </p>
                        </div>
                    })
                }
                </div>
            </div>
            <div className="flex-1 flex flex-col">
                {
                    Array.from({length: maxWeeks}, (_, index) => {
                        
                        return(
                            <div className="flex-1 border-b" key={index}>
                                
                                <div className="flex w-full h-full">
                                    {
                                        Array.from({length: jours.length}, (_, index) => {
                                            return <div key={index} className="flex-1 h-full border-l items-center text-center gap-1 p-1">
                                                <p className="text-xs text-start">
                                                    {index}
                                                </p>
                                            </div>
                                        })
                                    }
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>)
}