import { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
// import { SocialMedia } from "./components/SocialMedia";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Layout() {

    const [prevScrollpos, setPrevScrollpos] = useState(window.scrollY);
    const [top, setTop] = useState(0);
    const [open, toggle] = useState(false);

	const navRef = useRef<HTMLDivElement>(null);

    const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <main className="">
        <Header ref={navRef} top={top} toggle={toggle} />
        <NavMobile open={open} toggle={toggle} />
        <Outlet />
        <Footer />
      </main>
    </QueryClientProvider>
    </>)
}

interface INavMobile {
    open: boolean;
    toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMobile = ({ open, toggle }: INavMobile) => {

    return (<>
        <div className={`fixed ${open ? "block" : "hidden"} top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[999]`} onClick={() => toggle(false)}>
            <div className="relative pt-8 bg-white top-8">
                <nav className="flex flex-col items-center justify-center gap-2 py-8">
                    <a href="/" className="block w-full px-4 py-6 text-sm bg-[#FFC125] capitalize">Accueil</a>
                    <a href="/about" className="block w-full px-4 py-6 text-sm bg-[#FFC125]">A propos</a>
                    <a href="/services" className="block w-full px-4 py-6 text-sm bg-[#FFC125]">Services</a>
                    <a href="/aide" className="block w-full px-4 py-6 text-sm bg-[#FFC125]">Aide</a>
                </nav>
            </div>
        </div>
    </>)
}