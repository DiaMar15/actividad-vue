<template>
  <div class="not-found">
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
}
.not-found h1 {
  font-size: 3em;
  color: #f44336;
}
.not-found p {
  font-size: 1.2em;
}
</style>
