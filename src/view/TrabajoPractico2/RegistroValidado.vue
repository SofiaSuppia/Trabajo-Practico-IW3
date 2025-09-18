<template>
  <div class="registro">
    <h2>Registro de Cliente</h2>
    <input
      v-model="nombre"
      :class="['input-full', { invalido: nombre.length > 0 && nombre.length < 3 }]"
      placeholder="Ej: Juan Gómez"
      @keyup.enter="registrar"
    />
    <div class="espacio-boton"></div>
    <button
      :disabled="nombre.length < 3"
      @click="registrar"
      class="btn-espaciado"
    >Registrar</button>
    <p v-if="mensaje" class="mensaje">{{ mensaje }}</p>
    <p v-if="nombre.length > 0 && nombre.length < 3" class="error">El nombre debe tener al menos 3 caracteres.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const nombre = ref('')
const mensaje = ref('')

function registrar() {
  if (nombre.value.length >= 3) {
    mensaje.value = `Bienvenido, ${nombre.value}`
    nombre.value = ''
  }
}
</script>

<style scoped>
.registro {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;
}
.input-full {
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.invalido {
  border-color: #e74c3c;
  background: #fff6f6;
}
.espacio-boton {
  height: 18px;
}
.btn-espaciado {
  margin-top: 0;
  padding: 0.5rem 1.2rem;
  background: #2ecc40;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
}
.btn-espaciado:disabled {
  background: #ccc;
  color: #888;
  cursor: not-allowed;
}
.mensaje {
  margin-top: 15px;
  font-weight: bold;
  color: green;
}
.error {
  color: #e74c3c;
  margin-top: 10px;
  font-size: 0.95rem;
}
</style>
