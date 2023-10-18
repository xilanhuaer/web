<template>
  <el-aside width="auto">
    <el-row>
      <el-col>
        <el-menu :collapse="isCollapse" active-text-color="#ffd04b" background-color="#545c64" text-color="#fff" router
          unique-opened>
          <el-menu-item index="1" route="/">
            <el-icon>
              <SvgIcon name="home" fill="white" />
            </el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <el-icon>
                <SvgIcon name="api" fill="white" />
              </el-icon>
              <span>接口管理</span>
            </template>
            <el-menu-item index="2-1" route="/interface">
              <el-icon>
                <SvgIcon name="api_list" fill="white" />
              </el-icon>
              <span>接口列表</span>
            </el-menu-item>
            <el-menu-item index="2-2" route="/interfaceImpl">
              <el-icon>
                <SvgIcon name="api_impl" fill="white" />
              </el-icon>
              <span>接口实现</span>
            </el-menu-item>
          </el-sub-menu>
          <ElSubMenu index="3">
            <template #title>
              <el-icon>
                <SvgIcon name="collection" fill="white" />
              </el-icon>
              <span>集合管理</span>
            </template>
            <ElMenuItem index="3-1" route="/main_collection">
              <el-icon>

                <SvgIcon name="list" fill="white" />
              </el-icon>
              <span>主集合</span>
            </ElMenuItem>
            <ElMenuItem index="3-2" route="/sub_collection">
              <el-icon>
                <SvgIcon name="list" fill="white" />
              </el-icon>
              <span>子集合</span>
            </ElMenuItem>
          </ElSubMenu>
          <ElSubMenu index="4">
            <template #title>
              <el-icon>
                <SvgIcon name="config_manage" fill="white" />
              </el-icon>
              <span>配置管理</span>
            </template>
            <ElMenuItem index="4-1" route="/config">
              <el-icon>
                <SvgIcon name="config" fill="white" />
              </el-icon>
              <span>配置列表</span>
            </ElMenuItem>
          </ElSubMenu>
        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</template>
<script lang="ts" setup>
import { isCollapse } from './isCollapse'
</script>
<style lang="scss" scoped>
.el-menu {
  border-right: none;
  // width: 200px;
}

.el-aside {
  background-color: #545c64;
}
</style>
