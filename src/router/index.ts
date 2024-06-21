import { createRouter, createWebHistory } from 'vue-router'
import BackgroundLayout from '@/layouts/BackgroundLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import UnitSelection from '@/views/UnitSelection.vue'
import Home from '@/views/Home.vue'
import AboutView from '@/views/AboutView.vue'
import ProductDetails from '@/components/home/ProductDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Unit Selection',
      props: true,
      meta: {
        layout: BackgroundLayout
      },
      component: UnitSelection
    },
    {
      path: '/home/:slug/',
      name: 'Home',
      // meta: {
      //   layout: MainLayout
      // },
      component: MainLayout,
      props: true,
      children: [
        // { path: ':product', component: AboutView }
        { path: '', component: Home },
        { path: 'shopping-cart', component: AboutView },
        { path: 'account', component: AboutView },
        { path: ':_slug', component: ProductDetails }
      ]
    },
    {
      path: '/shopping-cart/:slug',
      meta: {
        layout: MainLayout
      },
      component: AboutView
    },
    {
      path: '/account/:slug',
      meta: {
        layout: MainLayout
      },
      component: AboutView
    }
  ]
})

// router.beforeEach(loadLayoutMiddleware)

export default router
