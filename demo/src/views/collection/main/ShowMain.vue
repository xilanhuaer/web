<script setup lang="ts">
import { queryMainId, resultMainId } from '@/composables/useMainCollectionApi'
import { ref } from 'vue'
const dialogFormVisible = ref(false)
const initMainIdData = (id: number) => {
  dialogFormVisible.value = true
  if (id) {
    queryMainId(id)
  } else {
    ElMessage.error('分组id错误')
  }
}
defineExpose({ initMainIdData })
</script>
<template>
  <el-dialog label-position="right" v-model="dialogFormVisible" align-center>
    <el-form label-position="right" label-width="auto" :model="resultMainId">
      <ElRow>
        <ElCol :span="12">
          <ElFormItem label="分组名称：">
            <ElText>{{ resultMainId.name }}</ElText>
          </ElFormItem>
        </ElCol>
      </ElRow>
      <ElRow>
        <ElCol :span="12">
          <ElFormItem label="状态：">
            <ElSwitch
              v-model="resultMainId.enabled"
              style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
              active-value="1"
              inactive-value="0"
              :disabled="true"
            />
          </ElFormItem>
        </ElCol>
      </ElRow>
      <ElRow>
        <ElCol>
          <ElFormItem label="分组描述：">
            <ElText>{{ resultMainId.description }}</ElText>
          </ElFormItem>
        </ElCol>
      </ElRow>
      <ElRow>
        <ElCol :span="12">
          <ElFormItem label="创建人：">
            <ElText>{{ resultMainId.creator }}</ElText>
          </ElFormItem>
        </ElCol>
        <ElCol :span="12">
          <ElFormItem label="创建时间：">
            <ElText>{{ resultMainId.created_at }}</ElText>
          </ElFormItem>
        </ElCol>
      </ElRow>
      <ElRow>
        <ElCol :span="12">
          <ElFormItem label="更新人：">
            <ElText>{{ resultMainId.updator }}</ElText>
          </ElFormItem>
        </ElCol>
        <ElCol :span="12">
          <ElFormItem label="更新时间：">
            <ElText>{{ resultMainId.updated_at }}</ElText>
          </ElFormItem>
        </ElCol>
      </ElRow>
    </el-form>
  </el-dialog>
</template>
<style scoped lang="scss"></style>
