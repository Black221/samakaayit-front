import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Actualities from "./pages/Actualities";
import Actuality from "./pages/Actuality";
import About from "./components/About";
import Home from "./pages/Home";

export default function Page() {

    return (<>
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route path="/" element={<Home />} />
                <Route path="/actu" element={<Actualities />} />
                <Route path="/actu/:slug" element={<Actuality />} />

                
            </Route>
        </Routes>
    </>)
}