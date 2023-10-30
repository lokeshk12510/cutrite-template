// Valid image types
export const isValidImg = (type: string) => {
    const validDocs = ['image/png', 'image/jpeg', 'image/jpg']

    if (validDocs.includes(type)) {
        return true
    }
    return false
}
