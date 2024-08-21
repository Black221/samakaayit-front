import { Outlet } from "react-router-dom";
import Login from "../auth/Login";
import { useAuth } from "../hooks/useAuth";


export default function AuthGuard() {

    const { isLogged } = useAuth();

    if (1 == 1 || isLogged()) {
        return <Outlet />
    }

    return <Login />
}