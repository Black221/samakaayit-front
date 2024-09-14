import { useState } from "react";


export default function AppHeader() {

    const [search, setSearch] = useState<string>('');

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
                        Loupe
                    </button>
                </div>
                
                <div className="flex items-center gap-8">
                    <button className="btn btn-primary">
                        Notifications
                    </button>
                    
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                        R
                    </div>
                </div>

            </div>
        </header>
    )
}