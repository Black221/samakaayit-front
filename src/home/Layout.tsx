import { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
// import { SocialMedia } from "./components/SocialMedia";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout() {

    const [prevScrollpos, setPrevScrollpos] = useState(window.scrollY);
    const [top, setTop] = useState(0);
    const [open, toggle] = useState(false);

	const navRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			if (prevScrollpos > currentScrollPos) {
				setTop(0); 
			} else {
				setTop(-50); 
			}
			setPrevScrollpos(currentScrollPos);
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [prevScrollpos]);

    
    return (<>
        <main className="">
            <Header ref={navRef} top={top} toggle={toggle} />
            <NavMobile open={open} toggle={toggle} />
            <Outlet />
            <Footer />
        </main>
    </>)
}

interface INavMobile {
    open: boolean;
    toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMobile = ({ open, toggle }: INavMobile) => {

    return (<>
        <div className={`fixed ${open ? "block" : "hidden"} top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[999]`} onClick={() => toggle(false)}>
            <div className="relative top-8 pt-8 bg-white">
                <nav className="flex flex-col items-center justify-center gap-2 py-8">
                    <a href="/" className="block w-full px-4 py-6 text-sm bg-[#FFC125] capitalize">Accueil</a>
                    <a href="/about" className="block w-full px-4 py-6 text-sm bg-[#FFC125]">A propos</a>
                    <a href="#services" className="block w-full px-4 py-6 text-sm bg-[#FFC125]">Services</a>
                    <a href="#contact" className="block w-full px-4 py-6 text-sm bg-[#FFC125]">Aide</a>
                </nav>
            </div>
        </div>
    </>)
}