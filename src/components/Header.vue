
<template>
  <header class="main-header">
    <h1>Gestión de Clientes</h1>
    <nav class="nav-menu">
      <router-link to="/" exact-active-class="activo">Inicio</router-link>
      <router-link to="/productos" active-class="activo">Productos</router-link>
      <router-link to="/carrito" active-class="activo">Carrito</router-link>
      <router-link to="/clientes" active-class="activo">Clientes</router-link>
    </nav>
  </header>
</template>

<script setup>
// Puedes agregar lógica aquí si el header lo requiere
</script>

<style scoped>
.main-header {
  background: #2c3e50;
  color: #fff;
  padding: 1.5rem 0 1rem 0;
  text-align: center;
  margin-bottom: 2rem;
}
.nav-menu {
  margin-top: 1rem;
}
.nav-menu a {
  color: #fff;
  text-decoration: none;
  margin: 0 1.2rem;
  font-weight: 500;
  font-size: 1.1rem;
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
  transition: border 0.2s;
}
.nav-menu a.activo {
  border-bottom: 2px solid #27ae60;
  color: #27ae60;
}
</style>
