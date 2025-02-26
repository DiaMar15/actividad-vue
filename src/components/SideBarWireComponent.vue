<template>
  <div class="sidebar text-white p-4">
    <div class="text-center mb-4">
      <h1 class="fs-2">RIS</h1>
      <p class="fs-6">RestInvenSo</p>
    </div>

    <MenuItem
      title="Compras"
      id="comprasMenu"
      :submenuItems="[{ text: 'Compras' }, { text: 'Cancelaciones' }]"
    />

    <MenuItem
      title="Ventas"
      id="ventasMenu"
      :submenuItems="[{ text: 'Ventas' }, { text: 'Devoluciones' }]"
    />

    <MenuItem
      title="Inventario"
      id="inventarioMenu"
      :submenuItems="[{ text: 'Productos' }, { text: 'Pedidos' }]"
    />

    <MenuItem
      title="Usuarios/as y roles"
      id="usuariosMenu"
      useBootstrap
      :submenuItems="[{ text: 'Opción 1 de Usuarios' }, { text: 'Opción 2 de Roles' }]"
    />

    <MenuItem
      title="Herramientas"
      id="herramientasMenu"
      useBootstrap
      :submenuItems="[{ text: 'Configuración de Herramientas' }]"
    />

    <MenuItem
      title="Administración"
      id="adminMenu"
      useBootstrap
      :submenuItems="[{ text: 'Configuración de Administración' }]"
    />
  </div>
</template>

<script setup lang="ts">
import MenuItem from './MenuItemWireComponent.vue'
</script>
