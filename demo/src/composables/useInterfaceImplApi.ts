import { interfaceImplList, type Condition, type InterfaceImplList } from "@/api/interfaceImplApi";
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

export const queryInterfaceImplList = async (params: Condition) => {
    Object.assign(condition, params)
    const { data } = await interfaceImplList(condition)
    if (data.code === 200) {
        resultInterfaceImplList.value = data
    } else {
        ElMessage.error(`${data.message}`)
    }
}