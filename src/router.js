import { createRouter, createWebHistory } from 'vue-router'
// import HeroHome from './components/HeroRoutes/HeroHome/HeroHome.vue'
import HeroRoute from './components/HeroRoutes/HeroRoute.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HeroRoute
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 