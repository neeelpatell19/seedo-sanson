import { createRouter, createWebHistory } from 'vue-router'
// import HeroHome from './components/HeroRoutes/HeroHome/HeroHome.vue'
import HeroRoute from './components/HeroRoutes/HeroRoute.vue'
import AboutUs from './components/OtherComponents/AboutUs/AboutUs.vue'
import SpecificProductPage from './components/Products/SpecificProductPage/SpecificProductPage.vue'
import Allproducts from './components/Products/Allproducts/Allproducts.vue'
import CategoriesWiseProduct from './components/Products/CategoriesWiseProduct/CategoriesWiseProduct.vue'
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
    path: '/product/:productSlug',
    name: 'ProductDetails',
    component: SpecificProductPage
  },
  {
    path: '/allproducts/:categorySlug',
    name: 'CategoryProducts',
    component: CategoriesWiseProduct
  },
  {
    path: '/products',
    name: 'SpecificProduct',
    component: SpecificProductPage
  },
  {
    path: '/allproducts',
    name: 'Allproducts',
    component: Allproducts
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 