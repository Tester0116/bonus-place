

export const addAuthTokenToLocalstorage = (token: string) => {
    localStorage.setItem('token', token)
}

export const removeAuthTokenToLocalstorage = () => {
    localStorage.removeItem('token')
}

export const getAuthTokenFromLocalstorage = () : string | null => {
    return localStorage.getItem('token')
}