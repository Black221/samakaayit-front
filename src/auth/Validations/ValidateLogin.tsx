export const validatePhoneNumber = (phoneNumber: string): string | null => {
    if (!phoneNumber) {
        return "Le numéro de téléphone est requis.";
    }
    const numberRegex = /^(77|78|70|76|75)[0-9]{7}$/; // Numéro de téléphone sénégalais
    if (!numberRegex.test(phoneNumber)) {
        return "Le numéro de téléphone doit être un numéro sénégalais valide.";
    }
    return null;
};

export const validatePassword = (password: string): string | null => {
    if (!password) {
        return "Le mot de passe est requis.";
    }
    // Modifier le regex pour inclure au moins une lettre, un chiffre et un caractère spécial
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    
    if (!passwordRegex.test(password)) {
        return "Le mot de passe doit comporter au moins 8 caractères, incluant au moins une lettre, un chiffre et un caractère spécial.";
    }
    return null;
};

