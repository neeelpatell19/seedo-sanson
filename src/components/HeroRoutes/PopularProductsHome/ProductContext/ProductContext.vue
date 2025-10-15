<template>
  <div>
    <slot
      :products="products"
      :categories="categories"
      :loading="loading"
      :error="error"
    ></slot>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "ProductContext",
  setup() {
    const products = ref([]);
    const categories = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const fetchProducts = async () => {
      loading.value = true;
      error.value = null;

            try {
                // console.log('Fetching products from API via proxy...')
                const response = await fetch('https://testapi.prepseed.com/seedo/getAllProducts')
                // console.log('Fetch response status:', response.status)
                if (!response.ok) {
                    throw new Error('Failed to fetch products')
                }
                const data = await response.json()
                // Expose categories as-is for navigation usage
                categories.value = Array.isArray(data?.categories) ? data.categories : []
                // Flatten products from categories -> subcategories -> products
                // Always prioritize products from subcategories when they exist
                const flattened = Array.isArray(categories.value)
                    ? categories.value.flatMap(cat => {
                        // Check if category has subcategories with products
                        const hasSubcategoriesWithProducts = Array.isArray(cat.subcategories) && 
                            cat.subcategories.some(sub => sub && Array.isArray(sub.products) && sub.products.length > 0)
                        
                        if (hasSubcategoriesWithProducts) {
                            // Always get products from subcategories when they exist
                            return Array.isArray(cat.subcategories) 
                                ? cat.subcategories.flatMap(sub => Array.isArray(sub.products) ? sub.products : [])
                                : []
                        } else {
                            // Get products directly from main category when no subcategories exist
                            return Array.isArray(cat.products) ? cat.products : []
                        }
                    })
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
      console.log("ProductContext mounted");
      fetchProducts();
    });

    return {
      products,
      categories,
      loading,
      error,
    };
  },
};
</script>
