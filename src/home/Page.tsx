import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import CNI from "./pages/CNI";
import Aide from "./pages/Aide";

export default function Page() {

    return (<>
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/cni" element={<CNI />} />
                <Route path="/aide" element={<Aide />} />
            </Route>
        </Routes>
    </>)
}