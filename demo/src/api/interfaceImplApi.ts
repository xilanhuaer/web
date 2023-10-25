import request from "@/utils/request"

export type Condition = Partial<{
    name: String
    interface_name: String
    type: String
    enabled: String
    main_collection_id: Number
    sub_collection_id: Number
}>

type CreateInterfaceImpl = {
    id?: Number
    interface_id: Number | undefined
    name: String
    type: String
    params: String
    headers: String
    json_body: String
    enabled: String
    description: String
    main_collection_id: Number | undefined
    sub_collection_id: Number | undefined
}
type InterfaceImpl = {
    id: Number
    interface_id: Number
    interface_name: String
    name: String
    path: String
    type: String
    params: String
    headers: String
    json_body: String
    enabled: String
    description: String
    main_collection_id: Number
    main_collection_name: String
    sub_collection_id: Number
    sub_collection_name: String
    creator: String
    updator: String
    created_at: String
    updated_at: String
    deleted_at: String
}
type InterfaceImplListData = {
    list: InterfaceImpl[]
    total: Number
}
export type InterfaceImplList = {
    code: Number
    data: InterfaceImplListData
    message: String
}
type ResponseImplDataList = {

}
type ResponseImplData = {
    list: ResponseImplDataList
    total: Number
}
type ResponseImpl = {
    code: Number
    data: ResponseImplData
    message: String
}
export type InterfaceDataId = {
    code: Number
    data: InterfaceImpl
    message: String
}


export const createInterfaceImpl = (data: CreateInterfaceImpl) => {
    return request<ResponseImpl>({
        url: `/v1/interface/impl`,
        method: 'POST',
        headers: {
            'Authorization': localStorage.getItem('token')
        },
        data: data
    })
}
export const interfaceImplList = (condition: Condition) => {
    return request<InterfaceImplList>({
        url: `/v1/interface/impl/`,
        method: 'GET',
        headers: {
            'Authorization': localStorage.getItem('token')
        },
        params: condition
    })
}

export const interfaceImpl = (id: Number) => {
    return request<InterfaceDataId>({
        url: `/v1/interface/impl/${id}`,
        method: 'GET',
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    })
}
export const updateInterfaceImpl = (data: CreateInterfaceImpl) => {
    return request<ResponseImpl>({
        url: `/v1/interface/impl/${data.id}`,
        method: 'PUT',
        headers: {
            'Authorization': localStorage.getItem('token')
        },
        data: data
    })
}