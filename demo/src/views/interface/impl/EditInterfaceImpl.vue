<script setup lang="ts">
import { reactive } from 'vue';
import { ref } from 'vue';
import { queryInterfaces, result } from "@/composables/useInterfaceApi";
import { queryMain, resultMain } from "@/composables/useMainCollectionApi";
import { querySub, resultSub } from "@/composables/useSubCollectionApi";
import { createInterfaceImpl } from "@/api/interfaceImplApi";

const dialogFormVisible = ref(false)
const msgText = ref('')
const loading = ref(false)

const initImplData = () => ({
    id: undefined,
    interface_id: undefined,
    name: '',
    type: '',
    params: '',
    headers: '',
    json_body: '',
    enabled: '1',
    description: '',
    main_collection_id: undefined,
    sub_collection_id: undefined,
})
const form = reactive(initImplData())
const initDialog = (id: number) => {
    dialogFormVisible.value = true
    if (id) {
        msgText.value = '更新'
    } else {
        msgText.value = '新建'
    }
}
const interfaces = (query: string) => {
    if (query) {
        loading.value = true
        queryInterfaces({ "name": query, "enabled": "1" })
        loading.value = false
    }
}
const mainCollections = (query: string) => {
    if (query) {
        loading.value = true
        queryMain({ "name": query, "enabled": "1" })
        loading.value = false
    }
}
const onSubmit = async () => {
    if (form.id) {
        ElMessage.success
    } else {
        const { data } = await createInterfaceImpl(form)
        if (data.code === 200) {
            ElMessage.success(`${data.message}`)
            dialogFormVisible.value = false
        } else {
            ElMessage.error(`${data.message}`)
        }
    }
}
defineExpose({
    initDialog
})

</script>
<template>
    <el-dialog v-model="dialogFormVisible" :title="msgText + `实现`" align-center>
        <el-form :model="form" label-position="right" label-width="120px">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="名称">
                        <el-input v-model="form.name" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="类型">
                        <el-select v-model="form.type">
                            <el-option value="GET" label="GET" />
                            <el-option value="POST" label="POST" />
                            <el-option value="PUT" label="PUT" />
                            <el-option value="DELETE" label="DELETE" />
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="接口">
                        <el-select v-model="form.interface_id" filterable remote reserve-keyword placeholder="输入接口名称搜索"
                            :remote-method="interfaces" :loading="loading">
                            <el-option v-for="item in result.data.list" :key="item.id" :label="item.name"
                                :value="item.id" />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="状态">
                        <el-switch v-model="form.enabled" style="--el-switch-on-color: green; --el-switch-off-color: red"
                            active-value="1" inactive-value="0" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="主集合">
                        <el-select v-model="form.main_collection_id" filterable remote reserve-keyword
                            placeholder="输入主集合名称搜索" :remote-method="mainCollections" :loading="loading">
                            <el-option v-for="item in resultMain.data.list" :key="item.id" :label="item.name"
                                :value="item.id"
                                @click="($event) => (querySub({ 'main_collection_id': item.id, 'enabled': '1' }))" />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="子集合">
                        <el-select v-model="form.sub_collection_id" placeholder="请选择子集合">
                            <el-option v-for="item in resultSub.data.list" :key="item.id" :label="item.name"
                                :value="item.id" />
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="请求参数">
                <el-input v-model="form.params" type="textarea" :autosize="{ minRows: 2, maxRows: 4 }"
                    placeholder="请输入请求参数" />
            </el-form-item>
            <el-form-item label="请求头">
                <el-input v-model="form.headers" type="textarea" :autosize="{ minRows: 2, maxRows: 4 }"
                    placeholder="请输入请求头" />
            </el-form-item>
            <el-form-item label="请求体">
                <el-input v-model="form.json_body" type="textarea" :autosize="{ minRows: 2, maxRows: 4 }"
                    placeholder="请输入请求体" />
            </el-form-item>
            <el-form-item label="描述">
                <el-input v-model="form.description" type="textarea" :autosize="{ minRows: 2, maxRows: 4 }"
                    placeholder="请输入描述" />
            </el-form-item>
            <el-form-item class="submit">
                <el-button @click="dialogFormVisible = !dialogFormVisible">取消</el-button>
                <el-button type="primary" @click="onSubmit">提交</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>
<style scoped lang="scss">
.el-dialog {
    .el-form {
        .submit {
            float: right;
        }
    }
}
</style>