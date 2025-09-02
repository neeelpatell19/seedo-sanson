<template>
    <section class="Certifications">
        <div class="cert-head">
            <h2>Certifications</h2>
            <a class="view-all" href="#">View All</a>
        </div>
        <br>
        <Swiper class="cert-swiper" :modules="modules" :slides-per-view="1.1" speed="800" :space-between="16"
            :breakpoints="{
                640: { slidesPerView: 2, spaceBetween: 20 },
                960: { slidesPerView: 3, spaceBetween: 24 },
                1280: { slidesPerView: 3, spaceBetween: 32 }
            }" :autoplay="{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }"
            :pagination="{ clickable: true }" :a11y="{ enabled: true }" :loop="true">
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
    </section>
</template>

<script setup>
import "./CertificationsSlider.css";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules"; // for Swiper v10/v11
// If you're on Swiper v8/9, use: import { Navigation, Pagination, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const modules = [Navigation, Pagination, A11y, Autoplay];

const items = [
    { title: "Make In India", src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/MakeInIndia.jpg" },
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

<style scoped></style>