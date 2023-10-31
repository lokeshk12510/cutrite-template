// Valid image types
export const isValidImg = (type: string) => {
    const validDocs = ['image/png', 'image/jpeg', 'image/jpg']

    if (validDocs.includes(type)) {
        return true
    }
    return false
}

export function fakePromise<T>(data: T): Promise<T> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 1000) // 1000 milliseconds (1 seconds)
    })
}
