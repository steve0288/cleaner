import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PricesView from '../views/PricesView.vue'
import AboutView from '../views/AboutView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  /* {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" / '../views/AboutView.vue')
  }, */
  {
    path: '/prices',
    name: 'prices',
    component: PricesView
  },
  {
    path: '/about-us',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
