<!-- Header.vue -->
<script setup lang="ts">
import NavPage from './NavPage.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logoR.svg" width="125" height="125" />
    <div class="wrapper">
      <h1>Bienvenidos a RestInvenSo</h1>
      <NavPage />
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 1rem;
}

h1 {
  color: #333;
  font-size: 2rem;
  text-align: center;
  margin-top: 1rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
