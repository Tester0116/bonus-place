export interface IUserPostResponse {
    message: string
}

export interface IUserSignInResponse {
    access?: string,
    phone?: string,
    first_name?: string,
    last_name?: string,
    detail?: string
}

export interface IUserAuthData {
    phone: string
    password: string
    first_name: string
    last_name: string
    password2: string
}