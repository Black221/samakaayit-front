import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import dashboardSvg from '../assets/svg/Dashboard_V.svg';
import demandeSvg from '../assets/svg/Demande_V.svg';
import notificationSvg from '../assets/svg/Message_V.svg';
import rendezVousSvg from '../assets/svg/RV_V.svg';
import parametresSvg from '../assets/svg/Param.svg';

import logo from '../assets/svg/logo.svg';
import { useModal } from '../hooks/useModal';
import { ModalBody, ModalFooter, ModalHead } from './ModalComponents';
import { useAuth } from '../hooks/useAuth';




export default function AppSidebar () {

    const links = [
        {
            name: 'Dashboard',
            icon: dashboardSvg,
            route: '/app'
        },
        {
            name: 'Mes documents',
            icon: demandeSvg,
            route: '/app/document'
        },
        {
            name: 'Demande',
            icon: demandeSvg,
            route: '/app/demande'
        },
        {
            name: 'Rendez-vous',
            icon: rendezVousSvg,
            route: '/app/rendez-vous'
        },
        {
            name: 'Notification',
            icon: notificationSvg,
            route: '/app/notification'
        },
        {
            name: 'Paramètres',
            icon: parametresSvg,
            route: '/app/parametres'
        }
    ]


    const location = useLocation();
    const navigate  = useNavigate();

    const isActive = (route: string) => {
        if (route === '/app' && location.pathname !== '/app') {
            return false;
        }
        return location.pathname.includes(route);
    }

    const {
        logout: logoutForcer
    } = useAuth();

    const {
        openModal,
        closeModal
    } = useModal();

    const logoutt = () =>  {
        logoutForcer();
        navigate('/');
    }

    const logoutUser = () => {
        openModal(
            <LogoutModal 
                logout={logoutt}
                close={closeModal}
                loading={false}
            />
        );
    }

    return (<>
        <div className="flex flex-col h-full justify-start w-64 bg-white border-r border-r-[#8585852B]">

            <div className="w-full h-[168px] flex items-center justify-center">
                <div>
                    <img src={logo} alt="" className="w-32 h-auto" />
                </div>
            </div>

            <div className="flex flex-col flex-1 overflow-auto w-full mx-auto gap-2 pl-10">
                {
                    links.map((link, index) => (
                        <div 
                            key={index} 
                            className={`flex items-center justify-start gap-6 relative w-full py-4 pl-4 rounded-l-full ${isActive(link.route) ? 'bg-secondary-100' : ''}`}
                        >
                            <div className="w-8 h-8 rounded-full">
                                {/* Use svg */}
                                <img src={link.icon} alt="" className='w-full h-full' />
                            </div>
                            <NavLink 
                                to={link.route} 
                                className={`text-[#858585]`}>
                                {link.name}
                            </NavLink>
                        </div>
                    ))
                }
            </div>

            <div className="flex flex-col justify-end min-h-[200px]">
                <div className="flex items-center justify-start gap-4 p-4">
                    <div className="w-8 h-8 rounded-full"></div>
                    <button onClick={logoutUser} className="bg-primary-700 text-white px-4 py-1 rounded-md">
                        Se déconnecter
                    </button>
                </div>
            </div>
        </div>
    </>)
}


const LogoutModal = ({
    logout,
    close,
    loading
} : {
    logout: () => void,
    close: () => void,
    loading: boolean
}) => {
    return (<>
        <ModalHead>
            <h1 className="text-xl font-bold">
                Se déconnecter
            </h1>
        </ModalHead>
        <ModalBody>
            {loading 
                ? <div className="flex items-center justify-center">
                    <p>
                        Déconnexion en cours...
                    </p>
                </div> 
                : <div className="space-y-4">
                    <p>
                        Voulez-vous vraiment vous déconnecter ?
                    </p>
                    
                </div>
            }
        </ModalBody>
        <ModalFooter>
            {!loading && <div className="flex justify-end gap-4">
                <button className="bg-primary-700 text-white px-4 py-1 rounded-md"
                    onClick={() => {
                        logout();
                    }}
                >
                    Oui
                </button>
                <button className="bg-gray-200 text-gray-800 px-4 py-1 rounded-md"
                    onClick={close}
                >
                    Non
                </button>
            </div>}
        </ModalFooter>
    </>)
}