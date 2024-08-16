import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"

import AdminPage from "./admin/Page";
import UserPage from "./user/Page";
import { useAuth } from "../hooks/useAuth";
import { useMainState } from "../hooks/useMainState";
import { useEffect } from "react";


const CheckRole = (role: string) => {
	return  role === 'admin' ? <AdminPage /> : <UserPage />
}

function App() {

	const { getRole } = useAuth();

	const {
        setScreenSize,
        setLargeScreen,
    } = useMainState();

	useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
            if (window.innerWidth < 768)
                setLargeScreen(false);
            else
                setLargeScreen(true);
        };
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    });


	return (<>
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={CheckRole(getRole())} />
				<Route path="/*" element={CheckRole(getRole())} />
			</Route>
		</Routes>
	</>)
}

export default App
