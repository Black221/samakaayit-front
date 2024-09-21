

export const normalizeString = (name: string) => {
    return name
    .toLowerCase()
    .replaceAll(' ', '_')
    .replaceAll('-', '_')
    .replaceAll('\'', '_')
    .replaceAll('é', 'e')
    .replaceAll('è', 'e')
    .replaceAll('ê', 'e')
    .replaceAll('à', 'a')
    .replaceAll('ç', 'c')
    .replaceAll('ù', 'u')
    .replaceAll('û', 'u')
    .replaceAll('ô', 'o')
    .replaceAll('î', 'i')
    .replaceAll('ï', 'i')
    .replaceAll('ö', 'o')
    .replaceAll('ü', 'u')
    .replaceAll('â', 'a')
    ;
}