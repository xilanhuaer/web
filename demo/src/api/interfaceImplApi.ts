import request from "@/utils/request"

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


export const createInterfaceImpl = (data: CreateInterfaceImpl) => {
    return request<ResponseImpl>({
        url: `/v1/interface/impl/`,
        method: 'POST',
        data: data
    })
}
export const updateInterfaceImpl = (data: CreateInterfaceImpl) => {
    return request<ResponseImpl>({
        url: `/v1/interface/impl/${data.id}`,
        method: 'PUT',
        data: data
    })
}