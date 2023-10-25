<script lang="ts" setup >
import { type Login } from '@/api/userApi';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import useUserStore from "@/stores/modules/user";
const useStore = useUserStore()
const router = useRouter()

const condition = reactive({
    account: '',
    password: '',
})
const submit = async (loginData: Login) => {
    const code = await useStore.userLogin(loginData);
    if (code === 200) {
        router.replace({
            path: '/'
        })
    }
}
const checkRegister = () => {
    router.replace({
        path: '/register'
    })
}
</script>
<template >
    <el-card>
        <template #header>
            <el-text>用户登录</el-text>
        </template>
        <el-form label-position="top" label-width="100px" :model="condition" style="max-width: 460px">
            <el-form-item label="账号">
                <el-input v-model="condition.account" />
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="condition.password" />
            </el-form-item>
        </el-form>
        <span>
            <el-button @click="checkRegister">注册</el-button>
            <el-button type="primary" @click="submit(condition)">登录</el-button>
        </span>
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