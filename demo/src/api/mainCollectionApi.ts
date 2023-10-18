import request from '@/utils/request'

export type Condition = Partial<{
  name: string
  enabled: string
}>
export type Main = {
  id: number
  name: string
  enabled: string
  description: string
  creator: string
  updator: string
  created_at: string
  updated_at: string
  deleted_at: null
}
type EditMain = {
  id?: number
  name: string
  enabled: string
  description: string
}
type ResponseMainData = {
  list: Main[]
  total: number
}
export type ResponseMainList = {
  code: number
  data: ResponseMainData
  message: string
}
export type ResponseMainId = {
  code: number
  data: Main
  message: string
}
export const mainList = (condition: Condition) => {
  return request<ResponseMainList>({
    method: 'GET',
    url: `/v1/collection/main/`,
    params: condition
  })
}
export const mainId = (id: number) => {
  return request<ResponseMainId>({
    method: 'GET',
    url: `/v1/collection/main/${id}`
  })
}
export const updateMain = (data: EditMain) => {
  return request<ResponseMainList>({
    method: 'PUT',
    url: `/v1/collection/main/${data.id}`,
    data: data
  })
}
export const exchangeEnable = (id: number, enable: string) => {
  return request<ResponseMainList>({
    method: 'PUT',
    url: `/v1/collection/main/enable/${id}`,
    data: `{"enabled":"${enable}"}`
  })
}

export const createMain = (data: EditMain) => {
  return request<ResponseMainList>({
    method: 'POST',
    url: `/v1/collection/main/`,
    data: data
  })
}
