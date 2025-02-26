<template>
  <div class="table-tabs">
    <div
      class="menu-item"
      :class="{ 'active-tab': activeCategory === 'alimentos' }"
      @click="showTable('alimentos')"
    >
      Alimentos
    </div>
    <div
      class="menu-item"
      :class="{ 'active-tab': activeCategory === 'limpieza' }"
      @click="showTable('limpieza')"
    >
      Materiales de Limpieza
    </div>
    <div
      class="menu-item"
      :class="{ 'active-tab': activeCategory === 'oficina' }"
      @click="showTable('oficina')"
    >
      Materiales de oficina
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TableTabs',
  props: {
    activeCategory: {
      type: String,
      required: true,
    },
  },
  methods: {
    showTable(category: string) {
      this.$emit('show-table', category)
    },
  },
}
</script>

<style scoped>
.table-tabs {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

.menu-item {
  padding: 15px 30px;
  cursor: pointer;
  text-align: center;
  border: 2px solid #ccc;
  border-radius: 10px;
  transition:
    background-color 0.3s,
    color 0.3s;
  font-size: 22px;
}

.active-tab {
  font-weight: bold;
  color: #1100ff;
  background-color: #e9f7fe;
  border-color: #007bff;
  font-size: 24px;
}
</style>
