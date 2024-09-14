import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";


export default function Page() {

    return (<>
        <Routes>
            <Route path="/" element={<Layout />}>

                <Route path="/" element={<>
                    <h1>Rendez-vous</h1>
                    <p>Page de gestion des rendez-vous</p>
                </>} />
            </Route>
        </Routes>
    </>)
}