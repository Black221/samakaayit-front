import { useState } from "react";
import { useAuth } from "../hooks/useAuth";


export default function AppHeader() {

    const [search, setSearch] = useState<string>('');

    const {
        getUser
    } = useAuth();

     return (
        <header className="header">
            <div className="flex items-center gap-12">
                
                <div className="flex-1 relative flex items-center">
                    <input type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Rechercher"
                        className="w-full rounded-full h-12 border px-12"
                    />
                    <button className="absolute right-12">
                        
                    </button>
                </div>
                
                <div className="flex items-center gap-8">
                    <button className="btn btn-primary">
                        
                    </button>
                    
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                        {
                            getUser()?.name?.split(' ').map((name: string) => name[0].toUpperCase()) 
                            + '' +
                            getUser()?.surname?.split(' ').map((name: string) => name[0].toUpperCase())
                        }
                    </div>
                </div>

            </div>
        </header>
    )
}