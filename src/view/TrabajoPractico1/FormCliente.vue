<template>
  <div class="registro">
    <h2>Registro rápido de clientes</h2>

    <label for="nombre">Nombre del cliente</label>
    <input
      id="nombre"
      type="text"
      v-model="nombre"
      @keyup.enter="registrar"
      placeholder="Ej: Ana Pérez"
    />

    <button :disabled="!nombre.trim()" @click="registrar">
      Registrar
    </button>

    <p v-if="mensaje" class="ok">{{ mensaje }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['registrado'])

const nombre = ref('')
const mensaje = ref('')

function capitalizar(cadena) {
  return cadena
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
    .join(' ')
}

function registrar() {
  const limpio = capitalizar(nombre.value)
  if (!limpio) return
  console.log('[DB] Guardado cliente:', limpio)
  mensaje.value = `¡Bienvenido/a, ${limpio}! Tu registro fue exitoso.`
  emit('registrado', limpio)
  nombre.value = ''
}
</script>

<style scoped>
/* estilos del formulario */
.registro {
  max-width: 420px;
  margin: 1rem auto;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,.05);
  background: #fff;
}
.ok {
  margin-top: .75rem;
  background: #ecfdf5;
  color: #065f46;
  padding: .5rem .75rem;
  border-radius: 8px;
}
</style>
