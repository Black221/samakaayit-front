import { MaritalStatus } from "../Register/MaritalStatusEnum";

// Validation pour la CNI
export const validateCNI = (CNI: string): string | null => {
    if (!CNI) {
        return "Le numéro de la Carte Nationale d’Identité est requis.";
    }
    const cniRegex = /^[12][0-9]{11}$/; // 12 chiffres, commence par 1 ou 2
    if (!cniRegex.test(CNI)) {
        return "Le numéro de la CNI doit comporter 12 chiffres et commencer par 1 ou 2.";
    }
    return null;
};

// Validation pour le numéro de téléphone
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

// Validation pour le nom de famille
export const validateName = (name: string): string | null => {
    if (!name) {
        return "Le nom de famille est requis.";
    }
    if (name.length < 2) {
        return "Le nom de famille doit comporter au moins 2 caractères.";
    }
    const nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(name)) {
        return "Le nom de famille ne peut contenir que des lettres.";
    }
    return null;
};

// Validation pour le prénom
export const validateSurname = (surname: string): string | null => {
    if (!surname) {
        return "Le prénom est requis.";
    }
    if (surname.length < 2) {
        return "Le prénom doit comporter au moins 2 caractères.";
    }
    const nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
    if (!nameRegex.test(surname)) {
        return "Le prénom ne peut contenir que des lettres, et peut inclure des espaces pour les prénoms composés.";
    }
    return null;
};


// Validation pour la date de naissance (optionnelle)
export const validateBirthDate = (birthDate: string): string | null => {
    if (!birthDate) {
        return "La date de naissance est requise.";
    }
    if (birthDate && isNaN(Date.parse(birthDate))) {
        return "La date de naissance est invalide.";
    }
    return null;
};

// Validation pour la profession (optionnelle)
export const validateJob = (job: string): string | null => {
    if (!job) {
        return "La profession est requise.";
    }
    if (job && job.length < 2) {
        return "La profession doit comporter au moins 2 caractères.";
    }
    return null;
};

// Validation pour le sexe
export const validateSex = (sex: string): string | null => {
    if (!sex || sex === '') {
        return "Le sexe est requis.";
    }
    if (sex !== 'M' && sex !== 'F') {
        return "Le sexe doit être 'M' pour Masculin ou 'F' pour Féminin.";
    }
    return null;
};

// Validation pour le mot de passe
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

// Validation pour la confirmation du mot de passe
export const validateConfirmPassword = (password: string, confirmPassword: string): string | null => {
    if (!confirmPassword) {
        return "La confirmation du mot de passe est requise.";
    }
    if (password !== confirmPassword) {
        return "Les mots de passe ne correspondent pas.";
    }
    return null;
};

// Validation pour le nom du père (optionnel)
export const validateFathersName = (fathersName: string): string | null => {
    if (!fathersName) {
        return "Le nom de famille est requis.";
    }
    if (fathersName.length < 2) {
        return "Le nom de famille doit comporter au moins 2 caractères.";
    }
    const nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(fathersName)) {
        return "Le nom de famille ne peut contenir que des lettres.";
    }
    return null;
};

// Validation pour le prénom du père (optionnel)
export const validateFathersSurname = (fathersSurname: string): string | null => {
    if (!fathersSurname) {
        return "Le prénom est requis.";
    }
    if (fathersSurname.length < 2) {
        return "Le prénom doit comporter au moins 2 caractères.";
    }
    const nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
    if (!nameRegex.test(fathersSurname)) {
        return "Le prénom ne peut contenir que des lettres, et peut inclure des espaces pour les prénoms composés.";
    }
    return null;
};

// Validation pour le nom de la mère (optionnel)
export const validateMothersName = (mothersName: string): string | null => {
    if (!mothersName) {
        return "Le nom de famille est requis.";
    }
    if (mothersName.length < 2) {
        return "Le nom de famille doit comporter au moins 2 caractères.";
    }
    const nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(mothersName)) {
        return "Le nom de famille ne peut contenir que des lettres.";
    }
    return null;
};

// Validation pour le prénom de la mère (optionnel)
export const validateMothersSurname = (mothersSurname: string): string | null => {
    if (!mothersSurname) {
        return "Le prénom est requis.";
    }
    if (mothersSurname.length < 2) {
        return "Le prénom doit comporter au moins 2 caractères.";
    }
    const nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
    if (!nameRegex.test(mothersSurname)) {
        return "Le prénom ne peut contenir que des lettres, et peut inclure des espaces pour les prénoms composés.";
    }
    return null;
};

// Validation pour l'état civil (optionnel)
export const validateMaritalStatus = (maritalStatus: string): string | null => {
    if (!maritalStatus || !Object.values(MaritalStatus).includes(maritalStatus as MaritalStatus)) {
        return "L'état civil est requis et doit être une option valide.";
    }
    return null;
};

// Validation pour l'adresse (optionnelle)
export const validateAddress = (address: string): string | null => {
    if (!address) {
        return "L'adresse est requise.";
    }
    if (address && address.length < 3) {
        return "L'adresse doit comporter au moins 3 caractères.";
    }
    return null;
};

// Validation pour le pays de naissance (optionnel)
export const validateBirthCountry = (birthCountry: string): string | null => {
    if (!birthCountry) {
        return "Le pays de naissance est requis.";
    }
    if (birthCountry && birthCountry.length < 2) {
        return "Le pays de naissance doit comporter au moins 2 caractères.";
    }
    return null;
};

// Validation pour le département de naissance (optionnel)
export const validateBirthDepartment = (birthDepartment: string): string | null => {
    if (!birthDepartment) {
        return "Le département de naissance est requis.";
    }
    if (birthDepartment && birthDepartment.length < 2) {
        return "Le département de naissance doit comporter au moins 2 caractères.";
    }
    return null;
};
