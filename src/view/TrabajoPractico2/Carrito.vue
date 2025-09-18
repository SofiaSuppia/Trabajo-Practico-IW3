<template>
  <div class="carrito">
    <h2>Carrito de Compras</h2>
    <div v-if="items.length === 0" class="estado-vacio">
      El carrito está vacío.
    </div>
    <table v-else class="tabla-carrito">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.nombre }}</td>
          <td>
            <button @click="cambiarCantidad(item.id, -1)">−</button>
            {{ item.cantidad }}
            <button @click="cambiarCantidad(item.id, 1)">+</button>
          </td>
          <td>${{ item.precio.toFixed(2) }}</td>
          <td>${{ (item.precio * item.cantidad).toFixed(2) }}</td>
          <td>
            <button @click="eliminarItem(item.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" style="text-align:right"><strong>Total:</strong></td>
          <td colspan="2"><strong>${{ total }}</strong></td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'


const props = defineProps({
  productos: Array,
  carrito: Array
})


// Usar el carrito global pasado por props
const items = computed(() => props.carrito)


// La función agregarAlCarrito ya no es necesaria aquí


function cambiarCantidad(id, delta) {
  const item = items.value.find(i => i.id === id)
  if (!item) return
  item.cantidad += delta
  if (item.cantidad <= 0) {
    eliminarItem(id)
  }
}


function eliminarItem(id) {
  const idx = items.value.findIndex(i => i.id === id)
  if (idx !== -1) items.value.splice(idx, 1)
}


const total = computed(() => {
  return items.value.reduce((acc, item) => acc + item.precio * item.cantidad, 0).toFixed(2)
})


// Ya no es necesario exponer funciones
</script>

<style scoped>
.carrito {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
}
.tabla-carrito {
  width: 100%;
  border-collapse: collapse;
}
.tabla-carrito th,
.tabla-carrito td {
  border: 1px solid #eee;
  padding: 0.5rem;
  text-align: center;
}
button {
  margin: 0 0.2rem;
  padding: 0.2rem 0.6rem;
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
.estado-vacio {
  color: #888;
  text-align: center;
  margin: 2rem 0;
}
</style>
