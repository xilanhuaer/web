<script setup lang="ts">
import { querySubId, resultSubId } from '@/composables/useSubCollectionApi'
import { ref } from 'vue'
const dialogFormVisible = ref(false)
const initSubIdData = (id: number) => {
  dialogFormVisible.value = true
  if (id) {
    querySubId(id)
  } else {
    ElMessage.error('分组id错误')
  }
}
defineExpose({ initSubIdData })
</script>
<template>
  <el-dialog label-position="right" v-model="dialogFormVisible" align-center>
    <el-form label-position="right" label-width="auto" :model="resultSubId">
      <ElRow>
        <ElCol :span="12">
          <ElFormItem label="分组名称：">
            <ElText>{{ resultSubId.name }}</ElText>
          </ElFormItem>
        </ElCol>
      </ElRow>
      <ElRow>
        <ElCol :span="12">
          <ElFormItem label="状态：">
            <ElSwitch
              v-model="resultSubId.enabled"
              style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
              active-value="1"
              inactive-value="0"
              :disabled="true"
            />
          </ElFormItem>
        </ElCol>
        <ElCol :span="12">
          <ElFormItem label="所属分组：">
            <ElText>{{ resultSubId.main_collection_name }}</ElText>
          </ElFormItem>
        </ElCol>
      </ElRow>
      <ElRow>
        <ElCol>
          <ElFormItem label="分组描述：">
            <ElText>{{ resultSubId.description }}</ElText>
          </ElFormItem>
        </ElCol>
      </ElRow>
      <ElRow>
        <ElCol :span="12">
          <ElFormItem label="创建人：">
            <ElText>{{ resultSubId.creator }}</ElText>
          </ElFormItem>
        </ElCol>
        <ElCol :span="12">
          <ElFormItem label="创建时间：">
            <ElText>{{ resultSubId.created_at }}</ElText>
          </ElFormItem>
        </ElCol>
      </ElRow>
      <ElRow>
        <ElCol :span="12">
          <ElFormItem label="更新人：">
            <ElText>{{ resultSubId.updator }}</ElText>
          </ElFormItem>
        </ElCol>
        <ElCol :span="12">
          <ElFormItem label="更新时间：">
            <ElText>{{ resultSubId.updated_at }}</ElText>
          </ElFormItem>
        </ElCol>
      </ElRow>
    </el-form>
  </el-dialog>
</template>
<style scoped lang="scss"></style>
