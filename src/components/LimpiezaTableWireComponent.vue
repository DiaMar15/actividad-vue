<template>
  <div>
    <h2 class="mb-2">Productos de Materiales de Limpieza</h2>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in limpiezaItems" :key="index">
          <td>{{ item.nombre }}</td>
          <td>{{ item.cantidad }}</td>
          <td>{{ item.precio }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LimpiezaTable',
  data() {
    return {
      limpiezaItems: [
        {
          nombre: 'Detergente Líquido',
          cantidad: '10L',
          precio: '$50.000',
        },
        {
          nombre: 'Esponjas',
          cantidad: '50 unidades',
          precio: '$15.000',
        },
      ],
    }
  },
}
</script>
<style scoped>
.table {
  width: 100vh;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px;
  font-size: 20px;
}

th,
td {
  padding: 15px;
  text-align: left;
  border-bottom: 2px solid #ddd;
}

th {
  background-color: #f4f4f4;
  font-size: 24px;
}

tr:hover {
  background-color: #f9f9f9;
}
</style>
