<script setup lang="ts">
import EditInterface from './EditInterface.vue'
import ShowInterface from './ShowInterface.vue'
import { reactive, ref } from 'vue'
import { result, queryInterfaces } from '@/composables/useInterfaceApi'
import { exchangeEnable } from '@/api/interfaceApi'
const disabled = ref(true)
const exchange = (id: number, enable: string) => {
  exchangeEnable(id, enable)
  queryInterfaces(condition)
}
const condition = reactive({
  page: 1,
  page_size: 10,
  name: '',
  type: '',
  enabled: '1',
})
queryInterfaces(condition)
const reset = () => {
  disabled.value = true
  const resetData = {
    page: condition.page,
    page_size: condition.page_size,
    name: '',
    type: '',
    enabled: '1',
  }
  Object.assign(condition, resetData)
}

const editInterface = ref<InstanceType<typeof EditInterface> | null>()
const showInterface = ref<InstanceType<typeof ShowInterface> | null>()
</script>
<template>
  <el-button @click="($event) => editInterface?.initAndShow(0)" class="new">新建接口</el-button>
  <el-card>
    <template #header>
      <el-form :inline="true" :model="condition" class="demo-form-inline">
        <el-form-item label="接口名称" prop="name">
          <el-input v-model="condition.name" placeholder="接口名称" />
        </el-form-item>
        <el-form-item label="接口类型" prop="type">
          <el-select v-model="condition.type" placeholder="接口类型" clearable>
            <el-option label="GET" value="GET" />
            <el-option label="POST" value="POST" />
            <el-option label="PUT" value="PUT" />
            <el-option label="DELETE" value="DELETE" />
          </el-select>
        </el-form-item>
        <el-form-item label="接口状态" prop="enabled">
          <el-select v-model="condition.enabled" placeholder="接口状态" clearable>
            <el-option label="启用" value="1" />
            <el-option label="禁用" value="0" />
          </el-select>
        </el-form-item>
        <el-form-item class="button">
          <el-button type="primary" @click="reset">重置</el-button>
          <el-button type="primary" @click="($event) => queryInterfaces(condition)">查询</el-button>
        </el-form-item>
      </el-form>
    </template>
    <el-table :data="result.data.list" style="width: 100%" show-overflow-tooltip>
      <el-table-column fixed prop="id" label="id" width="60px" align="center">
        <template #default="{ row }">
          <el-link :underline="false" type="primary" @click="($event) => showInterface?.show(row.id)">{{ row.id
          }}</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="接口名称" width="auto" align="center" />
      <el-table-column prop="type" label="请求类型" width="auto" align="center" />
      <el-table-column prop="path" label="路径" width="auto" align="center" show-overflow-tooltip />
      <el-table-column prop="enabled" label="状态" width="auto" align="center">
        <template #default="{ row }">
          <el-switch v-model="row.enabled" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
            active-value="1" inactive-value="0" @click="exchange(row.id, row.enabled)" />
        </template>
      </el-table-column>
      <el-table-column prop="header" label="请求头" width="auto" align="center" stripe show-overflow-tooltip />
      <el-table-column prop="description" label="接口描述" width="auto" align="center" stripe show-overflow-tooltip />
      <el-table-column fixed="right" label="操作" width="120px" align="center">
        <template #default="{ row }">
          <el-button type="primary" circle @click="($event) => editInterface?.initAndShow(row.id)">
            <el-icon>
              <Edit />
            </el-icon>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination v-model:current-page="condition.page" v-model:page-size="condition.page_size"
      :page-sizes="[5, 10, 15, 20]" :background="true" layout="sizes, prev, pager, next" :total="result.data.total"
      @current-change="queryInterfaces(condition)" @size-change="queryInterfaces(condition)" />
    <show-interface ref="showInterface" />
    <edit-interface ref="editInterface" />
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
