import Button from "../../components/Button";
import { IoMdTime } from "react-icons/io";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaLaptopFile } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate()
   
    return (
        <>
            <section className="mt-[150px] relative px-4 lg:px-[100px]">
                <div className="relative z-10 flex flex-col justify-between lg:flex-row md:flex-row lg:pt-10">
                    <div className="flex flex-col w-full gap-10 lg:w-1/2 md:w-3/4 md:gap-5">
                        <h2 className="font-bold text-[32px] lg:text-[50px]">Simplifiez vos démarches administratives</h2>
                        <p className="text-gray-500 text-[15px] lg:text-xl md:text-[16px]">Grâce à SAMAKAAYIT vous pouvez désormais effectuer toutes vos démarches administratives depuis chez vous ou depuis votre smartphone. Demandes de passeport, de carte d'identité, d'acte de naissance, paiement de taxes... toutes vos formalités sont simplifiées et accessibles 24h/24 et 7j/7. </p>
                        <Button label="Faire une demande" onClick={() => navigate("/app/demande")} className="font-bold text-black bg-yellow-400 rounded-full w-60 md:w-56 lg:h-16 md:h-12" />
                    </div>
                    {/* Image */}
                    <div className="w-full lg:w-[430px] md:w-1/3 mt-10 lg:mt-0 flex justify-center items-center">
                        <img src="/sohnaci.png" alt="Image" className="relative z-20 w-[80%] lg:w-auto" />
                    </div>
                </div>
                <div className="bg-[#E31B23] w-full h-3 -rotate-6 absolute lg:top-[80%] top-[85%] left-0 z-0">
                </div>
            </section>

            <section className="mb-40">
                <div className="px-4 lg:px-[100px] flex flex-col gap-5 justify-center items-center">
                    <h2 className="font-bold text-[32px] lg:text-[40px] text-center max-w-2xl">Gagnez du temps et simplifiez votre vie !</h2>
                    <p className="max-w-xl text-center text-gray-500 lg:max-w-5xl">Notre portail centralisé à tous les sénégalais une solution simple et rapide pour toutes vos démarches administratives. Suivez en temps réel l'avancement de vos demandes et bénéficiez d'un service personnalisé. Tous vos services sont accessibles en ligne, 24h/24 et 7j/7. Découvrez comment nous vous facilitons la vie au quotidien.</p>
                    <div className="flex flex-wrap justify-center gap-8 mt-5">
                        <div className="flex flex-col items-center justify-center max-w-xs gap-2">
                            <IoMdTime size={50} color="green" />
                            <h2 className="font-bold text-center">Gagner un temps précieux</h2>
                            <p className="text-center text-gray-500">Éliminer les déplacements et les files d'attente grâce à nos services en ligne</p>
                        </div>
                        <div className="flex flex-col items-center justify-center max-w-xs gap-2">
                            <AiOutlineFileSearch size={50} color="green" />
                            <h2 className="font-bold text-center">Bénéficiez d'une transparence totale</h2>
                            <p className="text-center text-gray-500">Suivez l'avancement de toutes vos demandes en temps réel.</p>
                        </div>
                        <div className="flex flex-col items-center justify-center max-w-xs gap-2">
                            <FaLaptopFile size={50} color="green" />
                            <h2 className="font-bold text-center">Accédez à une multitude de services</h2>
                            <p className="text-center text-gray-500">Effectuez vos démarches administratives plus facilement en un seul endroit.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="h-auto bg-[#085F28] py-20 mb-20">
                <div className="flex flex-col items-center justify-center px-4 space-y-10 text-white">
                    <h2 className="text-3xl font-bold text-center lg:text-4xl">Découvrez tous les services disponibles</h2>
                    <p className="text-lg lg:text-[18px] text-center max-w-lg lg:max-w-4xl">Besoin d'un service en particulier ? Parcourez notre liste complète de services ou recherchez le et trouvez rapidement ce dont vous avez besoin.</p>
                    <div className="flex items-center rounded-full gap-2 bg-[#F2F2F2] w-full max-w-xs lg:max-w-md px-10 pl-2 py-2">
                        <Input label="" placeholder="Rechercher un service" onChange={(value) => console.log(value)} className="w-full text-black border-none" />
                        <GoSearch size={30} color="gray" />
                    </div>
                    <div>
                        <a href="/services" className="flex items-center justify-center gap-2 underline cursor-pointer ">
                            Afficher tous les services
                            <FaArrowRight />
                        </a>
                    </div>
                </div>
            </section>

            <section className="relative mb-0 lg:mb-20 lg:h-[900px] h-auto">
                <div className="px-4 lg:px-[100px] flex flex-col gap-3 justify-center items-center">
                    <h2 className="text-3xl font-bold">Téléchargez l’application mobile</h2>
                    <p className="max-w-md text-center text-gray-500 lg:max-w-2xl">Soyez toujours connecté à vos services administratifs grâce à notre application mobile.</p>
                    <div className="relative flex flex-col items-center md:flex-row w-full h-auto lg:h-[500px] mt-10 lg:mt-0">
                        {/* Div en bas à gauche */}
                        <div className="mb-4 lg:mb-0 lg:absolute lg:translate-y-[300px] lg:bottom-[50px]">
                            <h2 className="text-xl font-bold lg:text-2xl">Disponible sur iOS et Android</h2>
                            <img src="/app&google.png" width={200} height={200} alt="App & Google" />
                        </div>

                        {/* Image au centre */}
                        <img src="/Phone_phone.png" alt="Image" className="m-auto w-[60%] lg:w-auto" />

                        {/* Div à droite en haut */}
                        <div className="mt-4 lg:mt-0 lg:translate-y-[90px] lg:absolute lg:top-4 lg:right-0">
                            <ul className="list-disc pl-4 flex flex-col space-y-5 w-[250px]">
                                <li className="font-medium text-md lg:text-xl">Un accès rapide à tous vos services</li>
                                <li className="font-medium text-md lg:text-xl">Vos données à portée de main</li>
                                <li className="font-medium text-md lg:text-xl">Des notifications à temps réel</li>
                                <li className="font-medium text-md lg:text-xl">Une expérience sur mesure</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
