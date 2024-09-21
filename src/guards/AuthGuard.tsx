import { Outlet } from "react-router-dom";
import Login from "../auth/Login/Login";
import { useAuth } from "../hooks/useAuth";


export default function AuthGuard() {

    const { isLogged } = useAuth();

    if (isLogged()) {
        return <Outlet />
    }

    return <Login />
}