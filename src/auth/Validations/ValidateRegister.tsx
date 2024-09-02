export const validateFirstName = (firstName: string): string | null => {
    if (!firstName) {
        return "Le prénom est requis.";
    }
    if (firstName.length < 2) {
        return "Le prénom doit comporter au moins 2 caractères.";
    }
    const nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
    if (!nameRegex.test(firstName)) {
        return "Le prénom ne peut contenir que des lettres et peut inclure des espaces pour les prénoms composés.";
    }
    return null;
};



export const validateLastName = (lastName: string): string | null => {
    if (!lastName) {
        return "Le nom est requis.";
    }
    const nameRegex = /^[a-zA-Z]{2,}$/;
    if (!nameRegex.test(lastName)) {
        return "Le nom doit comporter au moins 2 caractères et ne peut contenir que des lettres.";
    }
    return null;
};

export const validateNumber = (number: string): string | null => {
    if (!number) {
        return "Le numéro de téléphone est requis.";
    }
    const numberRegex = /^(77|78|70|76|75)[0-9]{7}$/;
    if (!numberRegex.test(number)) {
        return "Le numéro de téléphone doit être un numéro sénégalais valide.";
    }
    return null;
};

export const validateIdCardNumber = (idCardNumber: string): string | null => {
    if (!idCardNumber) {
        return "Le numéro de carte d'identité est requis.";
    }
    const idCardRegex = /^[12][0-9]{11}$/;
    if (!idCardRegex.test(idCardNumber)) {
        return "Le numéro de la carte d'identité doit comporter 12 chiffres et commencer par 1 ou 2.";
    }
    return null;
};

export const validatePassword = (password: string): string | null => {
    if (!password) {
        return "Le mot de passe est requis.";
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        return "Le mot de passe doit comporter au moins 8 caractères, incluant au moins une lettre et un chiffre.";
    }
    return null;
};

export const validateConfirmPassword = (password: string, confirmPassword: string): string | null => {
    if (!confirmPassword) {
        return "La confirmation du mot de passe est requise.";
    }
    if (password !== confirmPassword) {
        return "Les mots de passe ne correspondent pas.";
    }
    return null;
};
