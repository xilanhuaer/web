import { defineStore } from "pinia";
import { login } from "@/api/userApi";
import type { Login } from "@/api/userApi"
const useUserStore = defineStore('User', {
    state: () => {
        return {}
    },
    actions: {
        async userLogin(data: Login) {
            const res = await login(data)
            ElMessage.success(`${res}`)
        }
    },
    getters: {}
});

export default useUserStore;