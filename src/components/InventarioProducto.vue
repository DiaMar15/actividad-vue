<template>
  <div class="inventory-container">
    <h2>Inventario</h2>
    <div v-if="inventario.length === 0">No hay productos en el inventario.</div>
    <div v-else>
      <ul>
        <li v-for="(item, index) in inventario" :key="index">
          <p>
            <strong>{{ item.nombre }}</strong>
          </p>
          <p>Cantidad: {{ item.cantidad }}</p>
          <p>Precio: {{ item.precio }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      inventario: [
        { nombre: 'Carne de res', precio: 12000, cantidad: 10 },
        { nombre: 'Carne de cerdo', precio: 10000, cantidad: 15 },
        { nombre: 'Pechuga de pollo', precio: 8000, cantidad: 20 },
      ],
    }
  },
}
</script>

<style scoped>
.inventory-container {
  background-color: #2e3b4e;
  color: white;
  padding: 40px;
  border-radius: 8px;
  width: 500px;
  margin: auto;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 15px;
}
</style>
