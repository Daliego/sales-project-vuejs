import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomePage from '@/views/HomePage.vue'
import BackgroundLayout from '@/layouts/BackgroundLayout.vue'

import { loadLayoutMiddleware } from './middleware/loadLayoutMiddleware'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home',
      // name: 'homePage',
      meta: {
        layout: BackgroundLayout
      },
      component: () => import("../views/HomePage.vue"),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

// router.beforeEach(loadLayoutMiddleware)

export default router
