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
                <Route path="/par-jour" element={<ParJour/>} />
                <Route path="/par-semaine" element={<ParSemaine/>} />
                <Route path="/par-mois" element={<ParMois/>} />
                <Route path="/par-annee" element={<ParAnnee/>} />

            </Route>
        </Routes>
    </>)
}