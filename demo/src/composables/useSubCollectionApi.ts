import { subList, type Condition, type ResponseSubList, subId } from '@/api/subCollectionApi'
import { reactive, ref } from 'vue'
export const condition = reactive<Condition>({})

export const resultSub = ref<ResponseSubList>({
  code: 0,
  data: {
    list: [{
      id: 0,
      name: 'string',
      main_collection_id: 0,
      main_collection_name: '',
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
export const resultSubId = ref({
  id: 0,
  name: 'string',
  main_collection_id: 0,
  main_collection_name: '',
  enabled: 'string',
  description: 'string',
  creator: 'string',
  updator: 'string',
  created_at: 'string',
  updated_at: 'string',
  deleted_at: null
})

export const querySub = async (params: Condition = {}) => {
  Object.assign(condition, params)
  const { data } = await subList(condition)
  if (data.code === 200) {
    resultSub.value = data
  } else {
    ElMessage.error('查询列表失败')
  }
}
export const querySubId = async (id: number) => {
  const { data } = await subId(id)
  if (data.code === 200) {
    resultSubId.value = data.data
  } else {
    ElMessage.error('查询列表失败')
  }
}
