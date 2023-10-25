import { interfaceImplList, interfaceImpl, type Condition, type InterfaceImplList, type InterfaceDataId } from "@/api/interfaceImplApi";
import { reactive, ref } from "vue";

export const condition = reactive<Condition>({});
export const resultInterfaceImplList = ref<InterfaceImplList>({
    code: 0,
    data: {
        list: [],
        total: 0
    },
    message: ''
})
export const resultInterfaceImplId = ref<InterfaceDataId>({
    code: 0,
    data: {
        id: 0,
        interface_id: 0,
        interface_name: '',
        name: '',
        path: '',
        type: '',
        params: '',
        headers: '',
        json_body: '',
        enabled: '',
        description: '',
        main_collection_id: 0,
        main_collection_name: '',
        sub_collection_id: 0,
        sub_collection_name: '',
        creator: '',
        updator: '',
        created_at: '',
        updated_at: '',
        deleted_at: ''
    },
    message: ''
})

export const queryInterfaceImplList = async (params: Condition) => {
    Object.assign(condition, params)
    const { data } = await interfaceImplList(condition)
    if (data.code === 200) {
        resultInterfaceImplList.value = data
    } else {
        ElMessage.error(`${data.message}`)
    }
}

export const queryInterfaceImplId = async (id: Number) => {
    const { data } = await interfaceImpl(id)
    if (data.code === 200) {
        resultInterfaceImplId.value = data
    } else {
        ElMessage.error(`${data.message}`)
    }
}