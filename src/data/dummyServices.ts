const dummyServices = [
    {
        id: 1,
        title: 'Demande de carte d’identité nationale',
        description: 'Sollicitez et suivez l\'état de votre demande de carte nationale d\'identité.',
        category: 'Identité et Citoyenneté',
        link:'services/cni'
    },
    {
        id: 2,
        title: 'Demande de passeport',
        description: 'Effectuez votre demande de passeport biométrique et consultez l\'avancement de votre dossier.',
        category: 'Identité et Citoyenneté'
    },
    {
        id: 3,
        title: 'Certificats de naissance, mariage et décès',
        description: 'Commandez en ligne les actes d\'état civil vous concernant.',
        category: 'Identité et Citoyenneté'
    },
    {
        id: 4,
        title: 'Inscriptions sur les listes électorales',
        description: 'Procédez à votre inscription sur les listes électorales.',
        category: 'Identité et Citoyenneté'
    },
    {
        id: 5,
        title: 'Demande de permis de conduire',
        description: 'Introduisez votre demande de permis de conduire et suivez les différentes étapes de la procédure.',
        category: 'Transport et Permis'
    },
    {
        id: 6,
        title: 'Inscription et suivi des demandes de transport public',
        description: 'Déposez votre dossier de demande d\'autorisation de transport public et ...',
        category: 'Transport et Permis'
    },
    {
        id: 7,
        title: 'Paiement des amendes et renouvellement de documents',
        description: 'Réglez vos amendes en ligne et renouvelez vos documents administratifs relatifs.',
        category: 'Transport et Permis'
    },
    {
        id: 8,
        title: 'Demande de logement social',
        description: 'Soumettez votre demande de logement social et consultez les offres disponibles.',
        category: 'Logement et Propriété'
    },
    {
        id: 9,
        title: 'Demande d’actes de propriété',
        description: 'Demandez la délivrance de votre acte de propriété et suivez l\'état d\'avancement de votre dossier.',
        category: 'Logement et Propriété'
    },
    {
        id: 10,
        title: 'Gestion des droits fonciers',
        description: 'Consultez et gérez vos droits fonciers en ligne.',
        category: 'Logement et Propriété'
    },
    {
        id: 11,
        title: 'Demande d’allocations familiales',
        description: 'Effectuez une simulation et déposez votre demande d\'allocations familiales.',
        category: 'Services Sociaux'
    },
    {
        id: 12,
        title: 'Suivi des prestations sociales',
        description: 'Consultez et suivez vos droits et prestations sociales.',
        category: 'Services Sociaux'
    },
    {
        id: 13,
        title: 'Inscription aux services de santé publique',
        description: 'Accédez aux services de santé publique et prenez rendez-vous.',
        category: 'Services Sociaux'
    },
    {
        id: 14,
        title: 'Demandes d’emploi dans la fonction publique',
        description: 'Postulez aux offres d\'emploi de la fonction publique et consultez les résultats des concours.',
        category: 'Emploi et Recrutement'
    },
    {
        id: 15,
        title: 'Suivi des candidatures et notifications des étapes du processus de recrutement',
        description: 'Consultez les notifications relatives à votre candidature et suivez les étapes de votre recrutement.',
        category: 'Emploi et Recrutement'
    },
];

const dummyCategories = [
    {
        title: 'Tous les services',
        services: dummyServices
    },
    {
        title: 'Identité et Citoyenneté',
        services: dummyServices.filter(service => service.category === 'Identité et Citoyenneté')
    },
    {
        title: 'Transport et Permis',
        services: dummyServices.filter(service => service.category === 'Transport et Permis')
    },
    {
        title: 'Logement et Propriété',
        services: dummyServices.filter(service => service.category === 'Logement et Propriété')
    },
    {
        title: 'Services Sociaux',
        services: dummyServices.filter(service => service.category === 'Services Sociaux')
    },
    {
        title: 'Emploi et Recrutement',
        services: dummyServices.filter(service => service.category === 'Emploi et Recrutement')
    },
];

export default { dummyServices, dummyCategories };
