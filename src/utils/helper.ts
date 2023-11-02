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

export const pxForWidth = (px: number) => {
    const windowWidth = window.innerWidth
    // const res = windowWidth > 1460 ? 0.00085 : 0.00078
    return `${windowWidth * 0.00078 * px}px` // 0.0007813
}
