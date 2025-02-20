import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/inicioSesion',
    },
    {
      path: '/inicioSesion',
      name: 'login',
      component: () => import('../views/inicioSesion.vue'),
    },
    {
      path: '/registroUsuario',
      name: 'registroUsuario',
      component: () => import('../views/RegistroUsuario.vue'),
    },
    {
      path: '/resetPassword',
      name: 'resetPassword',
      component: () => import('../views/ResetPassword.vue'),
    },
    {
      path: '/inventario',
      name: 'inventario',
      component: () => import('../components/InventarioProducto.vue'),
    },
  ],
})

export default router
