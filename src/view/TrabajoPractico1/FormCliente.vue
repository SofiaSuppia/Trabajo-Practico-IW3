<template>
  <Card class="registro">
    <template #title>
      Registro rápido de clientes
    </template>

    <template #content>
      <div class="p-fluid">
        <div class="field">
          <label for="nombre">Nombre del cliente</label>
          <InputText
            id="nombre"
            v-model="nombre"
            @keyup.enter="registrar"
            placeholder="Ej: Ana Pérez"
          />
        </div>

        <Button
          label="Registrar"
          icon="pi pi-check"
          :disabled="!nombre.trim()"
          @click="registrar"
          class="btn-espaciado"
        />

        <Message v-if="mensaje" severity="success" :closable="false" class="mt-3">
          {{ mensaje }}
        </Message>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Message from 'primevue/message'

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
.registro {
  max-width: 420px;
  margin: 2rem auto;
  font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;
}
.btn-espaciado {
  margin-top: 18px;
}
</style>
