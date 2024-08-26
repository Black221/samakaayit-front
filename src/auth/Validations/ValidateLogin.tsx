
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

