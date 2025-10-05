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
                    <!-- Filters: Subcategory selector -->
                    <div v-else>
                        <div class="filter-bar" v-if="hasValidSubcategories(categories, categorySlug)">
                            <label class="filter-label" for="subcategorySelect">Subcategory:</label>
                            <select id="subcategorySelect" class="filter-select" v-model="selectedSubcategory">
                                <option value="all">All</option>
                                <option v-for="sub in subcategoriesForCategory(categories, categorySlug)"
                                    :key="sub._id || sub.name" :value="slug(sub.name)">
                                    {{ sub.name || 'Unnamed' }}
                                </option>
                            </select>
                        </div>

                        <div class="products-grid">
                            <template v-if="filteredProducts(categories, categorySlug, selectedSubcategory).length">
                                <router-link
                                    v-for="product in filteredProducts(categories, categorySlug, selectedSubcategory)"
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
                                    <img src="/placeholder-seed.svg" alt="No products available"
                                        class="no-products-icon" />
                                    <p>No products available</p>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </ProductContext>
        </div>
    </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
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

        // Only load saved filter state if page was not reloaded
        let initialSubcategory = 'all'
        if (performance.navigation.type === 0) { // 0 = navigation, 1 = reload
            try {
                const saved = localStorage.getItem('categories-filters')
                if (saved) {
                    const parsed = JSON.parse(saved)
                    initialSubcategory = parsed.selectedSubcategory || 'all'
                }
            } catch (error) {
                console.warn('Failed to load filters:', error)
            }
        }
        
        const selectedSubcategory = ref(initialSubcategory)

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

        const subcategoriesForCategory = (categories, slugValue) => {
            const cats = Array.isArray(categories) ? categories : []
            const target = String(slugValue || '').toLowerCase()
            const matched = cats.find(cat => slug(cat?.name) === target)
            return matched && Array.isArray(matched.subcategories) ? matched.subcategories.filter(Boolean) : []
        }

        const hasValidSubcategories = (categories, slugValue) => {
            const subcategories = subcategoriesForCategory(categories, slugValue)
            // Check if there are subcategories with valid names (not empty, not 'Unnamed', not null/undefined)
            return subcategories.some(sub => 
                sub && 
                sub.name && 
                sub.name.trim() !== '' && 
                sub.name !== 'Unnamed' &&
                sub.name.toLowerCase() !== 'unnamed'
            )
        }

        const filteredProducts = (categories, slugValue, selected) => {
            const cats = Array.isArray(categories) ? categories : []
            const target = String(slugValue || '').toLowerCase()
            const matched = cats.find(cat => slug(cat?.name) === target)
            if (!matched) return []

            let subs = Array.isArray(matched.subcategories) ? matched.subcategories : []
            if (selected && selected !== 'all') {
                subs = subs.filter(sub => slug(sub?.name) === selected)
            }
            const allProducts = subs
                .flatMap(sub => Array.isArray(sub.products) ? sub.products : [])

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

        // Save filter state when it changes
        const saveFilters = () => {
            try {
                const filterState = {
                    selectedSubcategory: selectedSubcategory.value
                }
                localStorage.setItem('categories-filters', JSON.stringify(filterState))
            } catch (error) {
                console.warn('Failed to save filters:', error)
            }
        }

        // Watch for changes in selectedSubcategory
        watch(selectedSubcategory, () => {
            saveFilters()
        })

        return {
            categoryTitle,
            filterProductsByCategory,
            filteredProducts,
            subcategoriesForCategory,
            hasValidSubcategories,
            getCategoryTitle,
            categorySlug,
            slug,
            selectedSubcategory
        }
    }
}
import "./CategoriesWiseProduct.css"
</script>

<style scoped></style>