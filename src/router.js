import { createRouter, createWebHistory } from 'vue-router'

// Importamos las vistas de cada TP
import Registro from './view/TrabajoPractico1/Registro.vue'
//import TP2 from './view/TrabajoPractico2/TP2.vue' // Ejemplo

const routes = [
  { path: '/', redirect: '/tp1' },   // Redirige a TP1 por defecto
  { path: '/tp1', component: Registro },
  //{ path: '/tp2', component: TP2 }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
