import { IoArrowBack } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <section className="container px-4 mx-auto mb-12 md:mb-24">
            <div className="flex items-center mb-6 text-green-600 cursor-pointer">
                <Link to="/app/"><IoArrowBack size={20} /></Link>
                <Link to="/app/" className="ml-2 text-sm md:text-base">Retour</Link>
            </div>
      <Outlet />
      </section>
    
    </>
  );
}

export default Layout;
