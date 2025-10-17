<script>
import "./FeaturedCategories.css"
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, A11y } from 'swiper/modules'
import 'swiper/css'

export default {
    name: 'FeaturedCategories',
    components: { Swiper, SwiperSlide },
    setup() {
        return {
            modules: [Autoplay, A11y]
        }
    },
    methods: {
        slug(value) {
            return String(value || '')
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '')
                .trim()
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-')
        }
    }
}
</script>

<template>
    <div class="featured-categories-container Container MainPaddingContainerTop80">
        <div class="featured-categories-header">
            <h2 class="featured-categories-title">Featured Categories</h2>
            <a href="#" class="featured-categories-view-all">View All</a>
        </div>

        <swiper class="featured-categories-grid" :modules="modules" :slides-per-view="1" :space-between="20"
            :speed="400"
            :breakpoints="{ 640: { slidesPerView: 2, spaceBetween: 24 }, 960: { slidesPerView: 3, spaceBetween: 28 } }"
            :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }" :loop="true"
            :a11y="{ enabled: true }">
            <!-- Remote Controlled Cars -->
            <swiper-slide>
                <div class="featured-category-card featured-category-card-blue">
                    <div class="featured-category-content">
                        <h3 class="featured-category-title">Remote <br> Controlled Cars</h3>
                        <router-link :to="`/allproducts/${slug('Remote Controlled Cars')}`"
                            class="featured-category-button">
                            <span>View</span>
                            <svg class="featured-category-arrow" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                            </svg>
                        </router-link>
                    </div>
                    <div class="featured-category-image">
                        <img src="/Images/RemoteControllCar.png" alt="Remote Controlled Cars">
                    </div>
                </div>
            </swiper-slide>

            <!-- Metal Die Cast Cars -->
            <swiper-slide>
                <div class="featured-category-card featured-category-card-gradient">
                    <div class="featured-category-content">
                        <h3 class="featured-category-title">Friction, Pull Back,<br> Press &amp; Go Toys</h3>
                        <router-link :to="`/allproducts/${slug('Friction Pull Back Press & Go Toys')}`"
                            class="featured-category-button">
                            <span>View</span>
                            <svg class="featured-category-arrow" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                            </svg>
                        </router-link>
                    </div>
                    <div class="featured-category-image">
                        <img src="./Images/3dToysImage.png" alt="Friction Pull Back Toys">
                    </div>
                </div>
            </swiper-slide>

            <!-- Friction, Pull Back, Press & Go Toys -->
            <swiper-slide>
                <div class="featured-category-card featured-category-card-grey">
                    <div class="featured-category-content">
                        <h3 class="featured-category-title">Metal Die <br> Cast Cars</h3>
                        <router-link :to="`/allproducts/${slug('Metal Die Cast Cars')}`"
                            class="featured-category-button">
                            <span>View</span>
                            <svg class="featured-category-arrow" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                            </svg>
                        </router-link>
                    </div>
                    <div class="featured-category-image">
                        <img src="./Images/3d toy Car.png" alt="Metal Die Cast Cars">
                    </div>
                </div>
            </swiper-slide>

            <!-- Easy Learning Toys -->
            <swiper-slide>
                <div class="featured-category-card featured-category-card-light-gray">
                    <div class="featured-category-content">
                        <h3 class="featured-category-title">Early Learning <br> Toys</h3>
                        <router-link :to="`/allproducts/${slug('Early Learning Toys')}`"
                            class="featured-category-button">
                            <span>View</span>
                            <svg class="featured-category-arrow" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                            </svg>
                        </router-link>
                    </div>
                    <div class="featured-category-image">
                        <img src="./Images/Teddy3dImage.png" alt="Learning Toy" />
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<style scoped></style>