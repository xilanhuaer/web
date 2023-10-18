import {
  interfaceList,
  interfaceId,
  type Condition,
  type ResponseList,
  type Interface
} from '@/api/interfaceApi'
import { reactive, ref } from 'vue'

export const condition = reactive<Condition>({})

export const result = ref<ResponseList>({
  code: 0,
  data: {
    list: [{
      id: 0,
      name: "",
      type: "",
      path: "",
      header: "",
      description: "",
      enabled: "1",
      creator: "",
      updator: "",
      created_at: "",
      updated_at: "",
      deleted_at: null
    }],
    total: 0
  },
  message: ''
})

export const resultId = ref<Interface>({
  id: 0,
  name: 'string',
  type: 'string',
  path: 'string',
  header: 'string',
  description: 'string',
  enabled: 'string',
  creator: 'string',
  updator: 'string',
  created_at: 'string',
  updated_at: 'string',
  deleted_at: null
})
export const queryInterfaces = async (params: Condition = {}) => {
  Object.assign(condition, params)
  const { data } = await interfaceList(condition)
  if (data.code === 200) {
    result.value = data
  } else {
    ElMessage.error(data.message)
  }
}

export const queryInterface = async (id: number) => {
  const { data } = await interfaceId(id)
  if (data.code === 200) {
    resultId.value = data.data
  } else {
    ElMessage.error(data.message)
  }
}
