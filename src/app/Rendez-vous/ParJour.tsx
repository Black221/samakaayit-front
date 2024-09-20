

export default function ParJour () {


    const heures = [
        ['8:00', '8:15', '8:30', '8:45'],
        ['9:00', '9:15', '9:30', '9:45'],
        ['10:00', '10:15', '10:30', '10:45'],
        ['11:00', '11:15', '11:30', '11:45'],
        ['12:00', '12:15', '12:30', '12:45'],
        ['13:00', '13:15', '13:30', '13:45'],
        ['14:00', '14:15', '14:30', '14:45'],
        ['15:00', '15:15', '15:30', '15:45'],
        ['16:00', '16:15', '16:30', '16:45'],
        ['17:00', '17:15', '17:30', '17:45'],
    ]

    const data = [
        {
            date: '2024-01-01',
            rendezVous: [
                {
                    heure: '8:00',
                    demande: "Demande de carte d'identité nationale",
                    status: 'En attente'
                },
                {
                    heure: '9:15',
                    demande: "Demande de carte d'identité nationale",
                    status: 'Confirmé'
                },
                {
                    heure: '9:00',
                    demande: "Demande de carte d'identité nationale",
                    status: 'Confirmé'
                }
            ]
        }
    ]


    return (<>
        <div className="h-full flex flex-col overflow-auto">
            {
                heures.map((quart, index) => {
                    return <div key={index} className="flex items-center gap-1 flex-1 border-b">
                        <div className="w-16 flex items-center justify-center text-xs border-r h-full">
                            {quart[0]}
                        </div>
                        <div className="flex-1 border-[#DADCE0]">
                            {
                                quart.map((heure, index) => {
                                    const rendezVous = data[0].rendezVous.find(rendezVous => rendezVous.heure === heure)
                                    if (!rendezVous) return <div key={index} className="" />
                                    return <div key={index} className="flex items-center gap-1 p-1">

                                        <div className={`w-2 h-2 mt-1 rounded-full ${rendezVous?.status === 'En attente' ? 'bg-[#F5A623]' : 'bg-[#00AF41]'}`} />

                                        <div className="flex-1 flex w-full justify-between items-center">
                                            <p className="text-xs font-semibold">
                                                {rendezVous?.demande}
                                            </p>

                                            <p className="text-xs">
                                                {heure}
                                            </p>
                                        </div>

                                    </div>
                                })
                            }
                        </div>
                    </div>
                })
            }
        </div>
    </>)
}