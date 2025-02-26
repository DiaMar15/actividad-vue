<template>
  <footer>
    <p>&copy; 2025 RestInvenSo. Todos los derechos reservados.</p>
    <nav>
      <RouterLink to="/QuienesSomos">Quienes Somos</RouterLink>
      <RouterLink to="/contacto">Contacto</RouterLink>
      <RouterLink to="/terminos">Términos y condiciones</RouterLink>
      <RouterLink to="/privacidad">Política de privacidad</RouterLink>
    </nav>
  </footer>
</template>

<style scoped>
footer {
  background-color: #4c99fd;
  padding: 1rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}

footer p {
  margin-bottom: 1rem;
}

footer nav {
  font-size: 15px;
}

footer nav a {
  display: inline-block;
  margin: 0 0rem;
  color: #333;
}

footer nav a:hover {
  text-decoration: underline;
}
</style>
