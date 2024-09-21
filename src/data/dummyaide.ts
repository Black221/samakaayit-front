type FAQCategory = {
    title: string;
    questions: string[];
  };
  
  const faqCategories: FAQCategory[] = [
    {
      title: "Générale",
      questions: [
        "Comment modifier mon adresse e-mail ?",
        "Comment récupérer mon mot de passe ?",
        "Je ne reçois pas d'e-mail de confirmation, comment faire ?"
      ]
    },
    {
      title: "Création et gestion de compte",
      questions: [
        "Comment créer un compte ?",
        "Comment réinitialiser mon mot de passe ?",
        "Pourquoi mon compte a été bloqué ?",
        "Comment modifier mes informations personnelles ?"
      ]
    },
    {
      title: "Utilisation du portail",
      questions: [
        "Comment effectuer une demande de service ?",
        "Comment suivre l'avancement d'une demande ?",
        "Comment télécharger les pièces à fournir ?",
        "Comment payer les frais de dossiers d'une demande ?",
        "Comment prendre rendez-vous ?"
      ]
    },
    {
      title: "Problèmes techniques",
      questions: [
        "Que faire si je rencontre un problème technique ?",
        "Mon navigateur n'est pas compatible, que faire ?"
      ]
    },
    {
      title: "Sécurité",
      questions: [
        "Je reçois une alerte connexion, que faire ?",
        "Comment consulter son historique de connexion ?",
        "Comment bloquer les comptes que je n'utilise pas ?"
      ]
    },
    {
      title: "Application mobile",
      questions: [
        "Comment télécharger l'application mobile ?",
        "Comment marche l'application mobile ?"
      ]
    },
    {
      title: "Contact",
      questions: [
        "Comment nous contacter ?"
      ]
    }
  ];

export default faqCategories