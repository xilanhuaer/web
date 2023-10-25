<script setup lang="ts">
import { queryInterfaceImplId, resultInterfaceImplId } from '@/composables/useInterfaceImplApi';
import { ref } from 'vue';

const dialogFormVisible = ref(false)
const initAndShow = async (id: Number) => {
    await queryInterfaceImplId(id)
    dialogFormVisible.value = true
}
defineExpose({ initAndShow })
</script>
<template>
    <el-dialog v-model="dialogFormVisible" align-center>
        <el-form label-position="right" label-width="auto" :model="resultInterfaceImplId">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="实现名称：">
                        <ElText>{{ resultInterfaceImplId.name }}</ElText>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="接口名称：">
                        <ElText>{{ resultInterfaceImplId.interface_name }}</ElText>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="接口路径：">
                        <ElText>{{ resultInterfaceImplId.path }}</ElText>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="接口状态：">
                        <ElText v-if="resultInterfaceImplId.enabled === '1'">启用</ElText>
                        <ElText v-else>禁用</ElText>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <el-form-item label="请求参数：">
                        <ElText>{{ resultInterfaceImplId.params }}</ElText>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <el-form-item label="请求头：">
                        <ElText>{{ resultInterfaceImplId.headers }}</ElText>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <el-form-item label="请求体">
                        <ElText>{{ resultInterfaceImplId.json_body }}</ElText>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-form-item label="接口描述：">
                    <ElText>{{ resultInterfaceImplId.description }}</ElText>
                </el-form-item>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="主集合：">
                        <ElText>{{ resultInterfaceImplId.main_collection_name }}</ElText>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="子集合：">
                        <ElText>{{ resultInterfaceImplId.sub_collection_name }}</ElText>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="创建人：">
                        <ElText>{{ resultInterfaceImplId.creator }}</ElText>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="创建时间：">
                        <ElText>{{ resultInterfaceImplId.created_at }}</ElText>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="更新人：">
                        <ElText>{{ resultInterfaceImplId.updator }}</ElText>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="更新时间：">
                        <ElText>{{ resultInterfaceImplId.updated_at }}</ElText>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </el-dialog>
</template>
<style lang="scss" scoped></style>