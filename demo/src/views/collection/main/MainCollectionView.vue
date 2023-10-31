<script setup lang="ts">
import { queryMain, resultMain, enable } from '@/composables/useMainCollectionApi'
import EditMain from './EditMain.vue'
import ShowMain from './ShowMain.vue'
import { ref } from 'vue'
import { reactive } from 'vue'
const condition = reactive({
  page: 1,
  page_size: 10,
  name: '',
  enabled: '1'
})
const resetCondition = () => {
  const reset = {
    page: condition.page,
    page_size: condition.page_size,
    name: '',
    enabled: '1'
  }
  Object.assign(condition, reset)
}
queryMain(condition)
const editMain = ref<InstanceType<typeof EditMain> | null>()
const showMain = ref<InstanceType<typeof ShowMain> | null>()
</script>
<template>
  <el-button class="new" @click="($event) => editMain?.initAndShow(0)">新建分组</el-button>
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
        <el-form-item class="button">
          <el-button type="primary" @click="resetCondition">重置</el-button>
          <el-button type="primary" @click="($event) => queryMain(condition)">查询</el-button>
        </el-form-item>
      </el-form>
    </template>
    <el-table :data="resultMain.data.list" style="width: 100%" show-overflow-tooltip>
      <el-table-column fixed prop="id" label="id" width="60px" align="center">
        <template #default="{ row }">
          <el-link :underline="false" type="primary" @click="($event) => showMain?.initMainIdData(row.id)">{{ row.id
          }}</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="分组名称" width="auto" align="center" />
      <el-table-column prop="enabled" label="状态" width="auto" align="center">
        <template #default="{ row }">
          <el-switch v-model="row.enabled" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
            active-value="1" inactive-value="0" @click="enable(row.id, row.enabled)" />
        </template>
      </el-table-column>
      <el-table-column prop="description" label="分组描述" width="auto" align="center" />
      <el-table-column fixed="right" label="操作" width="120px" align="center">
        <template #default="{ row }">
          <el-button type="primary" circle @click="($event) => editMain?.initAndShow(row.id)">
            <el-icon>
              <Edit />
            </el-icon>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination v-model:current-page="condition.page" v-model:page-size="condition.page_size"
      :page-sizes="[5, 10, 15, 20]" :background="true" layout="sizes, prev, pager, next" :total="resultMain.data.total"
      @current-change="queryMain(condition)" @size-change="queryMain(condition)" />
    <edit-main ref="editMain" />
    <show-main ref="showMain" />
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
