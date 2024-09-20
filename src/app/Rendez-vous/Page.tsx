import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import ParMois from "./ParMois";
import ParJour from "./ParJour";
import ParSemaine from "./ParSemaine";
import ParAnnee from "./ParAnnee";


export default function Page() {

    return (<>
        <Routes>
            <Route path="/" element={<Layout />}>

                <Route path="/" element={<ParJour/>} />
                <Route path="/jour" element={<ParJour/>} />
                <Route path="/semaine" element={<ParSemaine/>} />
                <Route path="/mois" element={<ParMois/>} />
                <Route path="/annee" element={<ParAnnee/>} />

            </Route>
        </Routes>
    </>)
}