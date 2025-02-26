<template>
  <div>
    <div @click="toggleSubMenu" class="menu-item">
      <span>{{ title }}</span>
    </div>

    <div v-if="submenuVisible" class="submenu">
      <ul>
        <li v-for="item in submenuItems" :key="item.text">{{ item.text }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface SubmenuItem {
  text: string
}

defineProps({
  title: String,
  submenuItems: Array as () => SubmenuItem[],
})

const submenuVisible = ref(false)

function toggleSubMenu() {
  submenuVisible.value = !submenuVisible.value
}
</script>

<style scoped>
.menu-item {
  cursor: pointer;
  padding: 15px;
  background-color: #0020d3;
  margin-bottom: 10px;
  color: white;
  font-size: 22px;
}

.submenu {
  margin-left: 30px;
  background-color: #0020d3;
  padding: 10px;
}

.submenu ul li {
  color: white;
  font-size: 20px;
}
</style>
