<template>
  <div class="reset-password-container">
    <h2>Restablecer Contraseña</h2>
    <form @submit.prevent="handleResetPassword">
      <div>
        <label for="email">Correo electrónico</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <button type="submit">ENVIAR INSTRUCCIONES</button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      email: '',
    }
  },
  methods: {
    handleResetPassword() {
      console.log('Email:', this.email)
    },
  },
}
</script>

<style scoped>
.reset-password-container {
  background-color: #2e3b4e;
  color: white;
  padding: 30px;
  border-radius: 8px;
  width: 450px;
  margin: 50px auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

input {
  margin-bottom: 15px;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
}

button {
  padding: 12px;
  width: 100%;
  background-color: #ff4081;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #e91e63;
}

p {
  text-align: center;
  margin-top: 10px;
}

a {
  color: #ff4081;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
</style>
