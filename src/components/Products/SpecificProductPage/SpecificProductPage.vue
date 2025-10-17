<template>
    <section class="SpecificProductPage paddingTop100px ">
        <!-- Breadcrumbs -->
        <nav class="sp-breadcrumbs ExtraSpaceTop50px" aria-label="Breadcrumb ">
            <ol>
                <li v-for="(bc, i) in breadcrumbs" :key="i">
                    <router-link v-if="!bc.current" :to="bc.to">{{ bc.label }}</router-link>
                    <span v-else aria-current="page">{{ bc.label }}</span>
                </li>
            </ol>
        </nav>
        <br>
        <div class="sp-grid">
            <ProductContext v-slot="{ products }">
                <template v-if="products && products.length">
                    <div style="display:none">{{ maybeHydrateFrom(products) }}</div>
                </template>
            </ProductContext>
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
                     
                    </div>
                </div>

                <!-- Thumbnails + arrows -->
                <div class="sp-thumbs">
                    <button class="sp-arrow" aria-label="Previous image" @click="prevImage">‹</button>
                    <ul class="sp-thumb-list">
                        <li v-for="(img, idx) in allImages" :key="idx">
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
                <div class="sp-meta-top">Item code: {{ product.code || '-' }}</div>
                <h1 class="sp-title">{{ product.title }}</h1>

                <div class="sp-price-wrap">
                    <span class="sp-price">{{ formatINR(product.price) }}</span>
                    <span v-if="discountPercent > 0" class="sp-mrp">{{ formatINR(product.mrp) }}</span>
                    <span v-if="discountPercent > 0" class="sp-off">-{{ discountPercent }}%</span>
                </div>

                <hr class="sp-divider" />

                <!-- <div class="sp-desc">
                    <h3>Description:</h3>
                    <p v-if="!showFull">{{ truncatedDesc }} <button class="sp-see" @click="showFull = true">See
                            More…</button></p>
                    <p v-else>{{ product.description }} <button class="sp-see" @click="showFull = false">Show
                            less</button></p>
                </div> -->

                <div v-if="hasColorVariants" class="sp-colors">
                    <div class="sp-colors-label">Color: <strong>{{ currentVariant.name }}</strong></div>
                    <div class="sp-swatches" role="listbox" aria-label="Choose color">
                        <button v-for="(v, key) in uniqueColorVariants" :key="key" class="sp-swatch"
                            :class="{ active: key === selectedVariantKey }" :style="{ backgroundColor: v.swatch }"
                            :aria-label="v.name" @click="selectVariant(key)" />
                    </div>
                </div>

                <ul class="sp-specs">
                    <template v-if="product.specs && product.specs.length">
                        <li v-for="(s, i) in product.specs" :key="i">
                            <span>{{ s.label }}</span> <strong>{{ s.value }}</strong>
                        </li>
                    </template>
                </ul>
                <div v-if="product.boxQuantity" class="sp-boxqty">Box quantity: <strong>{{ product.boxQuantity
                }}</strong></div>
            </div>
        </div>
        <div class="Container MainPaddingContainerTop80">

            <div class="section-header">
                <h2 class="section-title">Related Products</h2>
                <router-link to="/allproducts" class="view-all-btn">View All</router-link>
            </div>
            <!-- Reuse PopularProductsHome grid/card classes -->
            <ProductContext v-slot="{ products }">
                <div v-if="loading" class="loading">
                    Loading related products...
                </div>
                <div v-else-if="error" class="error">
                    Error loading related products: {{ error }}
                </div>
                <div v-else-if="getRelatedProducts(products).length > 0" class="products-grid sp-related-grid">
                    <!-- Filtered products from same category - limited to 8 products -->
                    <router-link v-for="p in getRelatedProducts(products)"
                        :key="p._id" class="product-card"
                        :to="{ name: 'ProductDetails', params: { categorySlug: categorySlug.value, productSlug: slug(p.title || p.name) } }">
                        <div class="product-image-container">
                            <img v-if="p.mainImages && p.mainImages.length" :src="p.mainImages[0]"
                                :alt="p.title || p.name" class="product-image" />
                            <img v-else src="/placeholder-seed.svg" :alt="p.title || p.name" class="product-image" />
                        </div>
                        <h3 class="product-title">{{ p.title || p.name }}</h3>
                        <p class="product-price">Rs. {{ p.price==0 ? '-' : p.price }}</p>
                    </router-link>
                </div>
                <div v-else class="no-products">
                    No related products found in this category.
                </div>
            </ProductContext>
        </div>
    </section>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useRoute, useRouter } from 'vue-router'
import ProductContext from '../../HeroRoutes/PopularProductsHome/ProductContext/ProductContext.vue'
import "./SpecificProductPage.css";

/* --- Product state: hydrated from API, minimal defaults only --- */
const product = reactive({
    code: "",
    title: "",
    price: 0,
    mrp: 0,
    description: "",
    mainImages: [],
    variants: {
        default: {
            name: "Default",
            swatch: "#cccccc",
            images: []
        }
    },
    material: "",
    dimension: "",
    innerPackaging: "",
    masterPackaging: "",
    hsn: "",
    specs: [],
    boxQuantity: "",
});

// Route and slug helper
const route = useRoute()
const router = useRouter()
const productSlug = computed(() => String(route.params.productSlug || '').toLowerCase())
const categorySlug = computed(() => String(route.params.categorySlug || '').toLowerCase())
const slug = (value) =>
    String(value || '')
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')

// Current product's category name for filtering related products
const currentProductCategory = ref('')

// Hydrate product from context when available
function maybeHydrateFrom(products) {
    const list = Array.isArray(products) ? products : []
    const match = list.find(p => slug(p.title || p.name || p._id) === productSlug.value)
    if (!match) return
    // Primary fields
    product.title = match.title || match.name || product.title
    product.price = Number(match.price ?? product.price) || 0
    product.mrp = Number(match.mrp ?? product.mrp) || product.price || 0
    product.code = match.itemCode || match.code || match.sku || product.code
    product.mainImages = Array.isArray(match.mainImages) ? match.mainImages : []
    // Store current product's category for filtering related products
    currentProductCategory.value = match.categoryName || ''
    // Description: prefer tabs.description (HTML) then description (HTML/string)
    const richDesc = (match.tabs && match.tabs.description) || match.description || ''
    if (typeof richDesc === 'string') {
        product.description = richDesc.replace(/<[^>]+>/g, '')
    }
    // Build variants from colors if available; fallback to mainImages
    const variants = {}
    const colors = Array.isArray(match.colors) ? match.colors : []
    if (colors.length) {
        colors.forEach((c, idx) => {
            const key = `v${idx}`
            variants[key] = {
                name: c.colorName || `Variant ${idx + 1}`,
                swatch: c.color || '#cccccc',
                images: Array.isArray(c.images) ? c.images : []
            }
        })
    }
    const mainImages = Array.isArray(match.mainImages) ? match.mainImages : []
    if (!Object.keys(variants).length) {
        variants.default = {
            name: 'Default',
            swatch: '#cccccc',
            images: mainImages
        }
    }
    // Assign back to product
    product.variants = Object.keys(variants).length ? variants : product.variants
    // Ensure selected images exist
    if (!product.variants.default && variants[Object.keys(variants)[0]]) {
        // ensure we have at least one key to use as current
        selectedVariantKey.value = Object.keys(variants)[0]
    }
    // Parse specifications HTML into list items
    if (typeof match.specifications === 'string' && match.specifications.trim()) {
        const items = []
        const html = match.specifications
        const liMatches = Array.from(html.matchAll(/<li>([\s\S]*?)<\/li>/gi))
        liMatches.forEach(m => {
            const raw = String(m[1] || '')
                .replace(/<[^>]+>/g, '')
                .replace(/&nbsp;/g, ' ')
                .trim()
            if (!raw) return
            const idx = raw.indexOf(':')
            const label = (idx >= 0 ? raw.slice(0, idx) : raw).trim()
            const value = (idx >= 0 ? raw.slice(idx + 1) : '').trim()
            items.push({ label, value })
        })
        if (items.length) product.specs = items
    }
    // Box quantity
    if (typeof match.boxQuantity === 'string' && match.boxQuantity.trim()) {
        product.boxQuantity = match.boxQuantity.trim()
    }
}

// Ensure page updates when navigating to another product without full reload
import { watch } from 'vue'
watch(() => route.params.productSlug, (newSlug) => {
    // reset minimal state so UI re-renders smoothly
    selectedVariantKey.value = 'default'
    selectedImageIndex.value = 0
}, { immediate: false })

/* Breadcrumbs */
const breadcrumbs = computed(() => {
    const crumbs = [
        { label: "Homepage", to: { name: 'Home' } },
        { label: "All Products", to: { name: 'Allproducts' } }
    ]

    // Add category if available
    if (categorySlug.value) {
        const categoryName = categorySlug.value.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
        crumbs.push({
            label: categoryName,
            to: { name: 'CategoryProducts', params: { categorySlug: categorySlug.value } }
        })
    }

    // Add current product
    crumbs.push({
        label: product.title,
        to: { name: 'ProductDetails', params: { categorySlug: categorySlug.value, productSlug: productSlug.value } },
        current: true
    })

    return crumbs
})

/* Gallery + variant state */
const selectedVariantKey = ref("default");
const selectedImageIndex = ref(0);
const currentVariant = computed(() => product.variants[selectedVariantKey.value] || product.variants.default);
const uniqueColorVariants = computed(() => product.variants || {});
const hasColorVariants = computed(() => {
    const variants = product.variants || {};
    const keys = Object.keys(variants);
    // Check if there are variants and if any variant has meaningful color data
    return keys.length > 1 || (keys.length === 1 && variants[keys[0]]?.swatch !== '#cccccc');
});
// Build a flat list of all images across variants, placing current variant first
const allImages = computed(() => {
    const order = [selectedVariantKey.value, ...Object.keys(product.variants || {}).filter(k => k !== selectedVariantKey.value)]
    const seen = new Set()
    const out = []
    order.forEach(key => {
        const imgs = (product.variants?.[key]?.images) || []
        imgs.forEach(src => { if (src && !seen.has(src)) { seen.add(src); out.push(src) } })
    })
    return out.length ? out : ["/placeholder-seed.svg"]
})
const currentImage = computed(() => allImages.value[selectedImageIndex.value] || "/placeholder-seed.svg");

function selectVariant(key) {
    selectedVariantKey.value = key;
    selectedImageIndex.value = 0; // reset to first image of new ordering
}
function selectThumb(i) {
    selectedImageIndex.value = i;
}
function nextImage() {
    selectedImageIndex.value = (selectedImageIndex.value + 1) % allImages.value.length;
}
function prevImage() {
    selectedImageIndex.value =
        (selectedImageIndex.value - 1 + allImages.value.length) % allImages.value.length;
}

/* Description “See more” */
const showFull = ref(false);
const truncatedDesc = computed(() => product.description.slice(0, 240) + (product.description.length > 240 ? "..." : ""));

/* Related products filtering function */
const getRelatedProducts = (products) => {
    if (!Array.isArray(products) || !currentProductCategory.value) return []
    
    return products
        .filter(p => {
            // Filter by same category and exclude current product
            return p && 
                   p.categoryName === currentProductCategory.value && 
                   slug(p.title || p.name) !== productSlug.value
        })
        .slice(0, 8) // Limit to 8 products
}

/* Price helpers */
const discountPercent = computed(() => Math.round((1 - product.price / product.mrp) * 100));
const formatINR = (n) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

/* Dummy actions */
const isFav = ref(false);
const share = () => { };
</script>

<style scoped></style>