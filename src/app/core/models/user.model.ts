export interface UserAuthModel{
    jwt: string,
    user: User
}

export interface User{
    id: number,
    username: string
}

export interface UserRegisterModel{
    username: string,
    email: string,
    password: string;
}