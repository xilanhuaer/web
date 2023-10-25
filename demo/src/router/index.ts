import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/components/layout/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '主页',
      component: AppLayout,
      children: [
        {
          path: '/interface',
          name: '接口列表',
          component: () => import('@/views/interface/base/InterfaceView.vue')
        },
        {
          path: '/interfaceImpl',
          name: '接口实现',
          component: () => import('@/views/interface/impl/InterfaceImplView.vue')
        },
        {
          path: '/main_collection',
          name: '主集合',
          component: () => import('@/views/collection/main/MainCollectionView.vue')
        },
        {
          path: '/sub_collection',
          name: '子集合',
          component: () => import('@/views/collection/sub/SubCollectionView.vue')
        },
        {
          path: '/config',
          name: '配置管理',
          component: () => import('@/views/config/ConfigView.vue')
        },
        {
          path: '/register',
          name: '注册',
          component: () => import('@/views/user/RegisterView.vue')
        },
        {
          path: '/login',
          name: '登录',
          component: () => import('@/views/user/LogInView.vue')
        },
        {
          path: '/userinfo',
          name: '个人中心',
          component: () => import('@/views/user/UserInfoView.vue')
        }
      ]
    }
  ]
})

export default router
