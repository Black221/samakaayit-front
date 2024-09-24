import { NavLink } from "react-router-dom";
import { ICitoyen, useCitoyen } from "../../models/Citoyen";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";


export default function InformationsPersonnelles() {

    const {
        fetchCitizenById,
        updateCitizen,
        response,
        loading
    } = useCitoyen();

    const {
        getUser
    } = useAuth();

    
    useEffect(() => {
        fetchCitizenById(getUser()?._id || '');
        // eslint-disable-next-line
    }, []);

    const citoyen: ICitoyen = response?.data || {
        nom: '',
        prenom: '',
        sexe: '',
        profession: '',
        numeroCarteIdentite: '',
        numeroTelephone: ''
    };

    const [canModify, setCanModify] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const form = e.target;
        const data:Partial<ICitoyen> = {
            surname: form.surname.value,
            name: form.name.value,
            sex: form.sex.value,
            birthDate: form.birthDate.value,
            job: form.job.value,
            birthCountry: form.birthCountry.value,
            birthDepartment: form.birthDepartment.value,
            address: form.address.value,
            CNI: form.CNI.value,
            fathersSurname: form.fathersSurname.value,
            fathersName: form.fathersName.value,
            mothersSurname: form.mothersSurname.value,
            mothersName: form.mothersName.value,
        };
        updateCitizen(response?.data?._id, data);
    }

    useEffect(() => {
        if(response) {
            setCanModify(false);
        }
    }, [response])


    return (<>
        {
            loading && <div className="fixed top-0 left-0 w-screen h-screen bg-white bg-opacity-70 z-50 flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        }
        <div className="flex gap-2">
            <NavLink to="/app/parametres" className="text-blue-500">
                Paramètres
            </NavLink>
            <p>
                &gt;
            </p>
            <p>Informations personnelles</p>
        </div>

        
        
        <form onSubmit={handleSubmit} className="form-horizontal space-y-10 pr-10">

            <h1 className="text-3xl font-semibold text-gray-800 my-6">
                Informations personnelles
            </h1>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 p-1">
                <div className="border-b-2 border-gray-200">
                    <label htmlFor="surname" className="font-bold">Prénom</label>
                    <input 
                        readOnly={!canModify}
                        defaultValue={
                        citoyen.surname
                    } type="text" id="surname" name="surname" className="w-full p-2  border-gray-300 rounded-lg focus:outline-none " />
                </div>


                <div className="border-b-2 border-gray-200">
                    <label htmlFor="name" className="font-bold">Nom</label>
                    <input 
                        readOnly={!canModify}
                        defaultValue={
                        citoyen.name
                    } type="text" id="name" name="name" className="w-full p-2  border-gray-300 rounded-lg focus:outline-none " />
                </div>

                <div className="border-b-2 border-gray-200">
                    <label htmlFor="sex" className="font-bold">Sexe</label>
                    {
                        canModify 
                        ? <select defaultValue={ citoyen.sex } name="sex" id="sex" className="w-full p-2  border-gray-300 rounded-lg focus:outline-none ">
                            <option value="M">Homme</option>
                            <option value="F">Femme</option>
                        </select>
                        : <input defaultValue={ citoyen.sex === 'M' ? 'Homme' : 'Femme' } type="text" name="sex" id="sex" className="w-full p-2  border-gray-300 rounded-lg focus:outline-none " readOnly />
                    }
                </div>

                <div className="border-b-2 border-gray-200">
                    <label htmlFor="birthDate" className="font-bold">Date de naissance</label>
                    <input 
                        readOnly={!canModify}
                        defaultValue={
                        citoyen.birthDate
                    } type="date" id="birthDate" name="birthDate" className="w-full p-2  border-gray-300 rounded-lg focus:outline-none " />
                </div>
                
                <div className="border-b-2 border-gray-200">
                    <label htmlFor="job" className="font-bold">Profession</label>
                    <input 
                        readOnly={!canModify}
                        defaultValue={
                        citoyen.job
                    } type="text" id="job" name="job" className="w-full p-2  border-gray-300 rounded-lg focus:outline-none " />
                </div>
               
                <div className="border-b-2 border-gray-200">
                    <label htmlFor="birthCountry" className="font-bold">Pays de naissance</label>
                    <input 
                        readOnly={!canModify}
                        defaultValue={
                        citoyen.birthCountry
                    } type="text" id="birthCountry" name="birthCountry" className="w-full p-2  border-gray-300 rounded-lg focus:outline-none " />
                </div>

                <div className="border-b-2 border-gray-200">
                    <label htmlFor="birthDepartment" className="font-bold">Ville de naissance</label>
                    <input 
                        readOnly={!canModify}
                        defaultValue={
                        citoyen.birthDepartment
                    } type="text" id="birthDepartment" name="birthDepartment" className="w-full p-2  border-gray-300 rounded-lg focus:outline-none " />
                </div>

                <div className="border-b-2 border-gray-200">
                    <label htmlFor="address" className="font-bold">Adresse</label>
                    <input 
                        readOnly={!canModify}
                        defaultValue={
                        citoyen.address
                    } type="text" id="address" name="address" className="w-full p-2  border-gray-300 rounded-lg focus:outline-none " />
                </div>


                <div className="col-span-2 border-b-2 border-gray-200">
                    <label htmlFor="CNI" className="font-bold">Numéro de la carte d'identité</label>
                    <input 
                        readOnly={!canModify}
                        defaultValue={
                        citoyen.CNI
                    } type="text" id="CNI" name="CNI" className="w-full p-2  border-gray-300 rounded-lg focus:outline-none " />
                </div>

            </div>

            <h1 className="text-3xl font-semibold text-gray-800 my-6">
                Informations parentales
            </h1>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 p-1">
                <div className="border-b-2 border-gray-200">
                    <label htmlFor="fathersSurname" className="font-bold">Prénom du père</label>
                    <input 
                        readOnly={!canModify}
                        defaultValue={
                        citoyen.fathersSurname
                    } type="text" id="fathersSurname" name="fathersSurname" className="w-full p-2  border-gray-300 rounded-lg focus:outline-none " />
                </div>

                <div className="border-b-2 border-gray-200">
                    <label htmlFor="fathersName" className="font-bold">Nom du père</label>
                    <input 
                        readOnly={!canModify}
                        defaultValue={
                        citoyen.fathersName
                    } type="text" id="fathersName" name="fathersName" className="w-full p-2  border-gray-300 rounded-lg focus:outline-none " />
                </div>

                <div className="border-b-2 border-gray-200">
                    <label htmlFor="mothersSurname" className="font-bold">Prénom de la mère</label>
                    <input 
                        readOnly={!canModify}
                        defaultValue={
                        citoyen.mothersSurname
                    } type="text" id="mothersSurname" name="mothersSurname" className="w-full p-2  border-gray-300 rounded-lg focus:outline-none " />
                </div>

                <div className="border-b-2 border-gray-200">
                    <label htmlFor="mothersName" className="font-bold">Nom de la mère</label>
                    <input 
                        readOnly={!canModify}
                        defaultValue={
                        citoyen.mothersName
                    } type="text" id="mothersName" name="mothersName" className="w-full p-2  border-gray-300 rounded-lg focus:outline-none " />
                </div>
            </div>


            <div className="flex justify-end">
                {
                    canModify && <button type="submit" className="bg-primary-700 text-white p-2 min-w-44 px-4 rounded-lg">
                        Enregistrer
                    </button>
                }
                {
                    !canModify && <button type="button" className="bg-primary-700 text-white p-2 min-w-44 px-4 rounded-lg" onClick={() => setCanModify(true)}>
                        Activer la modification
                    </button>
                }
            </div>
        </form>
    </>)
}