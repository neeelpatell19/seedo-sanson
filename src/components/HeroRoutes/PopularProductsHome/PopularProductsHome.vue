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
    }
}
</script>

<template>
    <div class="popular-products-home">
        <div class="Container MainPaddingContainerTop80">
            <div class="section-header">
                <h2 class="section-title">Popular Products</h2>
                <a href="#" class="view-all-btn">View All</a>
            </div>
            <br>
            <WrapContext v-slot="{ products, loading, error }">
                <LogProducts :products="products" />

                <div v-if="loading" class="loading">
                    Loading products...
                </div>

                <div v-else-if="error" class="error">
                    Error: {{ error }}
                </div>

                <div v-else-if="products && products.length > 0" class="products-grid">
                    <div v-for="product in products.slice(0, 8)" :key="product._id" class="product-card">
                        <div class="product-image-container">
                            <img v-if="product.mainImages && product.mainImages.length" :src="product.mainImages[0]"
                                :alt="product.title" class="product-image" />
                        </div>
                        <h3 class="product-title">{{ product.title }}</h3>
                        <p class="product-price">Rs. {{ product.price }}</p>
                    </div>
                </div>

                <div v-else class="no-products">
                    No products found
                </div>
            </WrapContext>
        </div>
    </div>
</template>
