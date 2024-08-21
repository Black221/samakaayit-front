import { FaDoorOpen } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

interface ISidebar {
    open: boolean;
    float?: boolean;
    width?: number;
    preview?: boolean;
}

export default function Sidebar ({open, float, width}: ISidebar) {

    const { getUser } = useAuth();

    const location = useLocation();
    const isCurrent = (path: string) => {
        return location.pathname.includes(path);
    }

    return (<>
        <div className={`h-screen bg-white min-w-64 p-4 md:pr-0
            flex flex-col z-[1000]
            ${open ? 'left-0' : '-left-full'} 
            ${float ? 'fixed' : 'relative'}
            ${width ? 'w-'+ width : ''}`} style={{
                transition: "left 0.25s"
            }}>

            <div className="w-full h-56 rounded-xl bg-gray-400 flex flex-col justify-evenly">
                <div className="flex mx-auto items-center justify-center size-32 rounded-full bg-white">

                </div>
                <div>
                    <div className="text-white text-center font-semibold">{getUser()?.email}</div>
                    <div className="text-white text-center">{getUser()?.role}</div>
                </div>
            </div>
            <div className="flex-1 py-4">
                <div>
                    <div className="text-gray-500 text-sm font-bold uppercase">Main</div>
                    <ul>
                        <Link to="/app" children="Dashboard" active={
                            !isCurrent("/app/")
                        } />
                        <Link to="/app/discussions" children="Discussions" active={
                            isCurrent("/discussions")
                        } />
                    </ul>
                </div>
                <div>
                    <div className="text-gray-500 text-sm font-bold uppercase mt-4">Settings</div>
                    <ul>
                        <Link to="/app/settings" children="General" active={
                            isCurrent("/settings") && !isCurrent("/settings/")
                        } />
                        <Link to="/app/settings/security" children="Security" active={
                            isCurrent("/security")
                        } />
                    </ul>
                </div>
            </div>
            <NavLink to={""} className="py-4 flex items-center gap-4">
                <FaDoorOpen className="inline-block text-gray-500 size-8" /> 
            </NavLink>
        </div>
    </>)
}

const Link = ({icon, to, children, active}: {icon?: React.ReactNode, to: string, children: string, active: boolean}) => {
    return (<>
        <li className={` hover:bg-gray-100 rounded-lg ${active ? 'bg-gray-100' : ''}`}>
            {icon} <NavLink to={to} className="text-gray-500 py-2 px-4 block ">{children}</NavLink>
        </li>
    </>)
}