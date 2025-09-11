<template>
  <div class="registro">

  <h2>Registro Rápido de Clientes</h2>
  <p class="texto-ayuda">Por favor, ingresa el nombre del cliente que deseas registrar.</p>

  <InputText v-model="nombre" placeholder="Ej: Ana Pérez" class="input-full" />

  <div class="espacio-boton"></div>
  <Button label="Registrar" icon="pi pi-check" class="p-button-success btn-espaciado" @click="registrarCliente" />

    <p v-if="mensaje" class="mensaje">{{ mensaje }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

const nombre = ref('')
const mensaje = ref('')

const registrarCliente = () => {
  if (nombre.value.trim() !== '') {
    mensaje.value = `¡Bienvenido, ${nombre.value}! Registro exitoso.`
    console.log('Cliente registrado:', nombre.value) // simulación de guardado
    nombre.value = ''
  } else {
    mensaje.value = 'Por favor, escribe un nombre.'
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
.espacio-boton {
  height: 18px;
}
.btn-espaciado {
  margin-top: 0;
}
.mensaje {
  margin-top: 15px;
  font-weight: bold;
  color: green;
}

.texto-ayuda {
  margin-bottom: 10px;
  color: #444;
  font-size: 1rem;
}
</style>

<style scoped>
.input-full {
  width: 100%;
  box-sizing: border-box;
}
</style>
