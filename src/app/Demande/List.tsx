
import { useLocation } from 'react-router-dom';


export default function List () {


    const demandes = [
        {
            id: 1,
            libelle: "Demande de carte d'identité nationale",
            num_dossier: "2021-0001",
            date: "01/01/2021",
            status: "En attente"
        },
        {
            id: 1,
            libelle: "Demande de carte d'identité nationale",
            num_dossier: "2021-0001",
            date: "01/01/2021",
            status: "Bloquée"
        },
        {
            id: 1,
            libelle: "Demande de carte d'identité nationale",
            num_dossier: "2021-0001",
            date: "01/01/2021",
            status: "Traité"
        },
        
    ]

    const location = useLocation();

    const demandeToRender = demandes
        .filter(
            demande => location.pathname.includes(
                demande.status.toLowerCase().replace('é', 'e').replace(' ', '-')
            )
        )

    const statutColor = (status: string) => {
        if(status === 'En attente') {
            return 'bg-[#EAEAEA]'
        } else if (status === 'Confirmée') {
            return 'bg-primary-100'
        } else if (status === 'Traité') {
            return 'bg-[#FFFAC2]'
        } else {
            return 'bg-[#F0CBB8]'
        }
    }

    return (<>
        
        <div>
            {
                demandeToRender.map((demande, index) => {
                    return <div key={index} className="flex items-center gap-1 p-1 py-4 border-b-2 border-[#7B7C7E]">
                        <div className={`w-20 h-20 bg-red-50`} >

                        </div>

                        <div className="flex-1 flex flex-col gap-1">
                            <p className="text-[14px] font-semibold">
                                {demande.libelle}
                            </p>
                            
                            <p className="text-xs">
                                N° de dossier: {demande.num_dossier}
                            </p>
                            <p className="text-xs">
                                {demande.date}
                            </p>
                        </div>

                        <div>
                            <p className={`w-32 text-black py-1 text-center text-xs font-semibold ${statutColor(demande.status)}`}>
                                {demande.status}
                            </p>
                        </div>
                        
                    </div>
                })
            }         
        </div>
    </>)
}