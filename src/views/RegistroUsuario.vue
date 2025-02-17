<template>
  <div class="register-user-container">
    <h2>Registrarse</h2>
    <form @submit.prevent="handleRegister">
      <div>
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" v-model="nombre" required />
      </div>
      <div>
        <label for="email">Correo electrónico</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">REGISTRARSE</button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      nombre: '',
      email: '',
      password: '',
    }
  },
  methods: {
    handleRegister() {
      const user = {
        nombre: this.nombre,
        email: this.email,
        password: this.password,
      }
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      users.push(user) // Agregar el nuevo usuario
      localStorage.setItem('users', JSON.stringify(users))
      console.log('Usuario registrado:', user)

      this.$router.push({ name: 'login' })
    },
  },
}
</script>

<style scoped>
.register-user-container {
  background-color: #2e3b4e;
  color: white;
  padding: 40px;
  border-radius: 8px;
  width: 500px;
  margin: auto;
}

input {
  margin-bottom: 15px;
  width: 100%;
  padding: 15px;
  border-radius: 4px;
  border: none;
}

button {
  padding: 15px;
  width: 100%;
  background-color: #ff4081;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #e91e63;
}

p {
  text-align: center;
}

a {
  color: #ff4081;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
