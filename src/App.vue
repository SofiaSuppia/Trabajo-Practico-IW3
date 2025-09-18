

<script setup>
import { ref, onMounted } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

// Productos base (deben ser únicos y compartidos)
const productos = ref([
  { id: 1, nombre: 'Notebook Lenovo', precio: 850000, stock: 3 },
  { id: 2, nombre: 'Mouse Logitech', precio: 12000, stock: 0 },
  { id: 3, nombre: 'Monitor Samsung', precio: 210000, stock: 5 },
  { id: 4, nombre: 'Teclado Redragon', precio: 25000, stock: 2 },
  { id: 5, nombre: 'Auriculares Sony', precio: 40000, stock: 0 },
])

// Carrito global
const carrito = ref([])

function agregarAlCarrito(id) {
  const prod = productos.value.find(p => p.id === id)
  if (!prod) return
  const existente = carrito.value.find(i => i.id === id)
  if (existente) {
    existente.cantidad++
  } else {
    carrito.value.push({ ...prod, cantidad: 1 })
  }
}

onMounted(() => {
  window.addEventListener('add-to-cart', e => agregarAlCarrito(e.detail))
})
</script>


<template>
  <Header />
  <main>
    <router-view
      v-slot="{ Component }"
      :productos="productos"
      :carrito="carrito"
    >
      <component :is="Component" :productos="productos" :carrito="carrito" />
    </router-view>
  </main>
  <Footer />
</template>

<style>
body, html {
  font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;
}
main {
  min-height: 60vh;
}
</style>

