import { GoSearch } from "react-icons/go";
import { Outlet } from "react-router-dom";
import Input from "../../../components/Input";
import { useState } from "react";

export default function Layout() {

    const [searchTerm, setSearchTerm] = useState("");

    
    return (<>
              <section className="h-auto bg-[#085F28] py-24 lg:py-36 mb-24">
        <div className="flex flex-col items-center justify-center px-4 space-y-10 text-center text-white">
          <h2 className="text-3xl font-bold lg:text-5xl">
            Découvrez tous les services disponibles
          </h2>
          <p className="max-w-lg text-lg lg:text-xl lg:max-w-2xl">
            Besoin d'un service en particulier ? Parcourez notre liste complète
            de services ou recherchez-le et trouvez rapidement ce dont vous avez
            besoin.
          </p>
          <div className="flex items-center w-full max-w-xs gap-2 px-5 py-2 bg-white rounded-full lg:max-w-md">
            <Input
              label=""
              placeholder="Rechercher"
              onChange={(e) => setSearchTerm(e)}
              className="w-full text-black"
            />
            <GoSearch
              size={30}
              color="gray"
              onClick={() => alert(searchTerm)}
            />
          </div>
        </div>
      </section>
      
        <Outlet />
    </>)
}
