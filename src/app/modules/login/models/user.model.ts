export interface UserAuthModel{
    jwt: string,
    user: User
}

interface User{
    id: number
}