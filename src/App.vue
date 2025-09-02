<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/OtherComponents/Footer/Footer.vue'
import NavigationBar from './components/OtherComponents/NavigationBar/NavigationBar.vue'
</script>

<template>
  <NavigationBar />     
  <router-view />
  <Footer />
</template>

<style scoped></style>
