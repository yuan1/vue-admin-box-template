import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'

const route = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: { title: 'dashboard', icon: 'Menu' },
    children: [
      {
        path: 'dashboard',
        component: createNameComponent(() => import('@/views/main/dashboard/index.vue')),
        meta: { title: '首页', icon: 'Menu', hideClose: true }
      }
    ]
  }
]

export default route