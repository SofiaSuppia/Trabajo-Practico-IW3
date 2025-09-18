import { createRouter, createWebHistory } from 'vue-router'

// Importamos las vistas de cada TP

import Registro from './view/TrabajoPractico1/Registro.vue'
import Inicio from './view/Inicio.vue'
import Productos from './view/TrabajoPractico2/Productos.vue'
import Carrito from './view/TrabajoPractico2/Carrito.vue'
import RegistroValidado from './view/TrabajoPractico2/RegistroValidado.vue'

// Vista de detalle de producto (se creará luego)
const DetalleProducto = () => import('./view/TrabajoPractico2/DetalleProducto.vue')


const routes = [
  { path: '/', component: Inicio },
  { path: '/tp1', redirect: '/clientes' },
  { path: '/productos', component: Productos },
  { path: '/productos/:id', component: DetalleProducto, props: true },
  { path: '/carrito', component: Carrito },
  { path: '/clientes', component: RegistroValidado },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
