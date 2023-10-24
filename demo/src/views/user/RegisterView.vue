<script lang="ts" setup >
import type { Register } from '@/api/userApi';
import { register } from "@/api/userApi";
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const condition = reactive({
    account: '',
    password: '',
    code: '',
    name: '',
    phone: '',
    email: ''
})
const submit = async (regData: Register) => {
    const { data } = await register(regData)
    if (data.code === 200) {
        ElMessage.success("注册成功")
        router.replace({
            path: '/login'
        })
    } else {
        ElMessage.error(`${data.message}`)
    }
}
</script>
<template >
    <el-card>
        <template #header>
            <el-text>用户注册</el-text>
        </template>
        <el-form label-position="top" label-width="100px" :model="condition" style="max-width: 460px">
            <el-form-item label="账号">
                <el-input v-model="condition.account" />
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="condition.password" />
            </el-form-item>
            <el-form-item label="邀请码">
                <el-input v-model="condition.code" />
            </el-form-item>
            <el-form-item label="昵称">
                <el-input v-model="condition.name" />
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="condition.email" />
            </el-form-item>
            <el-form-item label="联系方式">
                <el-input v-model="condition.phone" />
            </el-form-item>
            <el-button @click="submit(condition)">注册</el-button>
        </el-form>
    </el-card>
</template>
<style lang="scss" scoped>
.el-card {
    width: 30%;
    text-align: center;
    margin: 5% auto;

    .el-form {
        height: auto;
        text-align: center;
    }
}
</style>