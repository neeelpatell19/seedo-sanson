<script>
import "./TrustedPresenceHome.css"
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Pagination, Autoplay } from 'swiper/modules'
import ClientsData from '../../ClientsData/ClientsData.js'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

export default {
    name: 'TrustedPresenceHome',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            ClientsData,
            modules: [FreeMode, Pagination, Autoplay],
        }
    },
}
</script>

<template>
    <div class="TrustedPresenceHome MainPaddingContainerTop80 MainPaddingContainerBottom80 MainMarginContainerTop80">
        <div class="Container">
            <div class="section-header">
                <h1 class="text-center">Trusted Presence Home</h1>
            </div>
            <br>
            <div class="max-width-800">
                <div>
                    <p class="text-center">Proudly available in 3000+ stores nationwide, including General Trade and
                        Modern Trade, we bring quality and innovation closer to you every day! Additionaly, explore our
                        presence across these digital platforms:</p>
                </div>
            </div>

            <!-- Client Logos Slider -->
            <div class="clients-slider-container">
                <swiper :slidesPerView="5" :spaceBetween="30" :freeMode="true" :loop="true" :speed="800" :autoplay="{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }" :breakpoints="{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }" :modules="modules" class="clients-swiper">
                    <swiper-slide v-for="client in ClientsData" :key="client.id" class="client-slide">
                        <div class="client-logo-container">
                            <img :src="client.image" :alt="client.name" class="client-logo" />
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<style scoped></style>