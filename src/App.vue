
<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>


<template>
  <Header />
  <main>
    <router-view />
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

