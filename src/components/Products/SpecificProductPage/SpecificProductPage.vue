<template>
    <section class="SpecificProductPage paddingTop100px ">
        <!-- Breadcrumbs -->
        <nav class="sp-breadcrumbs ExtraSpaceTop50px" aria-label="Breadcrumb ">
            <ol>
                <li v-for="(bc, i) in breadcrumbs" :key="i">
                    <a v-if="!bc.current" :href="bc.href">{{ bc.label }}</a>
                    <span v-else aria-current="page">{{ bc.label }}</span>
                </li>
            </ol>
        </nav>
        <br>
        <div class="sp-grid">
            <!-- Left: Gallery -->
            <div class="sp-left">
                <div class="sp-main">
                    <img class="sp-main-img" :src="currentImage"
                        :alt="`${product.title} - ${currentVariant.name} - image ${selectedImageIndex + 1}`" />
                    <div class="sp-actions">
                        <button class="sp-icon" aria-label="Share" @click="share">
                            <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/ShareIcon.png"
                                alt="">
                        </button>
                        <button class="sp-icon" :class="{ active: isFav }" aria-label="Favorite"
                            @click="isFav = !isFav">
                            <!-- heart -->
                            <svg viewBox="0 0 24 24">
                                <path
                                    d="M12.1 21.35l-1.1-1C5.1 15 2 12.13 2 8.5A4.5 4.5 0 0 1 6.5 4c1.7 0 3.1.8 4 2.09A5.02 5.02 0 0 1 20 8.5c0 3.63-3.1 6.5-9 11.85z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Thumbnails + arrows -->
                <div class="sp-thumbs">
                    <button class="sp-arrow" aria-label="Previous image" @click="prevImage">‹</button>
                    <ul class="sp-thumb-list">
                        <li v-for="(img, idx) in variantImages" :key="idx">
                            <button class="sp-thumb" :class="{ active: idx === selectedImageIndex }"
                                @click="selectThumb(idx)" :aria-label="`Thumbnail ${idx + 1}`">
                                <img :src="img" :alt="`Thumbnail ${idx + 1}`" />
                            </button>
                        </li>
                    </ul>
                    <button class="sp-arrow" aria-label="Next image" @click="nextImage">›</button>
                </div>
            </div>

            <!-- Right: Details -->
            <div class="sp-right">
                <div class="sp-meta-top">Item code: {{ product.code }}</div>
                <h1 class="sp-title">{{ product.title }}</h1>

                <div class="sp-price-wrap">
                    <span class="sp-price">{{ formatINR(product.price) }}</span>
                    <span class="sp-mrp">{{ formatINR(product.mrp) }}</span>
                    <span class="sp-off">-{{ discountPercent }}%</span>
                </div>

                <hr class="sp-divider" />

                <div class="sp-desc">
                    <h3>Description:</h3>
                    <p v-if="!showFull">{{ truncatedDesc }} <button class="sp-see" @click="showFull = true">See
                            More…</button></p>
                    <p v-else>{{ product.description }} <button class="sp-see" @click="showFull = false">Show
                            less</button></p>
                </div>

                <div class="sp-colors">
                    <div class="sp-colors-label">Color: <strong>{{ currentVariant.name }}</strong></div>
                    <div class="sp-swatches" role="listbox" aria-label="Choose color">
                        <button v-for="(v, key) in product.variants" :key="key" class="sp-swatch"
                            :class="{ active: key === selectedVariantKey }" :style="{ backgroundColor: v.swatch }"
                            :aria-label="v.name" @click="selectVariant(key)" />
                    </div>
                </div>

                <ul class="sp-specs">
                    <li><span>Material type:</span> <strong>{{ product.material }}</strong></li>
                    <li><span>Dimension:</span> <strong>{{ product.dimension }}</strong></li>
                    <li><span>Inner Packaging:</span> <strong>{{ product.innerPackaging }}</strong></li>
                    <li><span>Master packaging:</span> <strong>{{ product.masterPackaging }}</strong></li>
                    <li><span>HSN Code:</span> <strong>{{ product.hsn }}</strong></li>
                </ul>
            </div>
        </div>
        <div class="Container MainPaddingContainerTop80">

            <div class="section-header">
                <h2 class="section-title">Related Products</h2>
                <a href="#" class="view-all-btn">View All</a>
            </div>
            <!-- <br> -->
            <!-- Reuse PopularProductsHome grid/card classes -->
            <div v-if="relatedProducts && relatedProducts.length" class="products-grid">
                <div v-for="item in relatedProducts" :key="item._id || item.id" class="product-card">
                    <div class="product-image-container">
                        <img v-if="item.mainImages && item.mainImages.length" :src="item.mainImages[0]"
                            :alt="item.title" class="product-image" />
                    </div>
                    <h3 class="product-title">{{ item.title }}</h3>
                    <p class="product-price">Rs. {{ item.price }}</p>
                </div>
            </div>
            <div v-else class="no-products">
                <p>No related products found.</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import "./SpecificProductPage.css";

/* --- Static dummy data (swap with API later) --- */
const product = reactive({
    code: "123",
    title: "Animal Face Car",
    price: 389,
    mrp: 780,
    description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.",
    variants: {
        green: {
            name: "Green",
            swatch: "#0ea5a5",
            images: [
                "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/DummyImage1.png",
                "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/DummyImage2.png",
                "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/DummyImage3.png",
                "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/DummyImage4.png"
            ],
        },
        grey: {
            name: "Grey",
            swatch: "#e6e7e9",
            images: [
                "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/DummyImage1.png",
                "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/DummyImage2.png",
            ],
        },
        blue: {
            name: "Blue",
            swatch: "#4a6f8f",
            images: [
                "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/DummyImage1.png",
                "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/DummyImage2.png",
            ],
        },
        black: {
            name: "Black",
            swatch: "#151c23",
            images: [
                "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/DummyImage3.png",
                "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/DummyImage4.png"
            ],
        },
    },
    material: "Plastic",
    dimension: "6.9 x 9.1 x 10.1 cm",
    innerPackaging: "12 pcs",
    masterPackaging: "192 pcs./box",
    hsn: "95030090",
});

/* Breadcrumbs */
const breadcrumbs = computed(() => [
    { label: "Homepage", href: "#" },
    { label: "Products", href: "#" },
    { label: "Friction, Pull Back, Press & Go Toys", href: "#" },
    { label: product.title, href: "#", current: true },
]);

/* Gallery + variant state */
const selectedVariantKey = ref("green");
const selectedImageIndex = ref(0);
const currentVariant = computed(() => product.variants[selectedVariantKey.value]);
const variantImages = computed(() => currentVariant.value.images);
const currentImage = computed(() => variantImages.value[selectedImageIndex.value]);

function selectVariant(key) {
    selectedVariantKey.value = key;
    selectedImageIndex.value = 0;
}
function selectThumb(i) {
    selectedImageIndex.value = i;
}
function nextImage() {
    selectedImageIndex.value = (selectedImageIndex.value + 1) % variantImages.value.length;
}
function prevImage() {
    selectedImageIndex.value =
        (selectedImageIndex.value - 1 + variantImages.value.length) % variantImages.value.length;
}

/* Description “See more” */
const showFull = ref(false);
const truncatedDesc = computed(() => product.description.slice(0, 240) + (product.description.length > 240 ? "..." : ""));

/* Price helpers */
const discountPercent = computed(() => Math.round((1 - product.price / product.mrp) * 100));
const formatINR = (n) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

/* Dummy actions */
const isFav = ref(false);
const share = () => alert("Share clicked (demo)");

/* Related products - reuse PopularProductsHome structure */
const relatedProducts = ref([
    {
        _id: "r1",
        title: "Mini Pull-back Car",
        price: 249,
        mainImages: ["https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/DummyImage1.png"],
    },
    {
        _id: "r2",
        title: "Animal Racer",
        price: 299,
        mainImages: ["https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/DummyImage2.png"],
    },
    {
        _id: "r3",
        title: "City Truck",
        price: 349,
        mainImages: ["https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/DummyImage3.png"],
    },
    {
        _id: "r4",
        title: "Cute Coupe",
        price: 399,
        mainImages: ["https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/DummyImage4.png"],
    },
]);
</script>

<style scoped></style>