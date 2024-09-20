import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Aide from "./pages/Aide";
import DetailsService from "./pages/DetailsService";
import Demande from "./pages/demande";



export default function Page() {

    return (<>
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:serviceId" element={<DetailsService />} />
                <Route path="/aide" element={<Aide />} />
                <Route path="/services/:serviceId/:serviceDemande" element={<Demande />} />
            </Route>
        </Routes>
    </>)
}