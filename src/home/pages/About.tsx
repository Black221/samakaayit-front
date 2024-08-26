export default function About() {
    return (
        <div className='mt-[150px]' style={{
            backgroundImage: 'url(/senegalDrapeau.png)',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
        }}>
            <div className='h-[150px] md:h-[250px] w-full'></div>

            <section className='h-auto'>
                <div className='bg-[#F2F2F2] px-6 md:px-12 lg:px-24 flex flex-col gap-10'>
                    <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl mt-10 py-10 md:py-20 text-center'>Qu'est-ce que SAMAKAAYIT ?</h2>
                    <div className='flex flex-col md:flex-row'>
                        <div className='text-base md:text-lg lg:text-2xl flex flex-col gap-8 md:gap-16 md:px-20'>
                            <p>SAMAKAAYIT est un Portail Centralisé des Services Publics ayant pour objectif de rationaliser, moderniser et centraliser l'accès aux services administratifs pour les citoyens sénégalais. </p>
                            <p>Il vise à réduire les délais de traitement et à améliorer la transparence des services publics. Le portail permettra aux citoyens de soumettre des demandes de services, de suivre l'état de leurs demandes en temps réel, et de payer les frais associés en ligne. </p>
                            <p>En parallèle, il offrira aux fonctionnaires des outils avancés pour gérer, traiter et suivre les demandes de manière efficace et transparente, tout en optimisant les ressources et en réduisant les coûts et délais administratifs.</p>
                        </div>
                        <img src="/sohnaci.png" alt="" className='w-full md:w-1/2 lg:w-1/3 mt-10 md:mt-0' />
                    </div>
                </div>

                <div className='h-[150px] md:h-[250px] w-full'></div>
            </section>

            <section className='h-auto'>
                <div className='bg-[#F2F2F2] px-6 md:px-12 lg:px-24 flex flex-col gap-10 pb-20 md:pb-56'>
                    <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl mt-10 py-10 md:py-20 text-center'>Innovations</h2>
                    <div className='flex flex-col lg:flex-row gap-10 md:gap-40 items-center justify-center'>
                        <div className='flex flex-col gap-10 md:gap-16'>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-lg font-bold md:text-xl lg:text-2xl'>Centralisation des Services</h2>
                                <hr className='border border-b-2 border-[#00AF41] w-24' />
                                <p className='text-sm md:text-base lg:text-xl max-w-md'>Regroupement de multiples services publics en une seule plateforme, offrant un point d'accès unique pour les citoyens.</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-lg font-bold md:text-xl lg:text-2xl'>Interface Intuitive</h2>
                                <hr className='border border-b-2 border-[#00AF41] w-24' />
                                <p className='text-sm md:text-base lg:text-xl max-w-md'>Développer une interface utilisateur conviviale et facile à utiliser pour toutes les catégories de citoyens.</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-lg font-bold md:text-xl lg:text-2xl'>BackOffice Intégré</h2>
                                <hr className='border border-b-2 border-[#00AF41] w-24' />
                                <p className='text-sm md:text-base lg:text-xl max-w-md'>Fournir aux fonctionnaires des outils avancés pour gérer et traiter les demandes de manière centralisée et transparente.</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-lg font-bold md:text-xl lg:text-2xl'>Intégration avec les Systèmes Existants</h2>
                                <hr className='border border-b-2 border-[#00AF41] w-24' />
                                <p className='text-sm md:text-base lg:text-xl max-w-md'>Connexion avec des bases de données et systèmes administratifs existants pour une mise à jour en temps réel des informations et des statuts des demandes.</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-10 md:gap-16 translate-y-0 lg:translate-y-[100px]'>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-lg font-bold md:text-xl lg:text-2xl'>Accessibilité 24/7</h2>
                                <hr className='border border-b-2 border-[#00AF41] w-24' />
                                <p className='text-sm md:text-base lg:text-xl max-w-md'>Permettre aux citoyens de soumettre et de suivre leurs demandes à tout moment et de n'importe où.</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-lg font-bold md:text-xl lg:text-2xl'>Application Web et Mobile</h2>
                                <hr className='border border-b-2 border-[#00AF41] w-24' />
                                <p className='text-sm md:text-base lg:text-xl max-w-md'>Disponibilité sur les plateformes web et mobiles pour une accessibilité accrue.</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-lg font-bold md:text-xl lg:text-2xl'>Géolocalisation des Services</h2>
                                <hr className='border border-b-2 border-[#00AF41] w-24' />
                                <p className='text-sm md:text-base lg:text-xl max-w-md'>Permettre la soumission des demandes par département et localité, pour une gestion plus précise et adaptée.</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-lg font-bold md:text-xl lg:text-2xl'>Paiement en ligne</h2>
                                <hr className='border border-b-2 border-[#00AF41] w-24' />
                                <p className='text-sm md:text-base lg:text-xl max-w-md'>Faciliter le paiement des frais administratifs directement sur le portail pour plus de commodité.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='h-[150px] md:h-[250px] w-full'></div>
            </section>

            <section className='h-auto'>
                <div className='bg-[#F2F2F2] px-6 md:px-12 lg:px-24 flex flex-col gap-10 items-center justify-center'>
                    <div className='font-bold text-2xl md:text-3xl lg:text-4xl mt-10 py-10 md:py-20 text-center flex flex-col gap-10 md:gap-20'>
                        <h2>Apports</h2>
                        <h2>Pour les citoyens</h2>
                    </div>
                    <div className='flex flex-col md:flex-row '>
                        <div className='flex-1 border-r-0 md:border-r-4 pr-0 md:pr-20 border-[#FDEF42] mb-10 md:mb-0'>
                            <div className='flex flex-col gap-2 mb-5'>
                                <h2 className='text-lg md:text-xl font-bold'>Transparence</h2>
                                <p className="text-sm md:text-base max-w-md">Suivi transparent des demandes, permettant aux citoyens de voir exactement où en est leur demande.</p>
                            </div>
                            <div className='flex flex-col gap-2 mb-5'>
                                <h2 className='text-lg md:text-xl font-bold'>Capture et Soumission Facile de Documents</h2>
                                <p className="text-sm md:text-base max-w-md">Possibilité de soumettre des photos et autres documents nécessaires directement via l'application mobile ou web.</p>
                            </div>
                            <div className='flex flex-col gap-2 mb-5'>
                                <h2 className='text-lg md:text-xl font-bold'>Réduction des erreurs</h2>
                                <p className="text-sm md:text-base max-w-md">Diminution des erreurs humaines grâce à la standardisation des formulaires et des processus.</p>
                            </div>
                            <div className='flex flex-col gap-2 mb-5'>
                                <h2 className='text-lg md:text-xl font-bold'>Simplification des Paiements</h2>
                                <p className="text-sm md:text-base max-w-md">Réduction des déplacements et des files d'attente grâce aux paiements en ligne sécurisés.</p>
                            </div>
                        </div>

                        <div className='flex-1 border-t-4 md:border-t-0 pt-10 md:pt-0 md:pl-20 border-[#FDEF42]'>
                            <div className='flex flex-col gap-2 mb-5'>
                                <h2 className='text-lg md:text-xl font-bold'>Amélioration de l'efficacité administrative</h2>
                                <p className="text-sm md:text-base max-w-md">Réduction des délais de traitement des demandes grâce à l'automatisation et à la centralisation des processus.</p>
                            </div>
                            <div className='flex flex-col gap-2 mb-5'>
                                <h2 className='text-lg md:text-xl font-bold'>Accessibilité</h2>
                                <p className="text-sm md:text-base max-w-md">Accès simplifié et rapide aux services publics, renforçant ainsi l'engagement et la satisfaction des citoyens.</p>
                            </div>
                            <div className='flex flex-col gap-2 mb-5'>
                                <h2 className='text-lg md:text-xl font-bold'>Décentralisation des Services</h2>
                                <p className="text-sm md:text-base max-w-md">Meilleure répartition des tâches et des demandes grâce à la géolocalisation par département et localité..</p>
                            </div>
                        </div>
                    </div>

                    {/* Partie deux */}
                    <div className='font-bold text-2xl md:text-3xl lg:text-4xl py-10 md:py-20 text-center flex flex-col gap-10 md:gap-20'>
                        <h2>Pour les agents administratifs</h2>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-center mb-32'>
                        <div className='flex-1 border-r-0 md:border-r-4 pr-0 md:pr-20 border-[#FDEF42] mb-10 md:mb-0'>
                            <div className='flex flex-col gap-2 mb-5'>
                                <h2 className='text-lg md:text-xl font-bold'>Gestion Efficiente des Demandes</h2>
                                <p className="text-sm md:text-base max-w-md">Chaque département, mairie ou service public reçoit directement les demandes qui le concernent, permettant une réponse plus rapide et ciblée</p>
                            </div>
                            <div className='flex flex-col gap-2 mb-5'>
                                <h2 className='text-lg md:text-xl font-bold'>Interface de BackOffice Intégrée</h2>
                                <p className="text-sm md:text-base max-w-md">Outils avancés pour trier, prioriser et traiter les demandes, avec la possibilité de suivre les actions effectuées et les délais.</p>
                            </div>
                            <div className='flex flex-col gap-2 mb-5'>
                                <h2 className='text-lg md:text-xl font-bold'>Communication Efficace</h2>
                                <p className="text-sm md:text-base max-w-md">Facilitation des échanges entre les différents services grâce à des outils de communication intégrés, permettant une meilleure coordination et collaboration.</p>
                            </div>
                        </div>

                        <div className='flex-1 border-t-4 md:border-t-0 pt-10 md:pt-0 md:pl-20 border-[#FDEF42]'>
                            <div className='flex flex-col gap-2 mb-5'>
                                <h2 className='text-lg md:text-xl font-bold'>Répartition des Tâches</h2>
                                <p className="text-sm md:text-base max-w-md">Gestion des demandes par département et localité, facilitant la répartition des tâches et l'optimisation des ressources.</p>
                            </div>
                            <div className='flex flex-col gap-2 mb-5'>
                                <h2 className='text-lg md:text-xl font-bold'>Suivi et Reporting</h2>
                                <p className="text-sm md:text-base max-w-md">Tableaux de bord et rapports pour suivre les performances et identifier les goulots d'étranglement dans le traitement des demandes.</p>
                            </div>
                            <div className='flex flex-col gap-2 mb-5'>
                                <h2 className='text-lg md:text-xl font-bold'>Réduction des Tâches Administratives Redondantes</h2>
                                <p className="text-sm md:text-base max-w-md">Diminution des tâches répétitives grâce à l'automatisation et à la centralisation des informations.</p>
                            </div>
                        </div>
                    </div>




                </div>

                <div className='h-[150px] md:h-[250px] w-full'></div>
            </section>
        </div>
    )
}
