<template>
  <div class="auth-container">
    <Header />
    <main>
      <Nav />
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../HeaderComponent.vue'
import Nav from '../NavComponent.vue'
import Footer from '../FooterComponent.vue'
</script>

<style scoped>
.auth-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vh;
}
</style>
