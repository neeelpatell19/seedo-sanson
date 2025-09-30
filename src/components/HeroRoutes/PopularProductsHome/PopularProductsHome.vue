<script>
import WrapContext from './wrapContext.vue'
import "./PopularProductsHome.css"

export default {
    name: 'PopularProductsHome',
    components: {
        WrapContext,
        LogProducts: {
            name: 'LogProducts',
            props: {
                products: { type: Array, default: () => [] }
            },
            watch: {
                products: {
                    immediate: true,
                    handler(newVal) {
                        console.log('PopularProductsHome products:', newVal)
                    }
                }
            },
            template: '<div style="display:none"></div>'
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
    <div class="popular-products-home">
        <div class="Container MainPaddingContainerTop80">
            <div class="section-header">
                <h2 class="section-title">Popular Products</h2>
                <router-link to="/allproducts" class="view-all-btn">View All</router-link>
            </div>
            <!-- <br> -->
            <WrapContext v-slot="{ products, loading, error }">
                <LogProducts :products="products" />

                <div v-if="loading" class="loading">
                    Loading products...
                </div>

                <div v-else-if="error" class="error">
                    Error: {{ error }}
                </div>

                <div v-else-if="products && products.length > 0" class="products-grid">
                    <router-link
                        v-for="product in products.slice(0, 8)"
                        :key="product._id"
                        class="product-card"
                        :to="{ name: 'ProductDetails', params: { productSlug: slug(product.title || product.name) } }"
                    >
                        <div class="product-image-container">
                            <img v-if="product.mainImages && product.mainImages.length" :src="product.mainImages[0]"
                                :alt="product.title || product.name" class="product-image" />
                        </div>
                        <h3 class="product-title">{{ product.title || product.name }}</h3>
                        <p class="product-price">Rs. {{ product.price }}</p>
                    </router-link>
                </div>

                <div v-else class="no-products">
                    No products found
                </div>
            </WrapContext>
        </div>
    </div>
</template>
