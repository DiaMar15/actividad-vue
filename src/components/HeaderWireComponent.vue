<template>
  <div class="header">
    <h2>{{ title }}</h2>
    <div class="logout-btn">
      <span class="me-4">Cerrar Sesión</span>
      <i class="fas fa-door-open"></i>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HeaderWire',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
}

.logout-btn {
  display: flex;
  align-items: center;
  font-size: 20px;
}

.logout-btn i {
  margin-left: 12px;
}
</style>
