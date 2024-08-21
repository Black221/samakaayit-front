import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

export default function Page() {

    return (<>
        <Routes>
            <Route path="/" element={<Layout />} >
                
                <Route path="/test" element={<div >Test</div>} />
                <Route path="/" element={<div>Test</div>} />

            </Route>
        </Routes>
    </>)
}