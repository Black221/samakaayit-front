import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Aide from "./pages/Aide";
import DemandeCni from "./pages/cni/demandeCni";
import DetailsService from "./pages/DetailsService";


export default function Page() {

    return (<>
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:serviceId" element={<DetailsService />} />
                <Route path="/aide" element={<Aide />} />
                <Route path="/services/cni/demande" element={<DemandeCni />} />
            </Route>
        </Routes>
    </>)
}