<template>
  <div class="productos">
    <h2>Listado de Productos</h2>
    <input
      v-model="busqueda"
      type="text"
      placeholder="Buscar producto..."
      class="input-busqueda"
    />
    <div v-if="productosFiltrados.length === 0" class="estado-vacio">
      No se encontraron productos.
    </div>
    <ul v-else class="lista-productos">
      <li
        v-for="producto in productosFiltrados"
        :key="producto.id"
        :class="{ 'sin-stock': producto.stock === 0 }"
      >
        <span class="nombre nombre-link" @click="verDetalle(producto.id)">{{ producto.nombre }}</span>
        <span class="precio">${{ producto.precio.toFixed(2) }}</span>
        <span class="stock" v-if="producto.stock === 0">Sin stock</span>
        <span class="stock" v-else>Stock: {{ producto.stock }}</span>
        <button
          :disabled="producto.stock === 0"
          @click="agregarAlCarrito(producto.id)"
        >Agregar al carrito</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const productos = ref([
  { id: 1, nombre: 'Notebook Lenovo', precio: 850000, stock: 3 },
  { id: 2, nombre: 'Mouse Logitech', precio: 12000, stock: 0 },
  { id: 3, nombre: 'Monitor Samsung', precio: 210000, stock: 5 },
  { id: 4, nombre: 'Teclado Redragon', precio: 25000, stock: 2 },
  { id: 5, nombre: 'Auriculares Sony', precio: 40000, stock: 0 },
])

const busqueda = ref('')
const router = useRouter()

const productosFiltrados = computed(() => {
  if (!busqueda.value.trim()) return productos.value
  return productos.value.filter(p =>
    p.nombre.toLowerCase().includes(busqueda.value.trim().toLowerCase())
  )
})

function verDetalle(id) {
  router.push(`/productos/${id}`)
}

function agregarAlCarrito(id) {
  // Emitir evento global para App.vue
  window.dispatchEvent(new CustomEvent('add-to-cart', { detail: id }))
}
</script>

<style scoped>
.productos {
  max-width: 500px;
  margin: 2rem auto;
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
}
.input-busqueda {
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
}
.lista-productos {
  list-style: none;
  padding: 0;
}
.lista-productos li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 0.5rem;
  border-bottom: 1px solid #eee;
}
.nombre {
  flex: 2;
}
.nombre-link {
  cursor: pointer;
  text-decoration: underline;
  color: #2c3e50;
  transition: color 0.2s;
}
.nombre-link:hover {
  color: #27ae60;
}
  /* cierre correcto del bloque .nombre */
.precio {
  flex: 1;
  text-align: right;
}
.stock {
  flex: 1;
  text-align: center;
  font-size: 0.95em;
}
.sin-stock {
  background: #ffeaea;
  color: #b71c1c;
}
.estado-vacio {
  color: #888;
  text-align: center;
  margin: 2rem 0;
}
button {
  flex: 1;
  margin-left: 1rem;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 4px;
  background: #2ecc40;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
button:disabled {
  background: #ccc;
  color: #888;
  cursor: not-allowed;
}
</style>
