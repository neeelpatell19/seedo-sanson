import { createRouter, createWebHistory } from 'vue-router'
// import HeroHome from './components/HeroRoutes/HeroHome/HeroHome.vue'
import HeroRoute from './components/HeroRoutes/HeroRoute.vue'
import AboutUs from './components/OtherComponents/AboutUs/AboutUs.vue'
import SpecificProductPage from './components/Products/SpecificProductPage/SpecificProductPage.vue'
import Allproducts from './components/Products/Allproducts/Allproducts.vue'
import CategoriesWiseProduct from './components/Products/CategoriesWiseProduct/CategoriesWiseProduct.vue'
import ManuFacturing from './components/OtherComponents/ManuFacturing/ManuFacturing.vue'
import ProductInfoGallery from './components/ProductInfo/ProductInfoGallery.vue'

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
    ...redirectToAsset('/Images/product-info/Air%20Football.png')
  },
  {
    path: '/product/info/light-and-gear-dino',
    name: 'LightAndGearDinoProductInfo',
    ...redirectToAsset('/Images/light-and-gear-dino.png')
  },
  {
    path: '/product/info/big-stunt',
    name: 'BigStuntProductInfo',
    component: ProductInfoGallery,
    props: {
      title: 'Big Stunt',
      images: [
        '/Images/product-info/Big%20Stunt%201.1.png',
        '/Images/product-info/Big%20Stunt%201.2.png'
      ]
    }
  },
  {
    path: '/product/info/buildieflakes-42-pcs',
    name: 'Buildieflakes42ProductInfo',
    ...redirectToAsset('/Images/product-info/Buildieflakes%2042%20pcs.png')
  },
  {
    path: '/product/info/buildieflakes-90-pcs',
    name: 'Buildieflakes90ProductInfo',
    ...redirectToAsset('/Images/product-info/Buildieflakes%2090%20pcs.png')
  },
  {
    path: '/product/info/color-blast-rocket-blocks',
    name: 'ColorBlastRocketBlocksProductInfo',
    ...redirectToAsset('/Images/product-info/Color%20Blast%20Rocket%20Blocks%20100%20Pcs.png')
  },
  {
    path: '/product/info/crack-n-create-30-pcs',
    name: 'CrackNCreate30ProductInfo',
    ...redirectToAsset('/Images/product-info/Crack%20N%20Create%2030%20pcs.png')
  },
  {
    path: '/product/info/pack-of-6-pull-back-cars',
    name: 'PackOf6PullBackCarsProductInfo',
    ...redirectToAsset('/Images/product-info/Pack%20of%206%20plastic%20pull%20back%20cars.png')
  },
  {
    path: '/product/info/press-n-go-rocket',
    name: 'PressNGoRocketProductInfo',
    ...redirectToAsset('/Images/product-info/Press%20N%20Go%20Rocket.png')
  },
  {
    path: '/product/info/road-sniper',
    name: 'RoadSniperProductInfo',
    component: ProductInfoGallery,
    props: {
      title: 'Road Sniper',
      images: [
        '/Images/product-info/Road%20Sniper%201.1.png',
        '/Images/product-info/Road%20Sniper%201.2.png'
      ]
    }
  },
  {
    path: '/product/info/super-sonic-stunt-car',
    name: 'SuperSonicStuntCarProductInfo',
    ...redirectToAsset('/Images/product-info/Super%20Sonic%20Stunt%20Car.png')
  },
  {
    path: '/product/info/thunder-bird',
    name: 'ThunderBirdProductInfo',
    component: ProductInfoGallery,
    props: {
      title: 'Thunder Bird',
      images: [
        '/Images/product-info/Thunder%20Bird%201.1.png',
        '/Images/product-info/Thunder%20Bird%201.2.png',
        '/Images/product-info/Thunder%20Bird%201.3.png'
      ]
    }
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
    ...redirectToAsset('https://prepseed-files.prepseed.com/seedo/SEEDO+CATALOG+2026.pdf')
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