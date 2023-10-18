import request from '@/utils/request'

export type Condition = Partial<{
  name: string
  type: string
  enabled: string
  updated_at: string
}>

export type EditInterface = {
  id?: number
  name: string
  type: string
  path: string
  header: string
  description: string
  enabled: string
}

export type Interface = {
  id: number
  name: string
  type: string
  path: string
  header: string
  description: string
  enabled: string
  creator: string
  updator: string
  created_at: string
  updated_at: string
  deleted_at: null
}
type ResultData = {
  list: Interface[]
  total: number
}

export type ResponseList = {
  code: number
  data: ResultData
  message: string
}
export type ResponseId = {
  code: number
  data: Interface
  message: string
}
export const interfaceList = (condition: Condition) => {
  return request<ResponseList>({
    method: 'GET',
    url: `/v1/interface/`,
    params: condition
  })
}
export const interfaceId = (id: number) => {
  return request<ResponseId>({
    method: 'GET',
    url: `/v1/interface/${id}`
  })
}
export const updateInterface = (data: EditInterface) => {
  return request<ResponseList>({
    method: 'PUT',
    url: `/v1/interface/${data.id}`,
    data: data
  })
}

export const createInterface = (data: EditInterface) => {
  return request<ResponseList>({
    method: 'POST',
    url: '/v1/interface/',
    data: data
  })
}

export const exchangeEnable = (id: number, enable: string) => {
  return request<ResponseList>({
    method: 'PUT',
    url: `/v1/interface/enable/${id}`,
    data: `{"enabled":"${enable}"}`
  })
}
