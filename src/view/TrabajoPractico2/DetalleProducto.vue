<template>
  <div class="detalle-producto">
    <div v-if="producto">
      <h2>{{ producto.nombre }}</h2>
      <p><strong>Precio:</strong> ${{ producto.precio.toFixed(2) }}</p>
      <p><strong>Stock:</strong> <span :class="{ 'sin-stock': producto.stock === 0 }">{{ producto.stock === 0 ? 'Sin stock' : producto.stock }}</span></p>
      <button @click="volver">Volver a productos</button>
    </div>
    <div v-else class="estado-vacio">
      Producto no encontrado.
      <button @click="volver">Volver a productos</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()


const props = defineProps({ productos: Array })
const producto = ref(null)

onMounted(() => {
  const id = Number(route.params.id)
  producto.value = props.productos.find(p => p.id === id) || null
})

function volver() {
  router.push('/productos')
}
</script>

<style scoped>
.detalle-producto {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
  text-align: center;
}
.sin-stock {
  color: #b71c1c;
  font-weight: bold;
}
.estado-vacio {
  color: #888;
  margin: 2rem 0;
}
button {
  margin-top: 1.5rem;
  padding: 0.5rem 1.2rem;
  background: #2c3e50;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
}
</style>
