import { createRouter, createWebHistory } from 'vue-router'
// import HeroHome from './components/HeroRoutes/HeroHome/HeroHome.vue'
import HeroRoute from './components/HeroRoutes/HeroRoute.vue'
import AboutUs from './components/OtherComponents/AboutUs/AboutUs.vue'
import SpecificProductPage from './components/Products/SpecificProductPage/SpecificProductPage.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HeroRoute
  },
  {
    path: '/about',
    name: 'About',
    component: AboutUs
  },
  {
    path: '/products',
    name: 'SpecificProduct',
    component: SpecificProductPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 