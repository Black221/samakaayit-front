


export default function Details () {

    return (<>

        <div className="space-y-10">

            <div>
                <h1 className="text-lg font-bold">Demande de carte d’identité nationale</h1>
                <p className="text-base text-gray-500">
                    Sollicitez et suivez l'état de votre demande de carte nationale d'identité.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-10 w-fit">
                <div className="text-base">
                    <p className="font-semibold">
                        Nom
                    </p>
                    <p>
                        ...
                    </p>
                </div>
                <div className="text-base">
                    <p className="font-semibold">
                        Prénom
                    </p>
                    <p>
                        ...
                    </p>
                </div>

                <div className="text-base">
                    <p className="font-semibold">
                        Date de naissance
                    </p>
                    <p>
                        ...
                    </p>
                </div>

                <div className="text-base">
                    <p className="font-semibold">
                        Sexe
                    </p>
                    <p>
                        ...
                    </p>
                </div>

                <div className="text-base">
                    <p className="font-semibold">
                        Pays de naissance
                    </p>
                    <p>
                        ...
                    </p>
                </div>
                
                <div className="text-base">
                    <p className="font-semibold">
                        Nationalité
                    </p>
                    <p>
                        ...
                    </p>
                </div>

                <div className="text-base">
                    <p className="font-semibold">
                        Lieu de résidence
                    </p>
                    <p>
                        ...
                    </p>
                </div>

                <div className="text-base">
                    <p className="font-semibold">
                        Situation matrimoniale
                    </p>
                    <p>
                        ...
                    </p>
                </div>

            </div>

            <div>
                <div className="text-base">
                    <p className="font-semibold">
                        Date de dépôt
                    </p>
                    <p>
                        ...
                    </p>
                </div>

            </div>

            <div>
            <div className="text-base">
                    <p className="font-semibold">
                        Liste des pièces
                    </p>
                    <ol className="list-decimal list-inside ml-2 mt-2">
                        <li>
                            Ancien certificat de naisance
                            <p className="border rounded-2xl p-4 px-6 mt-1 text-sm w-fit">
                                <span className="mr-6">Icon</span> Ouvrir le fichier
                            </p>
                        </li>
                    </ol>
                </div>
            </div>

            <div className="text-base">
                <p className="font-semibold">
                    Paiement effectué
                </p>
                <p className="border rounded-2xl p-4 px-6 mt-1 text-sm w-fit">
                    <span className="mr-6">Icon</span> Payé par wave
                </p>
            </div>
        </div>
    </>)
}