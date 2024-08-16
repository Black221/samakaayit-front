import { Routes, Route, NavLink } from "react-router-dom";
import { Chat } from "../../components/Chat";
import Button from "../../components/Button";
import { FaEye, FaPlus } from "react-icons/fa";


export default function Page() {

    return (<>
        <Routes>

            <Route path="/" element={<>
                
                <div className="items-center justify-between mb-4">
                    <h1 className="text-2xl font-semibold text-gray-700">Bienvenue, Admin</h1>
                    <p className="text-gray-600">Vous avez 3 demandes en attente</p>
                </div>
                <div className="flex gap-2 items-center flex-wrap mb-4">
                    <div className="w-20 h-20 rounded-md bg-slate-400">

                    </div>
                    <div className="w-20 h-20 rounded-md bg-slate-400">

                    </div>
                    <div className="w-20 h-20 rounded-md bg-slate-400">

                    </div>
                    <div className="w-20 h-20 rounded-md bg-slate-400">

                    </div>
  
                </div>
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-xl mb-2 text-gray-700 font-semibold">Mes demandes</h1>
                    <div className="flex items-center gap-4">
                        <NavLink  to="demandes" className="py-2 px-4 rounded-md bg-slate-200 text-gray-700">
                            <FaEye className=""/>
                        </NavLink>
                        <NavLink  to="demandes/ajout" className="py-2 px-4 rounded-md bg-slate-200 text-gray-700">
                            <FaPlus className=""/>
                        </NavLink>
                    </div>
                </div>
                <div className="w-full h-32 relative bg-slate-200 flex flex-col items-center justify-center rounded-xl text-gray-600">
                    <h2 className="absolute top-2 left-2 p-2 py-1 text-xs rounded-full bg-blue-300">En cours</h2>
                    <div className="flex flex-col items-center justify-between w-full px-4">
                        <h1 className="text-lg font-semibold text-gray-700 w-full pt-4">Demande de devis</h1>
                        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias.</p>
                    </div>
                </div>

                <div className="w-full h-32 relative bg-slate-200 flex flex-col items-center justify-center rounded-xl text-gray-600 mt-4">
                    <h2 className="absolute top-2 left-2 p-2 py-1 text-xs rounded-full bg-green-300">Terminées</h2>
                    <p>Vous n'avez aucune demande terminée</p>
                </div>

                <div className="flex items-center justify-between my-4">
                    <h1 className="text-xl mb-2 text-gray-700 font-semibold">Mes documents</h1>
                    <div className="flex items-center gap-4">
                        <Button label={
                            <FaEye className=""/>
                        } className="bg-slate-200 text-gray-700"/>
                        <Button label={
                            <FaPlus className=""/>
                        } className="bg-slate-200 text-gray-700"/>
                    </div>
                </div>




            </>} />


            <Route path="/discussions" element={<Chat />} />
            
        </Routes>
    </>)
}