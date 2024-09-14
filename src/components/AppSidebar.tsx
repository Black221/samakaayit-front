import { NavLink, useLocation } from 'react-router-dom';
import dashboardSvg from '../assets/svg/Dashboard_V.svg';
import demandeSvg from '../assets/svg/Demande_V.svg';
import notificationSvg from '../assets/svg/Message_V.svg';
import rendezVousSvg from '../assets/svg/RV_V.svg';

import logo from '../assets/svg/logo.svg';




export default function AppSidebar () {

    const links = [
        {
            name: 'Dashboard',
            icon: dashboardSvg,
            route: '/app'
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
    ]


    const location = useLocation();

    const isActive = (route: string) => {
        if (route === '/app' && location.pathname !== '/app') {
            return false;
        }
        return location.pathname.includes(route);
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
                    <a href="/app/logout" className="text-[#858585]">Déconnexion</a>
                </div>
            </div>
        </div>
    </>)
}