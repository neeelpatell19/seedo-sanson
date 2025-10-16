<template>
    <div class="Container MainPaddingContainerTop80 ">
        <div class="TopPaddingAnotherPage">
            <h2 class="text-center">All Products</h2>
            <div>
                <ProductContext v-slot="{ products, categories, loading, error }">
                    <!-- Filters Toggle -->
                    <div class="filters-bar">
                        <button class="view-button" @click="toggleFilters">
                            <span>{{ showFilters ? 'Hide Filters' : 'Show Filters' }}</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </button>
                    </div>

                    <!-- Filters Panel -->
                    <div v-if="showFilters" class="filters-panel">
                        <div class="filters-row">
                            <div class="filter-item">
                                <label>Category</label>
                                <select v-model="selectedCategoryId">
                                    <option value="">All</option>
                                    <option v-for="cat in categories" :key="cat._id" :value="cat._id">{{ cat.name ||
                                        'Untitled' }}</option>
                                </select>
                            </div>

                            <div class="filter-item" v-if="hasValidSubcategories(categories, selectedCategoryId)">
                                <label>Subcategory</label>
                                <select v-model="selectedSubcategoryId" :disabled="!selectedCategoryId">
                                    <option value="">All</option>
                                    <option v-for="sub in getSubcategories(categories, selectedCategoryId)"
                                        :key="sub._id" :value="sub._id">{{ sub.name || 'Untitled' }}</option>
                                </select>
                            </div>

                            <div class="filter-actions">
                                <button class="view-button" @click="resetFilters">
                                    <span>Reset</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div v-if="loading" class="loading-container">
                        <p>Loading products...</p>
                    </div>
                    <div v-else-if="error" class="error-container">
                        <p>Error: {{ error }}</p>
                    </div>
                    <div v-else-if="(filterProducts(products, categories, selectedCategoryId, selectedSubcategoryId) || []).length > 0"
                        class="products-grid">
                        <router-link
                            v-for="product in filterProducts(products, categories, selectedCategoryId, selectedSubcategoryId)"
                            :key="product._id" class="product-card"
                            :to="getProductLink(product, categories)">
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
    data() {
        return {
            showFilters: false,
            selectedCategoryId: '',
            selectedSubcategoryId: ''
        }
    },
    created() {
        // Only load saved filter state if page was not reloaded
        if (performance.navigation.type === 0) { // 0 = navigation, 1 = reload
            try {
                const saved = localStorage.getItem('allproducts-filters')
                if (saved) {
                    const parsed = JSON.parse(saved)
                    this.showFilters = parsed.showFilters || false
                    this.selectedCategoryId = parsed.selectedCategoryId || ''
                    this.selectedSubcategoryId = parsed.selectedSubcategoryId || ''
                }
            } catch (error) {
                console.warn('Failed to load filters:', error)
            }
        }
    },
    methods: {
        toggleFilters() {
            this.showFilters = !this.showFilters
            this.saveFilters()
        },
        resetFilters() {
            this.selectedCategoryId = ''
            this.selectedSubcategoryId = ''
            this.saveFilters()
        },
        saveFilters() {
            try {
                const filterState = {
                    showFilters: this.showFilters,
                    selectedCategoryId: this.selectedCategoryId,
                    selectedSubcategoryId: this.selectedSubcategoryId
                }
                localStorage.setItem('allproducts-filters', JSON.stringify(filterState))
            } catch (error) {
                console.warn('Failed to save filters:', error)
            }
        },
        getSubcategories(categories, categoryId) {
            if (!categoryId) return []
            const found = (categories || []).find(c => String(c?._id) === String(categoryId))
            const subcategories = Array.isArray(found?.subcategories) ? found.subcategories : []
            // Only return subcategories that have products AND meaningful names
            return subcategories.filter(sub => {
                return sub && 
                       Array.isArray(sub.products) && 
                       sub.products.length > 0 &&
                       sub.name && 
                       sub.name.trim() !== ''
            })
        },
        hasValidSubcategories(categories, categoryId) {
            if (!categoryId) return false
            const subcategories = this.getSubcategories(categories, categoryId)
            // Check if there are subcategories with products AND meaningful names
            return subcategories.some(sub => {
                // Check if subcategory has products AND a meaningful name (not empty)
                return sub && 
                       Array.isArray(sub.products) && 
                       sub.products.length > 0 &&
                       sub.name && 
                       sub.name.trim() !== ''
            })
        },
        filterProducts(products, categories, categoryId, subcategoryId) {
            let list = products || []
            if (!categoryId && !subcategoryId) return list
            
            // If subcategory selected, filter by products belonging to that subcategory
            if (subcategoryId) {
                const subs = (categories || [])
                    .flatMap(c => Array.isArray(c.subcategories) ? c.subcategories : [])
                    .filter(s => String(s?._id) === String(subcategoryId))
                const ids = new Set((subs[0]?.products || []).map(p => String(p?._id)))
                return list.filter(p => ids.has(String(p?._id)))
            }
            
            // Else if only category selected, check if category has subcategories with products
            if (categoryId) {
                const cat = (categories || []).find(c => String(c?._id) === String(categoryId))
                if (!cat) return list
                
                // Check if category has subcategories with products
                const hasSubcategories = this.hasValidSubcategories(categories, categoryId)
                
                if (hasSubcategories) {
                    // Always include products from subcategories when they exist
                    const ids = new Set(
                        (cat?.subcategories || [])
                            .flatMap(s => Array.isArray(s.products) ? s.products : [])
                            .map(p => String(p?._id))
                    )
                    return list.filter(p => ids.has(String(p?._id)))
                } else {
                    // Include products directly from main category when no subcategories exist
                    const ids = new Set((cat?.products || []).map(p => String(p?._id)))
                    return list.filter(p => ids.has(String(p?._id)))
                }
            }
            return list
        },
        slug(value) {
            return String(value || '')
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '')
                .trim()
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-')
        },
        getProductLink(product, categories) {
            // Find the product's category
            const productCategory = this.findProductCategory(product._id, categories)
            if (productCategory) {
                return {
                    name: 'ProductDetails',
                    params: {
                        categorySlug: this.slug(productCategory.categoryName),
                        productSlug: this.slug(product.title || product.name || product._id)
                    }
                }
            }
            // Fallback to legacy route
            return {
                name: 'ProductDetailsLegacy',
                params: {
                    productSlug: this.slug(product.title || product.name || product._id)
                }
            }
        },
        findProductCategory(productId, categories) {
            // Find which category this product belongs to
            if (!categories || !Array.isArray(categories)) return null
            
            for (const category of categories) {
                if (category.subcategories && Array.isArray(category.subcategories)) {
                    for (const subcategory of category.subcategories) {
                        if (subcategory.products && Array.isArray(subcategory.products)) {
                            const foundProduct = subcategory.products.find(p => p._id === productId)
                            if (foundProduct) {
                                return {
                                    categoryName: category.name
                                }
                            }
                        }
                    }
                }
            }
            return null
        }
    },
    watch: {
        selectedCategoryId() {
            this.saveFilters()
        },
        selectedSubcategoryId() {
            this.saveFilters()
        }
    }
}
import "./Allproducts.css"
</script>

<style scoped></style>