<template>
  <el-container>
    <AppAside />
    <el-container class="header-and-main">
      <AppHeader />
      <el-main>
        <el-scrollbar>
          <h1 v-show="$route.path === '/'">欢迎进入接口管理与测试系统</h1>
          <RouterView />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import AppHeader from './AppHeader.vue'
import AppAside from './AppAside.vue'
</script>

<style lang="scss" scoped>
.header-and-main {
  flex-direction: column;
  height: 100vh;
}
</style>
