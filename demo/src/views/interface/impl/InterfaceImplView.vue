<script setup lang="ts">
import { ref } from 'vue';
import EditInterfaceImpl from './EditInterfaceImpl.vue';
const editInterfaceImpl = ref<InstanceType<typeof EditInterfaceImpl> | null>()
</script>
<template>
    <el-button @click="($event) => editInterfaceImpl?.initDialog(0)">新建实现</el-button>
    <ElCard>
        <template #header>

        </template>
        <el-table>

        </el-table>
        <EditInterfaceImpl ref="editInterfaceImpl" />
    </ElCard>
</template>
<style scoped lang="scss">
.el-card {
    padding: 20px;
    margin-top: 10px;
}
</style>