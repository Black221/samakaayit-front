import { NavLink } from "react-router-dom";


export default function InformationsPersonnelles() {


    return (<>
        <div className="flex gap-2">
            <NavLink to="/app/parametres" className="text-blue-500">
                Paramètres
            </NavLink>
            <p>
                &gt;
            </p>
            <p>Informations personnelles</p>
        </div>

        <h1 className="text-4xl font-semibold text-gray-800 my-6">
            Informations Personnelles
        </h1>
        
        <form className="form-horizontal space-y-6">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 p-1">
                <div className="border-b-2 border-gray-200">
                    <label htmlFor="prenom" className="font-bold">Prénom</label>
                    <input type="text" id="prenom" className="w-full p-2  border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>

                <div className="border-b-2 border-gray-200">
                    <label htmlFor="email" className="font-bold">Profession</label>
                    <input type="email" id="email" className="w-full p-2  border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>

                <div className="border-b-2 border-gray-200">
                    <label htmlFor="nom" className="font-bold">Nom</label>
                    <input type="text" id="nom" className="w-full p-2  border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>

                <div className="border-b-2 border-gray-200">
                    <label htmlFor="telephone" className="font-bold">Numéro de la carte d'identité</label>
                    <input type="text" id="telephone" className="w-full p-2  border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>

                <div className="border-b-2 border-gray-200">
                    <label htmlFor="email" className="font-bold">Sexe</label>
                    <select name="sexe" id="sexe" className="w-full p-2  border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                    </select>
                </div>

                <div className="border-b-2 border-gray-200">
                    <label htmlFor="telephone" className="font-bold">Numéo téléphone</label>
                    <input type="text" id="telephone" className="w-full p-2  border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
            </div>

            <div className="flex justify-start">
                <button className="bg-[#00AF4166] text-white p-4 rounded-full w-52 text-xl">Enregistrer</button>
            </div>
        </form>
    </>)
}