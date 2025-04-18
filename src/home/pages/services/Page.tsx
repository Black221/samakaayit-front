import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import List from "./List";
import Details from "./Details";



export default function Page () {

    return (<>
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route path="/" element={<List />} />
                <Route path="/:serviceId" element={<Details />} />
            </Route>
        </Routes>
    </>)
}