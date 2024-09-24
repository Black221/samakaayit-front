/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"

import { useMainState } from "../hooks/useMainState";
import { useEffect } from "react";

import Dashboard from "./Dashboard";
import RendezVous from "./Rendez-vous/Page";
import Demande from "./Demande/Page";
import Notification from "./Notification/Page";
import Document from "./Document/Page";
import Parametre from "./Parametre/Page";


function App() {


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
				<Route path="/" element={<Dashboard />} />
                <Route path="/rendez-vous/*" element={<RendezVous />} />
                <Route path="/demande/*" element={<Demande />} />
                <Route path="/document/*" element={<Document />} />
                <Route path="/notification/*" element={<Notification />} />
                <Route path="/parametres/*" element={<Parametre />} />
			</Route>
		</Routes>
	</>)
}

export default App
