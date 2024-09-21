import  {createContext, useState} from "react";
import { ICitoyen } from "../models/Citoyen";

interface AuthContext {
    login: (data: ICitoyen) => void;
    logout: () => void;
    getUser: () => ICitoyen;
    getRole: () => string;
    isLogged: () => boolean;
}

export const AuthStateContext = createContext<AuthContext>({} as AuthContext);

interface AuthContextProviderProps {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthContextProviderProps) => {

    const [user, setUser] = useState<ICitoyen>({} as ICitoyen);

    const login = (data: ICitoyen) => {
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data));
    }

    const logout = () => {
        setUser({} as ICitoyen);
        localStorage.removeItem('user');
    }

    const getUser = () => {
        if (user._id) {
            return user;
        } else {
            const user = localStorage.getItem('user');
            if (user) {
                return JSON.parse(user);
            }
        }

        return {} as ICitoyen;
    }

    const getRole = () => {
        return getUser().role;
    }

    const isLogged = () => {
        return !!getUser()._id;
    }

    return (
        <AuthStateContext.Provider value={{
            getUser, login, logout, getRole, isLogged
        }}>
            {children}
        </AuthStateContext.Provider>
    )
}