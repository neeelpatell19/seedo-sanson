<script setup>
import { RouterView } from 'vue-router'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Footer from './components/OtherComponents/Footer/Footer.vue'
import NavigationBar from './components/OtherComponents/NavigationBar/NavigationBar.vue'

const route = useRoute()

// Function to scroll to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}

// Watch for route changes and scroll to top
watch(() => route.path, () => {
  scrollToTop()
}, { immediate: true })

// Also scroll to top when component mounts
onMounted(() => {
  scrollToTop()
})
</script>

<template>
  <NavigationBar v-if="$route.path !== '/how-to-play-video-for-blaze-runner'" />     
  <router-view :key="$route.fullPath" />
  <Footer v-if="$route.path !== '/how-to-play-video-for-blaze-runner'" />
</template>

<style scoped></style>
