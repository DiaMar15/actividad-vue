<template>
  <div class="not-found-layout">
    <div class="not-found">
      <h1>Oops, la página no existe</h1>
      <p>La página que estás buscando no se encuentra disponible o ha sido movida.</p>
      <img
        src="/src/assets/404-illustration.jpg"
        alt="Página no encontrada"
        class="not-found-img"
      />
      <router-link to="/" class="back-home-btn">Volver a la página principal</router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.not-found-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #4c99fd;
  position: absolute;
  top: 0;
  left: 0;
}

.not-found {
  text-align: center;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.not-found h1 {
  font-size: 4em;
  color: #a00000f3;
  margin-bottom: 10px;
}

.not-found p {
  font-size: 1.2em;
  color: #0c0c0c;
  margin-bottom: 10px;
}

.not-found-img {
  max-width: 100%;
  height: auto;
  margin: 0 20px 20px auto;
  display: block;
}

.back-home-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #a00000f3;
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.back-home-btn:hover {
  background-color: #d00000;
}
</style>
