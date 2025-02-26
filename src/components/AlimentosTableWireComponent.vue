<template>
  <div>
    <h5 class="mb-3">Productos de Alimentos</h5>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in alimentosItems" :key="index">
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
  name: 'AlimentosTable',
  data() {
    return {
      alimentosItems: [
        {
          nombre: 'Carne de Res',
          cantidad: '25kg',
          precio: '$200.000',
        },
        {
          nombre: 'Pechuga de Pollo',
          cantidad: '40kg',
          precio: '$280.000',
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
}

table {
  width: 100vh;
  border-collapse: collapse;
}

th,
td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 24px;
}

th {
  background-color: #f4f4f4;
}

tr:hover {
  background-color: #f9f9f9;
}
</style>
