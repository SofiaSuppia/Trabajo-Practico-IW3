<template>
  <main class="container">
    <FormCliente @registrado="onRegistrado" />

    <div v-if="ultimoCliente" class="resumen">
      <small>
        Último cliente registrado:
        <strong>{{ ultimoCliente }}</strong>
      </small>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import FormCliente from './FormCliente.vue'

const ultimoCliente = ref('')

function onRegistrado(nombre) {
  ultimoCliente.value = nombre
}
</script>

<style scoped>
.container {
  padding: 2rem;
  background: #f8fafc;
  min-height: 100vh;
}
.resumen {
  text-align: center;
  margin-top: 1rem;
  color: #334155;
}
</style>
