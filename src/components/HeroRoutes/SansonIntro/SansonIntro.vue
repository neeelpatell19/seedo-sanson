<script>
import "./SansonIntro.css"
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
            sliderImages: [
                {
                    id: 1,
                    src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/SanSonCarousal3.jpg",
                    alt: "Product Display Shelf"
                },
                {
                    id: 2,
                    src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/SanSonCarousal1.jpg",
                    alt: "Sanson Logo and Office"
                },
                {
                    id: 3,
                    src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/SanSonCarousal2.jpg",
                    alt: "Display Cabinet with Toys"
                },
                {
                    id: 4,
                    src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/SanSonCarousal3.jpg",
                    alt: "Display Cabinet with Toys"
                },
                {
                    id: 5,
                    src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/SanSonCarousal1.jpg",
                    alt: "Display Cabinet with Toys"
                },
                {
                    id: 6,
                    src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/SanSonCarousal2.jpg",
                    alt: "Display Cabinet with Toys"
                },



            ]
        }
    }
}
</script>

<template>
    <div class="SansonIntroContainer MainPaddingContainerTop80">
        <div class="SansonIntroContent">
            <!-- Header Section -->
            <div class="header-section">
                <h1 class="company-title">Sanson Promo Innovations LLP</h1>
                <button class="view-button">
                    <span>View</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                </button>
            </div>

            <!-- Swiper Slider Section -->
            <div class="swiper-container">
                <swiper :spaceBetween="30" :centeredSlides="true" :slidesPerView="3" :loop="true" :speed="800"
                    :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }" :modules="modules" :breakpoints="{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 15
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }" class="sanson-swiper">
                    <swiper-slide v-for="image in sliderImages" :key="image.id">
                        <div class="slide-content">
                            <img :src="image.src" :alt="image.alt" class="slide-image">
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

            <!-- Content Section -->
            <div class="content-section max-width-800 ">
                <p class="company-description text-center Container">
                    At Seedo, from the house of Sanson Promo Innovations LLP- a product innovation company with 2
                    decades of consumer promotion for kids. Driven by innovation and strong technical control, we at
                    Seedo have developed a range of high-quality toys, ensuring they are safe, affordable, and meet the
                    highest standards in child safety. Seedo toys sparks children's imagination while offering parents
                    confidence in our craftsmanship. We are committed to becoming India's leading toy manufacturers and
                    grown multi fold horizontally and vertically over the years. We are excited to share our collection
                    and bring joy to kids everywhere!
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>