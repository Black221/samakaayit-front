import { NavLink, Outlet, useLocation } from "react-router-dom";



export default function Layout () {

    const types = [
        {label: "Tous", value: "tous"},
        {label: "Non lus", value: "non-lus"},
    ]

    const location = useLocation();

    
    return (<>

        <div>
            <h2 className="text-[40px] font-semibold">Notifications</h2>
            <p className="text-base text-[#7B7C7E]">Total de 15 demandes</p>
        </div>

        <nav className="flex items-center gap-4 mb-6">
            {
                types.map((type, index) => {
                    return <NavLink to={type.value} key={index} className={`p-2 ${location.pathname.includes(type.value) ? 'border-b-2 border-primary-700 text-primary-700' : ''}`}>
                        {type.label}
                    </NavLink>
                })
            }
        </nav>
        
        <Outlet />
    </>)
}