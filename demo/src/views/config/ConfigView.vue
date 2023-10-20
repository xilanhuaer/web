<script setup lang="ts">
</script>
<template>
    <el-button class="new">新建分组</el-button>
    <el-card>
        <template #header>
            <el-form :inline="true" class="demo-form-inline" ref="formEl">
                <ElFormItem label="配置名称">
                    <ElInput />
                </ElFormItem>
                <el-form-item class="button">
                    <el-button type="primary">重置</el-button>
                    <el-button type="primary">查询</el-button>
                </el-form-item>
            </el-form>
        </template>
        <el-table style="width: 100%" show-overflow-tooltip>
            <el-table-column fixed prop="id" label="id" width="60px" align="center">
                <template #default="{ row }">
                    <el-link :underline="false" type="primary">{{ row.id
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
                <template #default>
                    <el-button type="primary" circle>
                        <el-icon>
                            <Edit />
                        </el-icon>
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-card>
</template>
<style scoped lang="scss"></style>