<template>
    <section class="Certifications Container">
        <div class="cert-head">
            <h2>Certifications</h2>
            <!-- <a class="view-all" href="#">View All</a> -->
        </div>
        <br>
        <div class="cert-swiper-container">
            <button class="cert-nav-btn cert-nav-prev" @click="slidePrev" aria-label="Previous certifications">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M15 18l-6-6 6-6"/>
                </svg>
            </button>
            
            <Swiper 
                ref="swiperRef"
                class="cert-swiper" 
                :modules="modules" 
                :slides-per-view="1" 
                :slides-per-group="1" 
                speed="800" 
                :space-between="16"
                :breakpoints="{
                    640: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 20 },
                    960: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 24 },
                    1280: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 32 }
                }" 
                :autoplay="{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }"
                :a11y="{ enabled: true }" 
                :loop="true"
                @swiper="onSwiper">
            <SwiperSlide v-for="(item, i) in items" :key="i">
                <div class="cert-card">
                    <div class="cert-inner">
                        <div class="cert-logo">
                            <img :src="item.src" :alt="item.title" />
                        </div>
                        <h3 class="cert-title">{{ item.title }}</h3>
                    </div>
                </div>
            </SwiperSlide>
            </Swiper>
            
            <button class="cert-nav-btn cert-nav-next" @click="slideNext" aria-label="Next certifications">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 18l6-6-6-6"/>
                </svg>
            </button>
        </div>
    </section>
</template>

<script setup>
import "./CertificationsSlider.css";

import { ref } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import { A11y, Autoplay } from "swiper/modules";

import "swiper/css";

const modules = [A11y, Autoplay];

// Swiper instance
const swiperRef = ref(null);
let swiperInstance = null;

// Navigation functions
const slideNext = () => {
    if (swiperInstance) {
        swiperInstance.slideNext();
    }
};

const slidePrev = () => {
    if (swiperInstance) {
        swiperInstance.slidePrev();
    }
};

// Get swiper instance
const onSwiper = (swiper) => {
    swiperInstance = swiper;
};

const items = [
    // { title: "Make In India", src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/MakeInIndia.jpg" },
    { title: "ASTM International", src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/ASTM International.png" },
    { title: "Supplier Ethical Data Exchange", src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Supplier Ethical Data Exchange.png" },
    { title: "International Organization for Standardization (9001 : 2015)", src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/International Organization 1.jpeg" },
    { title: "International Organization for Standardization (14001 : 2015)", src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/International Organization 2.jpeg" },
    { title: "International Organization for Standardization (45001 : 2018)", src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/International Organization 3.jpeg" },
    { title: "Restriction of Hazardous Substances", src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Restriction of Hazardous Substances.png" },
    { title: "Conformité Européenne", src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Conformité Européenne.webp" },
    { title: "Gulf Conformity Mark", src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Gulf Conformity Mark.jpg" },
    { title: "Ministry of Micro, Small and Medium Enterprises", src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Ministry of Micro, Small and.png" },
    { title: "Good Manufacturing Practices", src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Good Manufacturing Practices.jpg" },
];
</script>

<style scoped>
/* Custom Navigation Buttons */
.cert-swiper-container {
    position: relative;
    display: flex;
    align-items: center;
    gap: 20px;
}

.cert-swiper {
    flex: 1;
}

.cert-nav-btn {
    background: #d33a35;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    color: white;
    box-shadow: 0 4px 12px rgba(211, 58, 53, 0.3);
    z-index: 10;
}

.cert-nav-btn:hover {
    background: #b8312e;
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(211, 58, 53, 0.4);
}

.cert-nav-btn:active {
    transform: scale(0.95);
}

.cert-nav-btn svg {
    width: 20px;
    height: 20px;
}

.cert-nav-prev {
    order: 1;
}

.cert-swiper {
    order: 2;
}

.cert-nav-next {
    order: 3;
}

/* Responsive Design */
@media (max-width: 768px) {
    .cert-swiper-container {
        gap: 15px;
    }
    
    .cert-nav-btn {
        width: 40px;
        height: 40px;
    }
    
    .cert-nav-btn svg {
        width: 16px;
        height: 16px;
    }
}

@media (max-width: 480px) {
    .cert-swiper-container {
        gap: 10px;
    }
    
    .cert-nav-btn {
        width: 35px;
        height: 35px;
    }
    
    .cert-nav-btn svg {
        width: 14px;
        height: 14px;
    }
}
</style>