<template>
  <div class="app-container">
    <SideBar />
    <div class="main-content">
      <HeaderWire title="Registro de Productos" />
      <div class="content-wrapper">
        <TableTabs @show-table="showTable" :activeCategory="activeCategory" />
        <div class="tab-content">
          <AlimentosTable v-show="activeCategory === 'alimentos'" />
          <LimpiezaTable v-show="activeCategory === 'limpieza'" />
          <OficinaTable v-show="activeCategory === 'oficina'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SideBar from '../components/SideBarWireComponent.vue'
import HeaderWire from '../components/HeaderWireComponent.vue'
import TableTabs from '../components/TableTabsWireComponent.vue'
import AlimentosTable from '../components/AlimentosTableWireComponent.vue'
import LimpiezaTable from '../components/LimpiezaTableWireComponent.vue'
import OficinaTable from '../components/OficinaTableWireComponent.vue'

const activeCategory = ref('alimentos')

const showTable = (category: string) => {
  activeCategory.value = category
}
</script>

<style scoped>
.app-container {
  display: flex;
  min-height: 100vh;
}

.content-wrapper {
  padding: 30px;
}
</style>
