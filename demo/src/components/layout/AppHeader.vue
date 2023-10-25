<template>
  <el-header>
    <el-icon @click="isCollapse = !isCollapse">
      <el-icon v-show="isCollapse" :size="20">
        <SvgIcon name="expand" width="20px" height="20px" />
      </el-icon>
      <el-icon v-show="!isCollapse" :size="20">
        <SvgIcon name="collapse" width="20px" height="20px" />
      </el-icon>
    </el-icon>
    <el-dropdown>
      <span class="el-dropdown-link">
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        </div>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="($event) => (useRouter().replace({ path: '/userinfo' }))">个人中心</el-dropdown-item>
          <el-dropdown-item @click="logout" divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { isCollapse } from './isCollapse';
import useUserStore from "@/stores/modules/user";
const router = useRouter()
const logout = () => {
  useUserStore().logout()
  router.replace({
    path: 'login'
  })
}
</script>

<style scoped lang="scss">
.el-header {
  display: flex;

  .el-icon {
    margin-top: 14px;
  }

  .el-dropdown {
    margin-top: 8px;
    margin-left: auto;
    margin-right: 20px;
  }
}
</style>
