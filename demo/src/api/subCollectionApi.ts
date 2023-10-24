import request from '@/utils/request'
export type Condition = Partial<{
  name: string
  main_collection_id: number
  enabled: string
  description: string
}>

type Sub = {
  id: number
  name: string
  main_collection_id: number
  main_collection_name: string
  enabled: string
  description: string
  creator: string
  updator: string
  created_at: string
  updated_at: string
  deleted_at: null
}
type ResponseSubData = {
  list: Sub[]
  total: number
}
export type ResponseSubList = {
  code: number
  data: ResponseSubData
  message: string
}
type EditSub = {
  id?: number
  name: string
  main_collection_id: number
  enabled: string
  description: string
}
type ResponseSubId = {
  code: number
  data: Sub
  message: string
}
export const createSub = (data: EditSub) => {
  return request<ResponseSubList>({
    method: 'POST',
    url: `/v1/collection/sub`,
    headers: {
      'Authorization': localStorage.getItem('token')
    },
    data: data
  })
}
export const subList = (condition: Condition) => {
  return request<ResponseSubList>({
    method: 'GET',
    url: `/v1/collection/sub/`,
    headers: {
      'Authorization': localStorage.getItem('token')
    },
    params: condition
  })
}
export const subId = (id: number) => {
  return request<ResponseSubId>({
    method: 'GET',
    headers: {
      'Authorization': localStorage.getItem('token')
    },
    url: `/v1/collection/sub/${id}`
  })
}
export const updateSub = (data: EditSub) => {
  return request<ResponseSubList>({
    method: 'PUT',
    url: `/v1/collection/sub/${data.id}`,
    headers: {
      'Authorization': localStorage.getItem('token')
    },
    data: data
  })
}
export const exchangeEnable = (id: number, enable: string) => {
  return request<ResponseSubList>({
    method: 'PUT',
    url: `/v1/collection/sub/${id}`,
    headers: {
      'Authorization': localStorage.getItem('token')
    },
    data: `"enabled":"${enable}"`
  })
}

export const createMain = (data: EditSub) => {
  return request<ResponseSubList>({
    method: 'POST',
    url: `/v1/collection/main`,
    headers: {
      'Authorization': localStorage.getItem('token')
    },
    data: data
  })
}
