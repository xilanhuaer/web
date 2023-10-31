import { defineStore } from "pinia";
import { login } from "@/api/userApi";
import type { Login } from "@/api/userApi"
const useUserStore = defineStore('User', {
    state: () => {
        return {
            token: '',
            username: ''
        }
    },
    actions: {
        async userLogin(data: Login) {
            const res = await login(data)
            if (res.data.code === 200) {
                this.token = 'Bearer ' + res.data.data.token
                this.username = '' + res.data.data.name
                localStorage.setItem('token', `Bearer ${res.data.data.token}`)
                localStorage.setItem('username', `${res.data.data.name}`)
                return res.data.code
            } else {
                ElMessage.error(`${res.data.message}`)
            }
        },
        logout() {
            localStorage.removeItem('token')
            localStorage.removeItem('username')
            ElMessage.success('退出登录成功')
        }
    },
    getters: {}
});

export default useUserStore;