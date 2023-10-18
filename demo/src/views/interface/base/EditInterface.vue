<script setup lang="ts">
import { reactive, ref } from 'vue'
import { resultId, queryInterface, queryInterfaces } from '@/composables/useInterfaceApi'
import { updateInterface, createInterface } from '@/api/interfaceApi'
import type { FormRules } from 'element-plus'
const isCreate = ref(true)
const dialogFormVisible = ref(false)
interface RuleForm {
  id?: number
  name: string
  type: string
  path: string
  header: string
  description: string
  enabled: string
}
const initData = () => ({
  id: 0,
  name: '',
  type: '',
  path: '',
  header: '',
  description: '',
  enabled: '1',
})
const form = reactive<RuleForm>(initData())
const msgText = ref('')
const initAndShow = async (id: number) => {
  dialogFormVisible.value = true
  if (id) {
    await queryInterface(id)
    Object.assign(form, resultId.value)
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
    const { data } = await updateInterface(form)
    if (data.code === 200) {
      ElMessage.success('更新接口成功')
      dialogFormVisible.value = false
      queryInterfaces()
    } else {
      ElMessage.error('更新接口失败')
    }
  } else {
    form.id = undefined
    const { data } = await createInterface(form)
    if (data.code === 200) {
      ElMessage.success('创建接口成功')
      dialogFormVisible.value = false
      queryInterfaces()
    } else {
      ElMessage.error(data.message)
    }
  }
}

// 表单验证
const rules = reactive<FormRules<RuleForm>>({
  name: [{ required: true, message: '请输入接口名称', trigger: 'blur' }],
  type: [{ required: true, message: '请选择接口类型', trigger: 'change' }],
  path: [{ required: true, message: '请输入接口路径', trigger: 'blur' }]
})
defineExpose({ initAndShow })
</script>
<template>
  <el-dialog v-model="dialogFormVisible" :title="msgText + '接口'" align-center>
    <el-form label-position="right" label-width="auto" :model="form" :rules="rules">
      <el-form-item label="接口名称：" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="接口类型：" prop="type">
        <el-select v-model="form.type" placeholder="接口类型" clearable>
          <el-option label="GET" value="GET" />
          <el-option label="POST" value="POST" />
          <el-option label="PUT" value="PUT" />
          <el-option label="DELETE" value="DELETE" />
        </el-select>
      </el-form-item>
      <el-form-item label="接口路径：" prop="path">
        <el-input v-model="form.path" />
      </el-form-item>
      <el-form-item label="默认请求头：">
        <el-input v-model="form.header" />
      </el-form-item>
      <el-form-item label="接口状态：">
        <el-switch v-model="form.enabled" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          active-value="1" inactive-value="0" />
      </el-form-item>
      <el-form-item label="接口描述：">
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
<script setup lang="scss"></script>
