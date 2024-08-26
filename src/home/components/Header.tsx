import Button from "../../components/Button"


interface IHeader {
    ref: React.RefObject<HTMLDivElement>;
    top: number;
    toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ ref, top, toggle }: IHeader) {


    return (<>
        <header ref={ref} className={`fixed w-screen ${top < 0 ? "-top-[92px]" : "top-0"} z-[1000]`} style={{
            transition: "top 0.6s",
            backgroundColor: "#F2F2F2"
        }}>
            <nav className="w-full mt-10 bg-[#F2F2F2] border-gray-200 px-4 lg:px-[100px] py-2.5">
                <div className="flex flex-wrap items-center justify-between mx-auto">
                    <Logo />
                    <Menu toggle={toggle} />
                    <Links />
                </div>
            </nav>
        </header>
    </>)
}

const Menu = ({ toggle }: { toggle: React.Dispatch<React.SetStateAction<boolean>> }) => {

    return (<>
        <div className="flex items-center lg:order-2">
            <div className="flex justify-center items-center gap-2">
                <a href="/connexion">
                    <Button label="Se connecter" className=" text-[#00AF41]  rounded-full" />
                </a>
                <a href="/inscription">
                    <Button label="S'inscrire" className=" text-white rounded-full bg-[#00AF41]" />
                </a>
            </div>
            <button onClick={() => {
                toggle(prev => !prev)
            }} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="mobile-menu-2" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
        </div>
    </>)
}

const Logo = () => {

    return (<>
        <a href="/" className="flex items-center">
            <img src="/Fichier 2.svg" width={100} height={200} className="mr-3 sm:h-9" alt="Flowbite Logo" />
        </a>
    </>)
}


const Links = () => {

    return (<>
        <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <Link href="/" text="Accueil" />
                <Link href="/about" text="A propos" />
                <Link href="/services" text="Services" />
                <Link href="#" text="Aide" />
            </ul>
        </div>
    </>)
}

interface ILink {
    href: string;
    text: string;
}

const Link = ({ href, text }: ILink) => {

    return (<>
        <li>
            <a href={href} className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">{text}</a>
        </li>
    </>)
}