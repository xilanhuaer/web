import {
  mainList,
  type Condition,
  type ResponseMainList,
  mainId,
  type Main,
  exchangeEnable
} from '@/api/mainCollectionApi'
import { reactive, ref } from 'vue'
export const condition = reactive<Condition>({})

export const resultMain = ref<ResponseMainList>({
  code: 0,
  data: {
    list: [{
      id: 0,
      name: 'string',
      enabled: 'string',
      description: 'string',
      creator: 'string',
      updator: 'string',
      created_at: 'string',
      updated_at: 'string',
      deleted_at: null
    }],
    total: 0
  },
  message: ''
})

export const resultMainId = ref<Main>({
  id: 0,
  name: 'string',
  enabled: 'string',
  description: 'string',
  creator: 'string',
  updator: 'string',
  created_at: 'string',
  updated_at: 'string',
  deleted_at: null
})

export const queryMain = async (params: Condition = {}) => {
  Object.assign(condition, params)
  const { data } = await mainList(condition)
  if (data.code === 200) {
    resultMain.value = data
  } else {
    ElMessage.error('查询列表失败')
  }
}
export const queryMainId = async (id: number) => {
  const { data } = await mainId(id)
  if (data.code === 200) {
    resultMainId.value = data.data
    // ElMessage.success("success")
  } else {
    ElMessage.error('error')
  }
}
export const enable = async (id: number, enabled: string) => {
  const { data } = await exchangeEnable(id, enabled)
  if (data.code === 200) {
    ElMessage.success('更新成功')
  } else {
    ElMessage.error('error')
  }
}
