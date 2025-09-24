<template>
    <div class="Container MainPaddingContainerTop80 ">
        <div class="TopPaddingAnotherPage">
            <ProductContext v-slot="{ categories, loading, error }">
                <h2 class="text-center">{{ getCategoryTitle(categories, categorySlug) || categoryTitle }}</h2>
                <div>
                    <div v-if="loading" class="loading-container">
                        <p>Loading products...</p>
                    </div>
                    <div v-else-if="error" class="error-container">
                        <p>Error: {{ error }}</p>
                    </div>
                    <div v-else class="products-grid">
                        <template v-if="filterProductsByCategory(categories, categorySlug).length">
                            <router-link v-for="product in filterProductsByCategory(categories, categorySlug)"
                                :key="product._id" class="product-card"
                                :to="{ name: 'ProductDetails', params: { productSlug: slug(product.title || product.name) } }">
                                <div class="product-image-container">
                                    <img v-if="product.mainImages && product.mainImages.length"
                                        :src="product.mainImages[0]" :alt="product.title || product.name"
                                        class="product-image" />
                                    <img v-else src="/placeholder-seed.svg" :alt="product.title || product.name"
                                        class="product-image" />
                                </div>
                                <h3 class="product-title">{{ product.title || product.name }}</h3>
                                <p class="product-price">Rs. {{ product.price }}</p>
                            </router-link>
                        </template>
                        <template v-else>
                            <div class="no-products-container">
                                <img src="/placeholder-seed.svg" alt="No products available" class="no-products-icon" />
                                <p>No products available</p>
                            </div>
                        </template>
                    </div>
                </div>
            </ProductContext>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProductContext from '../../HeroRoutes/PopularProductsHome/ProductContext/ProductContext.vue'

export default {
    name: 'CategoriesWiseProduct',
    components: { ProductContext },
    setup() {
        const route = useRoute()
        const categorySlug = computed(() => String(route.params.categorySlug || '').toLowerCase())

        const slug = (value) =>
            String(value || '')
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '')
                .trim()
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-')

        const categoryTitle = computed(() =>
            categorySlug.value.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
        )

        const filterProductsByCategory = (categories, slugValue) => {
            const cats = Array.isArray(categories) ? categories : []
            const target = String(slugValue || '').toLowerCase()
            const matchedCats = cats.filter(cat => slug(cat?.name) === target)
            if (!matchedCats.length) return []
            const allProducts = matchedCats
                .flatMap(cat => Array.isArray(cat.subcategories) ? cat.subcategories : [])
                .flatMap(sub => Array.isArray(sub.products) ? sub.products : [])
            // Dedupe by _id in case the same product appears under multiple subcategories
            const seen = new Set()
            return allProducts.filter(p => {
                const id = p && p._id
                if (!id || seen.has(id)) return false
                seen.add(id)
                return true
            })
        }

        const getCategoryTitle = (categories, slugValue) => {
            const cats = Array.isArray(categories) ? categories : []
            const target = String(slugValue || '').toLowerCase()
            const matched = cats.find(cat => slug(cat?.name) === target)
            return matched?.name
        }

        return {
            categoryTitle,
            filterProductsByCategory,
            getCategoryTitle,
            categorySlug,
            slug
        }
    }
}
import "./CategoriesWiseProduct.css"
</script>

<style scoped></style>