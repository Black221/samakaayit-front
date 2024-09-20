

export default function List () {

    const currentDate = new Date().toISOString().split('T')[0]

    const items = [
        {
            type: 'demande',
            title: "Demande de carte d'identité nationale",
            message: 'Votre demande du 22/08/2024 à été traité',
            date: '2021-08-01'
        },
        {
            type: 'rendez-vous',
            title: 'Demande de rendez-vous',
            message: 'Votre rendez-vous du 13/05/2024 à été confirmé',
            date: '2021-08-01'
        }
    ]

    return (<>

        <div>
            {items.map((item, index) => (
                <div key={index} className="border-b-2 border-gray-200 p-4 space-y-2">

                    <div className="flex gap-2 items-center">
                        <p className="w-2 h-2 bg-red-500 rounded-full"></p>
                        <h3 className="font-bold text-sm">{item.title}</h3>
                    </div>

                    <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 bg-gray-200 rounded-full">

                        </div>
                        <div className="flex items-center gap-1 text-xs">
                            <p className="font-bold">
                                {item.message}
                            </p>
                            <span className="text-base">
                            ・
                            </span>
                            <p>
                                {item.date === currentDate ? 'Aujourd\'hui' : item.date}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>)
}