import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/components/layout/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: AppLayout,
      children: [
        {
          path: '/interface',
          name: 'interface',
          component: () => import('@/views/interface/base/InterfaceView.vue')
        },
        {
          path: '/interfaceImpl',
          name: 'interfaceimpl',
          component: () => import('@/views/interface/impl/InterfaceImplView.vue')
        },
        {
          path: '/main_collection',
          name: 'main_collection',
          component: () => import('@/views/collection/main/MainCollectionView.vue')
        },
        {
          path: '/sub_collection',
          name: 'sub_collection',
          component: () => import('@/views/collection/sub/SubCollectionView.vue')
        },
        {
          path: '/config',
          name: 'config',
          component: () => import('@/views/config/ConfigView.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('@/views/user/RegisterView.vue')
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('@/views/user/LogInView.vue')
        },
        {
          path: '/userinfo',
          name: 'userinfo',
          component: () => import('@/views/user/UserInfoView.vue')
        }
      ]
    }
  ]
})

export default router
