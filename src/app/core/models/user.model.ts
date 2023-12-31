export interface UserAuthModel{
    jwt: string,
    user: User
}

export interface User{
    id: number,
    username: string,
    driver: Driver | null
}

export interface UserRegisterModel{
    username: string,
    email: string,
    password: string;
}

export interface Driver{
    license: string,
    yearsofdriving: string,
    numberofcars: string,
    "users_permissions_user": string
}