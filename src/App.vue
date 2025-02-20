<template>
  <div class="container">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logoR.svg" width="125" height="125" />
      <h1>Bienvenidos a RestInvenSo</h1>
      <NavPage />
    </header>

    <main>
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import NavPage from './components/NavPage.vue'
import Footer from './components/FooterPage.vue'
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
}
</style>
