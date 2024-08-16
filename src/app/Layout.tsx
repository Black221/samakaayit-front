import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useMainState } from "../hooks/useMainState";
import { Breadcrumb } from "../components/Breadcumb";


export default function Layout() {

    const [open, toggle] = useState(false);
    const [float, setFloat] = useState(true);
    const { largeScreen } = useMainState();

    const ref = useRef<any>(null);
    const sidebarRef = useRef<any>(null);

    const handleClick = (e: any) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target) && open && !largeScreen) {
            toggle(false);
        }
    }
    
    useEffect(() => {
        if (largeScreen) {
            toggle(true);
            setFloat(false);
        } else {
            toggle(false);
            setFloat(true);
        }
    }, [largeScreen]);

    const location = useLocation();

    const getLinks = (path: string) => {

        let ref = ''
        const tab = path.split('/')
        tab.shift();
        if (tab[tab.length - 1] === '') tab.pop()
            
        return tab.map((link) => {
            ref = ref + link + '/'
            return { label: link, icon: "", href: "/" + ref}
        })
    }
    
    return (<>
        <div  ref={ref} onClick={handleClick} className="flex relative">
            <div ref={sidebarRef}>
                <Sidebar  open={open} float={float}  />
            </div>
            <div  className="flex-1 flex flex-col  h-screen">
                <Header toggle={toggle} />
                <div className="flex-1 flex flex-col bg-white p-2 md:px-4">
                    <div className=" bg-gray-100 rounded-2xl flex-1 md:px-6 p-4 py-0">
                        <Breadcrumb link={getLinks(location.pathname)} />
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    </>)
}