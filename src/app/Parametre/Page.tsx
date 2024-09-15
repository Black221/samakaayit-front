import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

import InformationsPersonnelles from "./InformationsPersonnelles";
import Notification from "./Notification";
import ConnexionSecurite from "./ConnexionSecurite";
import Menu from "./Menu";
import Confidentialité from "./Confidentialite";


export default function Page() {

    return (<>
        <Routes>
            <Route path="/" element={<Layout />}>

                <Route path="/" element={<Menu/>} />
                <Route path="informations-personnelles" element={<InformationsPersonnelles />} />
                <Route path="notification" element={<Notification />} />
                <Route path="connexion-securite" element={<ConnexionSecurite />} />
                <Route path="confidentialite" element={<Confidentialité />} />
                
            </Route>
        </Routes>
    </>)
}