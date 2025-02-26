<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/register">Registrarse</RouterLink>
    <RouterLink to="/resetpassword">Restablecer contraseña</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 18px;
  text-align: center;
  margin-top: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
