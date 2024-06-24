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
                path: 'block',
                name: 'block',
                component: () => import('@/views/block/index.vue')
            },
            {
                path: 'chain',
                name: 'chain',
                component: () => import('@/views/chain/index.vue')
            },
            {
                path: 'dist',
                name: 'dist',
                component: () => import('@/views/dist/index.vue')
            },
            {
                path: 'token',
                name: 'token',
                component: () => import('@/views/token/index.vue')
            },
            {
                path: 'coinbase',
                name: 'coinbase',
                component: () => import('@/views/coinbase/index.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes
})

export default router
