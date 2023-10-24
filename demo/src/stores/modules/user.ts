import { defineStore } from "pinia";
import { login } from "@/api/userApi";
import type { Login } from "@/api/userApi"
const useUserStore = defineStore('User', {
    state: () => {
        return {
            token: '',
        }
    },
    actions: {
        async userLogin(data: Login) {
            const res = await login(data)
            if (res.data.code === 200) {
                this.token = 'Bearer ' + res.data.data.token
                localStorage.setItem('token', `Bearer ${res.data.data.token}`)
            } else {
                ElMessage.error(`${res.data.message}`)
            }
        }
    },
    getters: {}
});

export default useUserStore;