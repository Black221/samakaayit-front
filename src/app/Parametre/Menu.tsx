import { NavLink } from "react-router-dom"


export default function Menu() {

    const items = [
        { 
            label: 'Informations personnelles',
            description: 'Configurez vos informations personnelles', 
            link: 'informations-personnelles',
            icon: 'user'
        },
        { 
            label: 'Notification',
            description: 'Personnalisez vos préférences de notification', 
            link: 'notification',
            icon: 'bell'
        },
        { 
            label: 'Connexion et sécurité',
            description: 'Gérez votre compte', 
            link: 'connexion-securite',
            icon: 'lock'
        },
        { 
            label: 'Confidentialité',
            description: 'Consultez notre politique de confidentialité', 
            link: 'confidentialite',
            icon: 'shield'
        }
    ]
    return (<>
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
            Paramètres
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 p-1">
            {items.map((item, index) => (
                <NavLink key={index} className="block h-40 p-4 bg-white rounded-lg shadow drop-shadow" to={item.link}>
                    <div className="flex flex-col items-start justify-between h-full">
                        <div className="h-12">
                            <i className={`fas fa-${item.icon} text-4xl text-blue-500`}></i>
                        </div>

                        <div className="flex-1">
                            <div>
                                <h3 className="text-lg font-semibold">{item.label}</h3>
                            </div>
                            <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                    </div>
                </NavLink>
            ))}
        </div>
    </>)
}