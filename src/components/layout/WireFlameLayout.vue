<template>
  <div>
    <DashboardView :category="activeCategory" @show-table="showTable" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DashboardView from '../../views/DashboardView.vue'

const activeCategory = ref('alimentos')

const showTable = (category: string) => {
  console.log('Cambiando a la categoría:', category)
  activeCategory.value = category
}
</script>
