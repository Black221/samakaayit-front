import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/services/Page";
import Aide from "./pages/Aide";


export default function Page() {

    return (<>
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services/*" element={<Services />} />
                <Route path="/aide" element={<Aide />} /> 
            </Route>
        </Routes>
    </>)
}
