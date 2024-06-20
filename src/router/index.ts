import {createRouter, createWebHistory} from 'vue-router'
import Layout from '@/layout/windows/index.vue'

export const constantRoutes = [
    {
        path: '/',
        redirect: '/home',
        component: Layout,
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('@/views/home/index.vue')
            },
            {
                path: 'donate',
                name: 'donate',
                component: () => import('@/views/donate/index.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes
})

export default router