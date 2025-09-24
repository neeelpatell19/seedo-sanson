<template>
    <div class="Container MainPaddingContainerTop80 ">
        <div class="TopPaddingAnotherPage">
            <h2 class="text-center">All Products</h2>
            <div>
                <ProductContext v-slot="{ products, loading, error }">
                    <div v-if="loading" class="loading-container">
                        <p>Loading products...</p>
                    </div>
                    <div v-else-if="error" class="error-container">
                        <p>Error: {{ error }}</p>
                    </div>
                    <div v-else-if="products && products.length > 0" class="products-grid">
                        <router-link
                            v-for="product in products"
                            :key="product._id"
                            class="product-card"
                            :to="{ name: 'ProductDetails', params: { productSlug: slug(product.title || product.name) } }"
                        >
                            <div class="product-image-container">
                                <img v-if="product.mainImages && product.mainImages.length" :src="product.mainImages[0]"
                                    :alt="product.title || product.name" class="product-image" />
                                <img v-else src="/placeholder-seed.svg" :alt="product.title || product.name"
                                    class="product-image" />
                            </div>
                            <h3 class="product-title">{{ product.title || product.name }}</h3>
                            <p class="product-price">Rs. {{ product.price }}</p>
                        </router-link>
                    </div>
                    <div v-else class="no-products-container">
                        <img src="/placeholder-seed.svg" alt="No products available" class="no-products-icon" />
                        <p>No products available</p>
                    </div>
                </ProductContext>
            </div>
        </div>
    </div>
</template>

<script>
import ProductContext from '../../HeroRoutes/PopularProductsHome/ProductContext/ProductContext.vue'

export default {
    name: 'Allproducts',
    components: {
        ProductContext
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
import "./Allproducts.css"
</script>

<style scoped></style>