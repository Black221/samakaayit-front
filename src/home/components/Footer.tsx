import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function Footer() {
    return (
        <footer className="px-4 lg:px-[100px] md:px-[100px] h-auto flex flex-col justify-center mb-20 border">
            <section className="lg:mt-10 mb-20">
                <div className="bg-[#E31B23] w-full h-2 mt-10 -rotate-6 absolute left-0 z-0"></div>
                <div className="flex flex-col justify-center items-center space-y-8">
                    <h2 className="font-bold text-3xl lg:text-5xl text-center mt-36">Besoin d'aide</h2>
                    <p className="max-w-md lg:max-w-2xl text-center text-gray-500">Si vous avez besoin d'une aide quelconque, répondez à notre FAQ et faites nous en part.</p>
                    <Button label="Consulter à la FAQ" className="text-black bg-yellow-400 rounded-full w-full lg:w-80 h-16" />
                </div>
            </section>
            <hr className="w-full border border-black mb-10" />
            <div className="flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-0 border-black">
                <img src="/Fichier 2.svg" width={150} height={150} alt="" className="mb-5 lg:mb-0" />
                <div className="flex flex-col lg:flex-row justify-center items-center gap-5 text-lg lg:text-2xl text-center">
                    <a href="#">Accueil</a>
                    <a href="#">A propos</a>
                    <a href="#">Services</a>
                    <a href="#">Aide</a>
                </div>
                <div className="flex justify-center items-center gap-5 mt-5 lg:mt-0">
                    <Link to="#" className="cursor-pointer" ><GrFacebookOption size={25} /> </Link>
                    <Link to="#" className="cursor-pointer" ><FaTwitter size={25} /> </Link>
                    <Link to="#" className="cursor-pointer" ><FaInstagram size={25} /> </Link>
                </div>
            </div>
        </footer>


    )
}
