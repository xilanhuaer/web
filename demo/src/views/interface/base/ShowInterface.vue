<script setup lang="ts">
import { resultId, queryInterface } from '@/composables/useInterfaceApi'
import { ref } from 'vue'
const dialogFormVisible = ref(false)

const show = (id: number) => {
  queryInterface(id)
  dialogFormVisible.value = true
}
defineExpose({ show })
</script>
<template>
  <el-dialog v-model="dialogFormVisible">
    <el-form label-position="right" label-width="auto" :model="resultId">
      <el-row>
        <el-col :span="12">
          <el-form-item label="接口名称：">
            <ElText>{{ resultId.name }}</ElText>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="接口类型：">
            <ElText>{{ resultId.type }}</ElText>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="接口路径：">
            <ElText>{{ resultId.path }}</ElText>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="接口状态：">
            <el-switch v-model="resultId.enabled" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
              active-value="1" inactive-value="0" :disabled="true" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="默认请求头：">
            <ElText>{{ resultId.header }}</ElText>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="接口描述：">
            <ElText>{{ resultId.description }}</ElText>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="创建人：">
            <ElText>{{ resultId.creator }}</ElText>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="创建时间：">
            <ElText>{{ resultId.created_at }}</ElText>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="更新人：">
            <ElText>{{ resultId.updator }}</ElText>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="更新时间：">
            <ElText>{{ resultId.updated_at }}</ElText>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-dialog>
</template>
<style scoped lang="scss"></style>
