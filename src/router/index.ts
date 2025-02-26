import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ResetPasswordView from '../views/ResetPasswordView.vue'
import WireFlameLayout from '../components/layout/WireFlameLayout.vue'
import DashboardView from '../views/DashboardView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import NotFoundLayout from '../components/layout/NotFoundLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { layout: 'AuthLayout' },
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { layout: 'AuthLayout' },
    },
    {
      path: '/resetPassword',
      name: 'resetPassword',
      component: ResetPasswordView,
      meta: { layout: 'AuthLayout' },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: WireFlameLayout,
      meta: { layout: 'WireFlameLayout' },
      children: [
        {
          path: 'alimentos',
          name: 'alimentos',
          component: DashboardView,
          props: { category: 'alimentos' },
        },
        {
          path: 'limpieza',
          name: 'limpieza',
          component: DashboardView,
          props: { category: 'limpieza' },
        },
        {
          path: 'oficina',
          name: 'oficina',
          component: DashboardView,
          props: { category: 'oficina' },
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFoundLayout,
      children: [
        {
          path: '',
          name: 'notFoundView',
          component: NotFoundView,
        },
      ],
    },
  ],
})

export default router
