

export default function Dashboard () {

    return (
        <div className="bg-white flex h-full w-full gap-4 p-1">
            <div className="flex-1 h-full flex flex-col gap-4">
                <div className="flex gap-4">
                    <div className="flex w-1/2 bg-white gap-4 p-4 rounded-lg shadow drop-shadow">
                        <div className="bg-primary-50 p-4 rounded-2xl gap-1 flex flex-col">
                            <div>Icon</div>
                            <p className="text-[24px] font-semibold">15</p>
                            <p className="font-semibold text-base">Total de demandes</p>
                        </div>
                        <div className="bg-tertiary-100 p-4 rounded-2xl gap-1 flex flex-col">
                            <div>Icon</div>
                            <p className="text-[24px] font-semibold">15</p>
                            <p className="font-semibold text-base">Total de rendez-vous</p>
                        </div>
                    </div>
                    <div className="w-1/2 bg-white p-4 rounded-lg shadow drop-shadow text-sm">
                        <div className="flex justify-between mb-2">
                            <h2 className="text-[18px] text-[#818181]">Historique</h2>
                            <button>Icon</button>
                        </div>
                        <div>
                            <h3 className="text-[12px] text-secondary-900 font-bold">Demande de carte d'identité national</h3>
                            <p className="text-[12px] text-[#7B7C7E]">21/09/2024</p>
                        </div>
                        
                    </div>
                </div>
                <div className="flex-1 bg-white p-4 rounded-lg shadow drop-shadow">
                    <div className="flex justify-between mb-2">
                        <h2 className="text-[18px] text-[#818181]">Rendez-vous</h2>
                        <button>Icon</button>
                    </div>
                    <h2 className="text-2xl font-semibold">
                        Janvier
                    </h2>
                    <div>

                    </div>
                </div>
            </div>


            <div className="flex flex-col gap-4  w-80">
                <div className="bg-white p-4 rounded-lg shadow drop-shadow">
                    <div>
                        <img src="src/assets/5841882_2968305 1.png" alt="" />
                    </div>
                    <div className="bg-tertiary-400 w-full rounded-bl-full rounded-tr-full p-3 text-center font-bold">
                        Enquête de satisfaction
                    </div>
                    <div className="py-4 space-y-2">
                        <h3 className="text-[18px] font-semibold">Votre avis intéresse</h3>
                        <p className="text-[12px] text-[#818181]">
                            Aidez nous à améliorer nos services en nous 
                            faisant part de vos impréssions
                        </p>
                    </div>
                </div>
                <div className="flex-1 bg-white p-4 rounded-lg shadow drop-shadow">
                    <div className="flex justify-between mb-4">
                        <h2 className="text-[18px] text-[#818181]">Notifications</h2>
                        <button>Icon</button>
                    </div>
                    <div>
                        <h3 className="text-[12px] font-bold">Demande de carte d'identité national</h3>
                        <p className="text-[8px]">
                            Bonsoir, il nous faut une synthese des dernieres demandes au ....
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}