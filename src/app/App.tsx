import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"

import { useMainState } from "../hooks/useMainState";
import { useEffect } from "react";


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
				<Route path="/*" element={<div>Test</div>} />
			</Route>
		</Routes>
	</>)
}

export default App
