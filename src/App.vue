<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import AuthLayout from './components/layout/AuthLayout.vue'
import WireFlameLayout from './components/layout/WireFlameLayout.vue'
import { computed } from 'vue'

const route = useRoute()
const layouts = { AuthLayout, WireFlameLayout }
const layout = computed(() => layouts[route.meta.layout] || AuthLayout)
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
