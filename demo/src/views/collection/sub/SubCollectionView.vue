<script setup lang="ts">
import { querySub, resultSub } from '@/composables/useSubCollectionApi'
import { queryMain, resultMain } from '@/composables/useMainCollectionApi'
import EditSub from './EditSub.vue'
import ShowSub from './ShowSub.vue'
import { reactive, ref } from 'vue'
queryMain({ enabled: '1' })
const condition = reactive({
  page: 1,
  page_size: 10,
  name: '',
  enabled: '1',
  main_collection_id: undefined
})

const resetSubConditionData = () => {
  const data = {
    page: condition.page,
    page_size: condition.page_size,
    name: '',
    enabled: '1',
    main_collection_id: undefined
  }
  Object.assign(condition, data)
}
querySub(condition)
const editSub = ref<InstanceType<typeof EditSub> | null>()
const showSub = ref<InstanceType<typeof ShowSub> | null>()
</script>
<template>
  <el-button class="new" @click="($event) => editSub?.initAndShow(0)">新建分组</el-button>
  <el-card>
    <template #header>
      <el-form :inline="true" :model="condition" class="demo-form-inline" ref="formEl">
        <el-form-item label="分组名称" prop="name">
          <el-input v-model="condition.name" placeholder="分组名称" />
        </el-form-item>
        <el-form-item label="分组状态" prop="enabled">
          <el-select v-model="condition.enabled" placeholder="分组状态" clearable>
            <el-option label="启用" value="1" />
            <el-option label="禁用" value="0" />
          </el-select>
        </el-form-item>
        <el-form-item label="所属分组" prop="name">
          <el-select v-model="condition.main_collection_id" class="m-2" placeholder="Select">
            <el-option v-for="item in resultMain.data.list" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item class="button">
          <el-button type="primary" @click="resetSubConditionData">重置</el-button>
          <el-button type="primary" @click="($event) => querySub(condition)">查询</el-button>
        </el-form-item>
      </el-form>
    </template>
    <el-table :data="resultSub.data.list" style="width: 100%" show-overflow-tooltip>
      <el-table-column fixed prop="id" label="id" width="60px" align="center">
        <template #default="{ row }">
          <el-link :underline="false" type="primary" @click="($event) => showSub?.initSubIdData(row.id)">{{ row.id
          }}</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="分组名称" width="auto" align="center" />
      <el-table-column prop="main_collection_name" label="所属分组" width="auto" align="center" />
      <el-table-column prop="enabled" label="状态" width="auto" align="center">
        <template #default="{ row }">
          <el-switch v-model="row.enabled" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
            active-value="1" inactive-value="0" />
        </template>
      </el-table-column>
      <el-table-column prop="description" label="分组描述" width="auto" align="center" />
      <el-table-column fixed="right" label="操作" width="120px" align="center">
        <template #default="{ row }">
          <el-button type="primary" circle @click="($event) => editSub?.initAndShow(row.id)">
            <el-icon>
              <Edit />
            </el-icon>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination v-model:current-page="condition.page" v-model:page-size="condition.page_size"
      :page-sizes="[5, 10, 15, 20]" :background="true" layout="sizes, prev, pager, next" :total="resultSub.data.total"
      @current-change="querySub(condition)" @size-change="querySub(condition)" />
    <edit-sub ref="editSub" />
    <show-sub ref="showSub" />
  </el-card>
</template>
<style scoped lang="scss">
.new {
  margin-bottom: 10px;
}

.el-card {
  .el-pagination {
    margin-top: 15px;
    margin-bottom: 15px;
    float: right;
  }
}
</style>
