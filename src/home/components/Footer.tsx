import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";

export default function Footer() {
    const navigate = useNavigate()

    return (
        <footer className="px-4 lg:px-[100px] md:px-[100px] h-auto flex flex-col justify-center mb-6 relative overflow-hidden">
            <section className="mb-20 lg:mt-10">
                <div className="bg-[#E31B23] w-[calc(100%+20px)] h-3 mt-10 -rotate-6 absolute -left-[10px] z-0"></div>
                <div className="flex flex-col items-center justify-center space-y-8">
                    <h2 className="text-3xl font-bold text-center lg:text-5xl mt-36">Besoin d'aide</h2>
                    <p className="max-w-md text-center text-gray-500 lg:max-w-2xl">Si vous avez besoin d'une aide quelconque, répondez à notre FAQ et faites nous en part.</p>
                    <Button label="Consulter à la FAQ" onClick={() => navigate('/aide')}  className="w-full h-16 text-black bg-yellow-400 rounded-full lg:w-80" />
                </div>
            </section>
            <hr className="w-full mb-6 border border-black" />
            <div className="flex flex-col items-center justify-between gap-4 border-black lg:flex-row lg:gap-0">
                <img src="/Fichier 2.svg" width={150} height={150} alt="" className="mb-5 lg:mb-0" />
                <div className="flex flex-col items-center justify-center gap-5 text-sm text-center lg:flex-row">
                    <a href="/">Accueil</a>
                    <a href="/about">A propos</a>
                    <a href="/services">Services</a>
                    <a href="/aide">Aide</a>
                </div>
                <div className="flex items-center justify-center gap-5 mt-5 lg:mt-0">
                    <Link to="#" className="cursor-pointer" ><GrFacebookOption size={25} /> </Link>
                    <Link to="#" className="cursor-pointer" ><FaTwitter size={25} /> </Link>
                    <Link to="#" className="cursor-pointer" ><FaInstagram size={25} /> </Link>
                </div>
            </div>
        </footer>


    )
}
