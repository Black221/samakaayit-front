import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";


export default function IsAuth () {

    const { isLogged } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (1 == 1 || isLogged()) {
            navigate('/app');
        }
    }, [isLogged, navigate]);

    
    return <Outlet />
}