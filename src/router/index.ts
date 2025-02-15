import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/ensayo',
      name: 'ensayo',
      component: () => import('../views/ensayo.vue'),
    },
    {
      path: '/mirar',
      name: 'mirar',
      component: () => import('../views/mirar.vue'),
    },
    {
      path: '/prueba',
      name: 'prueba',
      component: () => import('../views/prueba.vue'),
    },
  ],
})

export default router
