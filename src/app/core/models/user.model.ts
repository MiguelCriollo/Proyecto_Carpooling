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
    id: number,
    license: string,
    yearofdriving: number,
    numberofcars: number
}