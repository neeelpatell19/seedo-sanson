<template>
    <div>
        <slot :products="products" :loading="loading" :error="error"></slot>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
    name: 'ProductContext',
    setup() {
        const products = ref([])
        const loading = ref(false)
        const error = ref(null)

        const fetchProducts = async () => {
            loading.value = true
            error.value = null

            try {
                // console.log('Fetching products from API via proxy...')
                const response = await fetch('https://testapi.prepseed.com/seedo/getAllProducts')
                // console.log('Fetch response status:', response.status)
                if (!response.ok) {
                    throw new Error('Failed to fetch products')
                }
                const data = await response.json()
                // Flatten products from categories -> subcategories -> products
                const flattened = Array.isArray(data?.categories)
                    ? data.categories
                        .flatMap(cat => Array.isArray(cat.subcategories) ? cat.subcategories : [])
                        .flatMap(sub => Array.isArray(sub.products) ? sub.products : [])
                    : []
                products.value = flattened
                // console.log('Product data fetched (flattened products):', flattened)
            } catch (err) {
                error.value = err.message
                console.error('Error fetching products:', err)
            } finally {
                loading.value = false
            }
        }

        onMounted(() => {
            console.log('ProductContext mounted')
            fetchProducts()
        })

        return {
            products,
            loading,
            error
        }
    }
}
</script>
