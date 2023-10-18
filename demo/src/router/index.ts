import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/components/layout/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppLayout,
      children: [
        {
          path: '/interface',
          name: 'interface',
          component: () => import('@/views/interface/base/InterfaceView.vue')
        },
        {
          path: '/interfaceImpl',
          name: 'interfaceImpl',
          component: () => import('@/views/interface/impl/InterfaceImplView.vue')
        },
        {
          path: '/main_collection',
          name: 'main',
          component: () => import('@/views/collection/main/MainCollectionView.vue')
        },
        {
          path: '/sub_collection',
          name: 'sub',
          component: () => import('@/views/collection/sub/SubCollectionView.vue')
        },
        {
          path: '/config',
          name: 'config',
          component: () => import('@/views/config/ConfigView.vue')
        }
      ]
    }
  ]
})

export default router
