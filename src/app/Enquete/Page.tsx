import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Details from "./Details";

export default function Page() {

  return (<>
      <Routes>
          <Route path="/" element={<Layout />}>

              <Route path="/" element={<Details />} />

          </Route>
      </Routes>
  </>)
}