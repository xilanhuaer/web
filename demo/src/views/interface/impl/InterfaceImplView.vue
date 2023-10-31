<script setup lang="ts">
import { ref } from 'vue';
import EditInterfaceImpl from './EditInterfaceImpl.vue';
import InterfaceImplDetail from './InterfaceImplDetail.vue';
import { reactive } from 'vue';
import { queryInterfaceImplList, resultInterfaceImplList } from "@/composables/useInterfaceImplApi";
import { queryMain, resultMain } from "@/composables/useMainCollectionApi";
import { querySub, resultSub } from '@/composables/useSubCollectionApi';
const resetData = {
    name: undefined,
    interface_name: undefined,
    type: undefined,
    enabled: '1',
    main_collection_id: undefined,
    sub_collection_id: undefined
}
const condition = reactive({
    name: undefined,
    interface_name: undefined,
    type: undefined,
    enabled: '1',
    main_collection_id: undefined,
    sub_collection_id: undefined
})
queryInterfaceImplList(condition)

const loading = ref(false)
const mainCollections = (query: string) => {
    if (query) {
        loading.value = true
        queryMain({ "name": query, "enabled": "1" })
        loading.value = false
    }
}

const editInterfaceImpl = ref<InstanceType<typeof EditInterfaceImpl> | null>()
const interfaceImplDetail = ref<InstanceType<typeof InterfaceImplDetail> | null>()
</script>
<template>
    <el-button @click="($event) => editInterfaceImpl?.initDialog(0)">新建实现</el-button>
    <ElCard>
        <template #header>
            <el-form :inline="true" :model="condition">
                <el-form-item label="名称">
                    <el-input v-model="condition.name" placeholder="请输入名称" />
                </el-form-item>
                <el-form-item label="接口名称">
                    <el-input v-model="condition.interface_name" placeholder="请输入接口名称" />
                </el-form-item>
                <ElFormItem label="接口类型">
                    <el-select v-model="condition.type" placeholder="请选择接口类型" clearable>
                        <el-option label="GET" value="GET" />
                        <el-option label="POST" value="POST" />
                        <el-option label="PUT" value="PUT" />
                        <el-option label="DELETE" value="DELETE" />
                    </el-select>
                </ElFormItem>
                <ElFormItem label="状态">
                    <ElSwitch v-model="condition.enabled"
                        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" active-value="1"
                        inactive-value="0" />
                </ElFormItem>
                <ElFormItem label="主集合">
                    <el-select v-model="condition.main_collection_id" filterable remote reserve-keyword
                        placeholder="输入主集合名称搜索" :remote-method="mainCollections" :loading="loading">
                        <el-option v-show="resultMain.data.total > 0" v-for="item in resultMain.data.list" :key="item.id"
                            :label="item.name" :value="item.id"
                            @click="querySub({ 'main_collection_id': item.id, 'enabled': '1' })" />
                    </el-select>
                </ElFormItem>
                <ElFormItem label="子集合">
                    <ElSelect v-model="condition.sub_collection_id" placeholder="请选择子集合">
                        <ElOption v-show="resultSub.data.total > 0" v-for="item in resultSub.data.list" :key="item.id"
                            :label="item.name" :value="item.id" />
                    </ElSelect>
                </ElFormItem>
                <el-form-item>
                    <el-button @click="($event) => (Object.assign(condition, resetData))">重置</el-button>
                    <el-button type="primary" @click="($event) => (queryInterfaceImplList(condition))">查询</el-button>
                </el-form-item>
            </el-form>
        </template>
        <el-table :data="resultInterfaceImplList.data.list" style="width: 100%">
            <ElTableColumn fixed prop="id" label="id" width="80px">
                <template #default="{ row }">
                    <el-link @click="($event) => (interfaceImplDetail?.initAndShow(row.id))" :underline="false"
                        type="primary">{{ row.id }}</el-link>
                </template>
            </ElTableColumn>
            <ElTableColumn prop="name" label="接口实现名称" show-overflow-tooltip />
            <ElTableColumn prop="path" label="请求路径" show-overflow-tooltip />
            <ElTableColumn prop="interface_name" label="接口名称" show-overflow-tooltip />
            <ElTableColumn prop="type" label="请求类型" />
            <ElTableColumn prop="params" label="请求参数" show-overflow-tooltip />
            <ElTableColumn prop="headers" label="请求头" show-overflow-tooltip />
            <ElTableColumn prop="json_body" label="请求体" show-overflow-tooltip />
            <ElTableColumn prop="enabled" label="状态">
                <template #default="{ row }">
                    <el-switch v-model="row.enabled" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
                        active-value="1" inactive-value="0" />
                </template>
            </ElTableColumn>
            <ElTableColumn prop="description" label="描述" show-overflow-tooltip />
            <ElTableColumn prop="main_collection_name" label="所属主集合" show-overflow-tooltip />
            <ElTableColumn prop="sub_collection_name" label="所属子集合" show-overflow-tooltip />
            <el-table-column fixed="right" label="操作" width="120">
                <template #default="{ row }">
                    <el-button link type="primary" @click="($event) => (editInterfaceImpl?.initDialog(row.id))">
                        <SvgIcon name="edit" fill="blue" width="20px" height="20px" />
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <EditInterfaceImpl ref="editInterfaceImpl" />
        <InterfaceImplDetail ref="interfaceImplDetail" />
    </ElCard>
</template>
<style scoped lang="scss">
.el-card {
    padding: 20px;
    margin-top: 10px;
}
</style>