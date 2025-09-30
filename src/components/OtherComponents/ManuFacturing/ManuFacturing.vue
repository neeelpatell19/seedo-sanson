<template>
    <section class="ManuFacturing MainPaddingContainerTop80">
        <br class="onlypcbr">
        <div class="ManuFacturing-container">
            <div class="BackgroundImageContainer">
                <h2>Seedo Toys: Sparking Imagination, Ensuring Quality</h2>
                <p>Driven by innovation and strong technical control,
                    we at Seedo have developed a range of high-quality
                    toys, ensuring they are safe, affordable, and meet
                    the highest standards. Seedo Toys sparks
                    children’s imaginations while offering parents
                    confidence in our craftsmanship. We are committed
                    to becoming India's leading toy manufacturers and
                    aim for tenfold growth within three years. We are
                    excited to share our collection and bring joy to kids
                    everywhere!</p>
            </div>
        </div>
        <br><br>
        <div class="Container">
            <!-- <div class="SansonIntro">
                <p>Sanson Promo Innovations LLP</p>
                <h2>Sanson is a leading innovator in consumer and trade pro-motions, trusted by major
                    FMCG brands in India such as Unilever, Glaxo, Perfetti, Mondelez, Britannia, and
                    more.</h2>
                <br>
                <div class="SansonIntroContentGrid">
                    <div>
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/SansonOffice.png" alt="">
                    </div>
                    <div>
                        <p>With extensive expertise in collaborating with global brands and managing OEM
                            licensors like Disney, Marvel, Mattel, Pokémon, and Doraemon, we prioritise safety
                            and quality throughout the entire product cycle.</p>
                        <br>
                        <p>From concept to execution, we manage every aspect, including conceptualization,
                            modelling, product engineer-ing, value engineering, mass manufacturing, quality
                            assur-ance, and logistics. Our unwavering commitment to excellence ensures we
                            consistently exceed client expectations.</p>
                        <br>
                        <p>By leveraging our deep understanding of consumer be-haviour and market trends, we
                            design engaging campaigns that foster brand loyalty and drive growth. Join Sanson
                            Promo Innovations LLP on this exciting journey as we continue to shape the consumer
                            and trade promotions landscape, delivering exceptional results for our cli-ents.</p>
                    </div>
                </div>
            </div> -->
            <div class="SansonInfoContainerStyle">
                <div class="SansonInfoContainerStyleTitle">
                    <p>
                        Sanson Promo Innovations LLP</p>
                    <h2>Sanson is a leading innovator in consumer and trade pro-motions, trusted by major FMCG brands in
                        India such as Unilever, Glaxo, Perfetti, Mondelez, Britannia, and more.</h2>
                </div>
                <div class="GridContainerEdit">
                    <div>
                        <h2><span>25</span> years <br> of expertise</h2>
                    </div>
                    <div>
                        <div>
                            <div>
                                <!-- <h5>Heavy machine shop</h5> -->
                                <p>With extensive expertise in collaborating with global brands and managing OEM
                                    licensors like Disney, Marvel, Mattel, Pokémon, and Doraemon, we prioritise safety
                                    and quality throughout the entire product cycle.</p>
                            </div>
                            <br>
                            <div>
                                <!-- <h5>Heavy machine shop</h5> -->
                                <p>From concept to execution, we manage every aspect, including conceptualization,
                                    modelling, product engineer-ing, value engineering, mass manufacturing, quality
                                    assur-ance, and logistics. Our unwavering commitment to excellence ensures we
                                    consistently exceed client expectations.</p>
                            </div>
                            <br>
                            <div>
                                <p>By leveraging our deep understanding of consumer be-haviour and market trends, we
                                    design engaging campaigns that foster brand loyalty and drive growth. Join Sanson
                                    Promo Innovations LLP on this exciting journey as we continue to shape the consumer
                                    and trade promotions landscape, delivering exceptional results for our cli-ents.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/SansonOffice.png" alt="">
                    </div>
                </div>
            </div>
            <div class="Container TopPaddingAnotherPage">
                <!-- <h1 class="text-center">Manufacturing</h1> -->

                <!-- Step 1: Factory Exterior -->
                <div class="manufacturing-step">
                    <div class="step-header">
                        <div class="step-title-section">
                            <h2>FACTORY EXTERIOR</h2>
                            <p class="step-description">
                                A state-of-the-art infrastructure facility spanning 150,000 sq. ft., with 75,000 sq. ft.
                                exclusively dedicated to the production of high-quality toys.
                            </p>
                        </div>
                        <div class="step-logos">
                            <!-- <div class="seedo-logo">
                                <img src="/Images/SeedoLogoImage.svg" alt="SEEDO" />
                            </div> -->
                            <div class="make-in-india-logo">
                                <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/MakeInIndia.jpg"
                                    alt="Make in India" />
                            </div>
                        </div>
                    </div>

                    <div class="factory-units">
                        <div class="factory-unit">
                            <div class="unit-image">
                                <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/FacturyUnit1.png"
                                    alt="UNIT-1 Factory Exterior" />
                            </div>
                            <div class="unit-label">UNIT-1</div>
                        </div>

                        <div class="factory-unit">
                            <div class="unit-image">
                                <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/FactoryUni2.png"
                                    alt="UNIT-2 Factory Exterior" />
                            </div>
                            <div class="unit-label">UNIT-2</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Manufacturing Cards Section -->
            <div class="ManufacturingProcessContainer">
                <div class="cards-section">
                    <div class="section-header">
                        <h2>Our Manufacturing Capabilities</h2>
                        <p>Comprehensive solutions across multiple industries</p>
                    </div>
                    <br><br>

                    <div class="cards-grid">
                        <div v-for="(card, index) in manufacturingCards" :key="index" class="manufacturing-card">
                            <div class="card-image">
                                <!-- If multiple images, show fading carousel; else single image -->
                                <template v-if="Array.isArray(card.images) && card.images.length > 1">
                                    <Swiper :modules="modules" effect="fade"
                                        :autoplay="{ delay: 2500, disableOnInteraction: false }" :loop="true"
                                        class="manufacturing-card-swiper" style="height: 100%;">
                                        <SwiperSlide v-for="(imgSrc, i) in card.images" :key="i">
                                            <img :src="imgSrc" :alt="card.title" />
                                        </SwiperSlide>
                                    </Swiper>
                                </template>
                                <template v-else>
                                    <img :src="card.images && card.images[0]" :alt="card.title" />
                                </template>
                                <div class="card-content">
                                    <h3 class="card-title">{{ card.title }}</h3>
                                    <p class="card-description">
                                        {{ card.description }}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <!-- Seedo Certifications Section -->



        </div>
        <br>
        <div class="SeedoCertificationsContainer">
            <div class="certifications-section Container">
                <div class="section-header">
                    <h2 class="white">Seedo Certifications</h2>
                    <p class="white">Our commitment to quality and excellence</p>
                </div>
                <br><br>
                <div class="certifications-swiper-container">
                    <button class="cert-nav-btn cert-nav-prev" @click="slidePrev" aria-label="Previous certifications">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    <Swiper ref="certSwiperRef" class="certifications-swiper" :modules="modules" :slides-per-view="3"
                        :space-between="20" :breakpoints="{
                            320: { slidesPerView: 1, spaceBetween: 15 },
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 25 }
                        }" :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }"
                        :a11y="{ enabled: true }" :loop="true" @swiper="onCertSwiper">

                        <SwiperSlide v-for="(cert, index) in certifications" :key="index">
                            <div class="certification-card" @click="openFullscreen(index)">
                                <img :src="cert.image" :alt="cert.title" class="certification-image" />
                                <div class="certification-overlay">
                                    <div class="certification-title">{{ cert.title }}</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <button class="cert-nav-btn cert-nav-next" @click="slideNext" aria-label="Next certifications">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Fullscreen Modal -->
            <div v-if="showFullscreen" class="fullscreen-modal" @click="closeFullscreen">
                <div class="fullscreen-content" @click.stop>
                    <button class="close-btn" @click="closeFullscreen" aria-label="Close">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                    <img :src="currentCertification.image" :alt="currentCertification.title" class="fullscreen-image" />
                    <div class="fullscreen-title">{{ currentCertification.title }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import { A11y, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "./ManuFacturing.css";

// Manufacturing cards data
const manufacturingCards = ref([
    {
        id: 1,
        title: "STORE CAPACITY",
        description: "The factory can store up to 10 standard 40-foot containers, supporting bulk inventory.",
        images: [
            "/Images/ManufacturingImages/StoreCapicity.png",
            "/Images/ManufacturingImages/StoreCapacityImag2.jpeg"
        ]
    },
    {
        id: 2,
        title: "MOULDING",
        description: "Equipped with 24 advanced injection moulding machines, ensuring precision and efficiency in production.",
        images: ["/Images/ManufacturingImages/Moulding.png"]
    },
    {
        id: 3,
        title: "PAD PRINTING",
        description: "The facility has 18 pad printing machines, supporting one to four-colour prints daily.",
        images: ["/Images/ManufacturingImages/Pad Printing.png"]
    },
    {
        id: 4,
        title: "SPRAY PAINTING",
        description: "Our 7 booths and 2 conveyor belts can paint up to 6,000 units daily efficiently.",
        images: ["/Images/ManufacturingImages/SprayPainting.png", "/Images/ManufacturingImages/SprayPaintingImage2.png"]
    },
    {
        id: 5,
        title: "ASSEMBLY",
        description: "Seven assembly lines allow up to 50,000 products to be assembled daily accurately.",
        images: ["/Images/ManufacturingImages/Assembly.png", "/Images/ManufacturingImages/ASSEMBLYImage2.jpeg"]
    },
    {
        id: 6,
        title: "PACKAGING STEP",
        description: "Annual production exceeds 10 million units, with packaging done carefully for every product.",
        images: ["/Images/ManufacturingImages/PackagingStep.png"]
    },
    {
        id: 7,
        title: "QUALITY CHECK",
        description: "Each product undergoes rigorous quality checks to maintain the highest standards consistently.",
        images: ["/Images/ManufacturingImages/Quality Check.png"]
    }
]);

// Swiper modules
const modules = [A11y, Autoplay, EffectFade];

// Certifications data
const certifications = ref([
    { id: 1, title: "Certificate 1", image: "/Images/SeedoCertifications/SeedoCertificate1.png" },
    { id: 2, title: "Certificate 2", image: "/Images/SeedoCertifications/SeedoCertificate2.png" },
    { id: 3, title: "Certificate 3", image: "/Images/SeedoCertifications/SeedoCertificate3.png" },
    { id: 4, title: "Certificate 4", image: "/Images/SeedoCertifications/SeedoCertificate4.png" },
    { id: 5, title: "Certificate 5", image: "/Images/SeedoCertifications/SeedoCertificate5.png" },
    { id: 6, title: "Certificate 6", image: "/Images/SeedoCertifications/SeedoCertificate6.png" },
    { id: 7, title: "Certificate 7", image: "/Images/SeedoCertifications/SeedoCertificate7.png" },
    { id: 8, title: "Certificate 8", image: "/Images/SeedoCertifications/SeedoCertificate8.png" },
    { id: 9, title: "Certificate 9", image: "/Images/SeedoCertifications/SeedoCertificate9.png" },
    { id: 10, title: "Certificate 10", image: "/Images/SeedoCertifications/SeedoCertificate10.png" },
    { id: 11, title: "Certificate 11", image: "/Images/SeedoCertifications/SeedoCertificate11.png" },
    { id: 12, title: "Certificate 12", image: "/Images/SeedoCertifications/SeedoCertificate12.png" },
    { id: 13, title: "Certificate 13", image: "/Images/SeedoCertifications/SeedoCertificate13.png" },
    { id: 14, title: "Certificate 14", image: "/Images/SeedoCertifications/SeedoCertificate14.png" },
    { id: 15, title: "Certificate 15", image: "/Images/SeedoCertifications/SeedoCertificate15.png" },
    { id: 16, title: "Certificate 16", image: "/Images/SeedoCertifications/SeedoCertificate16.png" },
    { id: 17, title: "Certificate 17", image: "/Images/SeedoCertifications/SeedoCertificate17.png" },
    { id: 18, title: "Certificate 18", image: "/Images/SeedoCertifications/SeedoCertificate18.png" },
    { id: 19, title: "Certificate 19", image: "/Images/SeedoCertifications/SeedoCertificate19.png" }
]);

// Swiper instance
const certSwiperRef = ref(null);
let certSwiperInstance = null;

// Fullscreen modal state
const showFullscreen = ref(false);
const currentCertification = ref({});

// Navigation functions
const slideNext = () => {
    if (certSwiperInstance) {
        certSwiperInstance.slideNext();
    }
};

const slidePrev = () => {
    if (certSwiperInstance) {
        certSwiperInstance.slidePrev();
    }
};

// Get swiper instance
const onCertSwiper = (swiper) => {
    certSwiperInstance = swiper;
};

// Fullscreen functions
const openFullscreen = (index) => {
    currentCertification.value = certifications.value[index];
    showFullscreen.value = true;
    document.body.style.overflow = 'hidden';
};

const closeFullscreen = () => {
    showFullscreen.value = false;
    document.body.style.overflow = '';
};

</script>

<style scoped></style>