<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import AuthLayout from './components/layout/AuthLayout.vue'
import WireFlameLayout from './components/layout/WireFlameLayout.vue'
import NotFoundLayout from './components/layout/NotFoundLayout.vue'
import { computed } from 'vue'

const route = useRoute()

// Agregar un layout predeterminado para la vista no encontrada
const layouts = { AuthLayout, WireFlameLayout, NotFoundLayout }
const layout = computed(() => {
  // Si la ruta tiene un layout, úsalo, sino usa NotFoundLayout para rutas no encontradas
  return layouts[route.meta.layout] || layouts['NotFoundLayout']
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
}
</style>
