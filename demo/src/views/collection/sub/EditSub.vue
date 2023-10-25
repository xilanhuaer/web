<script setup lang="ts">
import { reactive, ref } from 'vue'
import { createSub, updateSub } from '@/api/subCollectionApi'
import { querySub, querySubId, resultSubId } from '@/composables/useSubCollectionApi'
import { queryMain, resultMain } from '@/composables/useMainCollectionApi'
queryMain({ enabled: '1' })
const dialogFormVisible = ref(false)
const msgText = ref('')
const isCreate = ref(true)
interface RuleForm {
    id?: number
    name: string
    description: string
    main_collection_id: number
    enabled: string
}
const initData = () => ({
    id: 0,
    name: '',
    enabled: '1',
    main_collection_id: resultMain.value.data.list[0].id,
    description: ''
})
const form = reactive<RuleForm>(initData())

const initAndShow = async (id: number) => {
    dialogFormVisible.value = true
    if (id) {
        await querySubId(id)
        Object.assign(form, resultSubId.value)
        isCreate.value = false
        msgText.value = '更新'
    } else {
        Object.assign(form, initData())
        isCreate.value = true
        msgText.value = '新建'
    }
}
const submit = async () => {
    if (form.id) {
        const { data } = await updateSub(form)
        if (data.code === 200) {
            ElMessage.success('更新接口成功')
            dialogFormVisible.value = false
            querySub()
        } else {
            ElMessage.error('更新接口失败')
        }
    } else {
        form.id = undefined
        const { data } = await createSub(form)
        if (data.code === 200) {
            ElMessage.success('创建分组成功')
            dialogFormVisible.value = false
            querySub()
        } else {
            ElMessage.error('创建分组失败')
        }
    }
}
defineExpose({ initAndShow })
</script>
<template>
    <el-dialog v-model="dialogFormVisible" :title="msgText + '分组'" align-center>
        <el-form label-position="right" label-width="auto" :model="form">
            <el-form-item label="分组名称：" prop="name">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="分组状态：">
                <el-switch v-model="form.enabled" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
                    active-value="1" inactive-value="0" />
            </el-form-item>
            <el-form-item label="主分组">
                <el-select v-model="form.main_collection_id" class="m-2" placeholder="Select">
                    <el-option v-for="item in resultMain.data.list" :key="item.id" :label="item.name" :value="item.id" />
                </el-select>
            </el-form-item>
            <el-form-item label="分组描述：">
                <el-input v-model="form.description" :rows="2" type="textarea" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="submit">提交</el-button>
            </span>
        </template>
    </el-dialog>
</template>
<style scoped lang="scss"></style>
