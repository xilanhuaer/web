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
        <el-form label-position="right" label-width="auto" :model="resultInterfaceImplId.data">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="实现名称：">
                        <ElText>{{ resultInterfaceImplId.data.name }}</ElText>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="接口名称：">
                        <ElText>{{ resultInterfaceImplId.data.interface_name }}</ElText>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="接口路径：">
                        <ElText>{{ resultInterfaceImplId.data.path }}</ElText>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="接口状态：">
                        <el-switch v-model="resultInterfaceImplId.data.enabled"
                            style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" active-value="1"
                            inactive-value="0" :disabled="true" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <el-form-item label="请求参数：">
                        <ElText>{{ resultInterfaceImplId.data.headers }}</ElText>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <el-form-item label="请求头：">
                        <ElText>{{ resultInterfaceImplId.data.headers }}</ElText>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <el-form-item label="请求体">
                        <ElText>{{ resultInterfaceImplId.data.headers }}</ElText>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-form-item label="接口描述：">
                    <ElText>{{ resultInterfaceImplId.data.description }}</ElText>
                </el-form-item>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="主集合：">
                        <ElText>{{ resultInterfaceImplId.data.main_collection_name }}</ElText>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="子集合：">
                        <ElText>{{ resultInterfaceImplId.data.sub_collection_name }}</ElText>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="创建人：">
                        <ElText>{{ resultInterfaceImplId.data.creator }}</ElText>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="创建时间：">
                        <ElText>{{ resultInterfaceImplId.data.created_at }}</ElText>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="更新人：">
                        <ElText>{{ resultInterfaceImplId.data.updator }}</ElText>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="更新时间：">
                        <ElText>{{ resultInterfaceImplId.data.updated_at }}</ElText>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </el-dialog>
</template>
<style lang="scss" scoped></style>