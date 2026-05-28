import { createRouter, createWebHistory } from 'vue-router'
// import HeroHome from './components/HeroRoutes/HeroHome/HeroHome.vue'
import HeroRoute from './components/HeroRoutes/HeroRoute.vue'
import AboutUs from './components/OtherComponents/AboutUs/AboutUs.vue'
import SpecificProductPage from './components/Products/SpecificProductPage/SpecificProductPage.vue'
import Allproducts from './components/Products/Allproducts/Allproducts.vue'
import CategoriesWiseProduct from './components/Products/CategoriesWiseProduct/CategoriesWiseProduct.vue'
import ManuFacturing from './components/OtherComponents/ManuFacturing/ManuFacturing.vue'

const redirectToAsset = (assetPath) => ({
  beforeEnter: () => {
    window.location.replace(assetPath)
    return false
  }
})

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
    path: '/allproducts/:categorySlug/:productSlug',
    name: 'ProductDetails',
    component: SpecificProductPage
  },
  {
    path: '/allproducts/:categorySlug',
    name: 'CategoryProducts',
    component: CategoriesWiseProduct
  },
  {
    path: '/product/info/air-football',
    name: 'AirFootballProductInfo',
    ...redirectToAsset('/Images/banner-file.jpeg')
  },
  {
    path: '/product/info/big-doctor-set',
    name: 'BigDoctorSetProductInfo',
    ...redirectToAsset('/Images/product-info/Big%20Doctor%20set.jpeg')
  },
  {
    path: '/product/info/big-fashion-set',
    name: 'BigFashionSetProductInfo',
    ...redirectToAsset('/Images/product-info/Big%20Fashion%20Set.jpeg')
  },
  {
    path: '/product/info/big-kitchen-set',
    name: 'BigKitchenSetProductInfo',
    ...redirectToAsset('/Images/product-info/Big%20Kitchen%20Set.jpeg')
  },
  {
    path: '/product/info/big-tool-set',
    name: 'BigToolSetProductInfo',
    ...redirectToAsset('/Images/product-info/Big%20Tool%20Set.jpeg')
  },
  {
    path: '/product/info/small-doctor-set',
    name: 'SmallDoctorSetProductInfo',
    ...redirectToAsset('/Images/product-info/Small%20Doctor%20Set.jpeg')
  },
  {
    path: '/product/info/small-kitchen-set',
    name: 'SmallKitchenSetProductInfo',
    ...redirectToAsset('/Images/product-info/Small%20Kitchen%20Set.jpeg')
  },
  {
    path: '/product/info/small-tool-set',
    name: 'SmallToolSetProductInfo',
    ...redirectToAsset('/Images/product-info/Small%20Tool%20Set.jpeg')
  },
  {
    path: '/product/info/small-fashion-set',
    name: 'SmallFashionSetProductInfo',
    ...redirectToAsset('/Images/product-info/Small%20fashion%20Set.jpeg')
  },
  {
    path: '/product/video/blaze-runner',
    name: 'BlazeRunnerUnboxingVideo',
    ...redirectToAsset(
      'https://prepseed-files.prepseed.com/seedo/How+To+Play+Video+of+Blaze+Runner.mp4'
    )
  },
  {
    path: '/docs/catalogue/domestic',
    name: 'CatalogueDomestic',
    ...redirectToAsset(
      'https://prepseed-files.prepseed.com/seedo/SEEDO+CATALOG+DOMESTIC.pdf'
    )
  },
  {
    path: '/docs/catalogue/master',
    name: 'CatalogueMaster',
    ...redirectToAsset('https://prepseed-files.prepseed.com/seedo/SEEDO+CATALOG+MASTER.pdf')
  },
  {
    path: '/docs/catalogue',
    name: 'Catalogue',
    ...redirectToAsset('https://prepseed-files.prepseed.com/seedo/SEEDO+CATALOG.pdf')
  },
  {
    path: '/product/:productSlug',
    name: 'ProductDetailsLegacy',
    component: SpecificProductPage
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
  },
  {
    path: '/manufacturing',
    name: 'Manufacturing',
    component: ManuFacturing
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 