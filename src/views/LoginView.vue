<template>
  <div class="login-user-container">
    <h2>Inicio sesión</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Correo electrónico</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <p>
        <a href="#" @click.prevent="showResetPassword">¿Has olvidado tu contraseña?</a>
      </p>
      <button type="submit">LOGIN</button>
    </form>
    <p>
      <span>¿No tienes cuenta? </span>
      <a href="#" @click.prevent="showSignUp">Registrarse</a>
    </p>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    handleLogin() {
      // Obtener los usuarios almacenados en localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]')

      // Verificar si el correo y la contraseña coinciden con algún usuario registrado
      const user = users.find(
        (user: { email: string; password: string }) =>
          user.email === this.email && user.password === this.password,
      )

      if (user) {
        console.log('Inicio de sesión exitoso')
        this.$router.push({ name: 'dashboard' }) // Redirigir al dashboard
      } else {
        console.log('Credenciales incorrectas')
        alert('Correo o contraseña incorrectos. Por favor, intenta nuevamente.')
      }
    },
    showResetPassword() {
      this.$router.push({ name: 'resetPassword' })
    },
    showSignUp() {
      this.$router.push({ name: 'registroUsuario' })
    },
  },
}
</script>

<style scoped>
.login-user-container {
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
