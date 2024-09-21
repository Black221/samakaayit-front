import { Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useMainState } from "../hooks/useMainState";
import AppSidebar from "../components/AppSidebar";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { useModal } from "../hooks/useModal";
import { ModalContainer } from "../components/ModalComponents";


export default function Layout() {

    const [open, toggle] = useState(false);
    // const [float, setFloat] = useState(true);
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
            // setFloat(false);
        } else {
            toggle(false);
            // setFloat(true);
        }
    }, [largeScreen]);


    const onCloseModal = (modalRef: any, e: any) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            closeModal();
        }
    }

    const {
        modalElement,
        modalOpen,
        closeModal,
    } = useModal();
    
    return (<>

        <ModalContainer open={modalOpen} onClose={onCloseModal}>
            {modalElement}
        </ModalContainer>
        
        <div  ref={ref} onClick={handleClick} className="flex relative bg-white">
            <div ref={sidebarRef}>
                <AppSidebar />
            </div>
            <div  className="flex-1 flex flex-col h-screen overflow-hidden mx-14">

                <div className="mt-14 mb-8">
                    <AppHeader />
                </div>

                <div className="flex-1 flex flex-col bg-white overflow-auto">
                    <Outlet />
                </div>

                <div>
                    <AppFooter />
                </div>
            </div>
        </div>

        <div id="app-svg" className="hidden">

        </div>
    </>)
}