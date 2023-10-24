import request from "@/utils/request"

export type Register = {
    account: string
    password: string
    code: string,
    name: string,
    email: string,
    phone: string
}
export type Login = {
    account: String
    password: String
}
type UserInfo = {
    id: Number,
    account: String,
    name: String,
    email: String,
    phone: String,
    token: String,
}
type RegisterLoginResponse = {
    code: Number,
    data: UserInfo
    message: string
}


export const register = (data: Register) => {
    return request<RegisterLoginResponse>({
        url: `/v1/user/register`,
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        data: data
    })
}
export const login = (data: Login) => {
    return request<RegisterLoginResponse>({
        url: `/v1/user/login`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    })
}