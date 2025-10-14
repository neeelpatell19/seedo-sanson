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
import { getCurrentConfig } from "../../../../config/environment.js";

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
        // Get environment-specific configuration
        const config = getCurrentConfig();
        const apiUrl = `${config.apiBaseUrl}/seedo/getAllProducts`;
        
        console.log('Environment:', import.meta.env.DEV ? 'Development' : 'Production');
        console.log('Fetching products from:', apiUrl);
        console.log('Using token:', config.apiToken ? 'Yes' : 'No');
        
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            ...(config.apiToken && { Authorization: `Bearer ${config.apiToken}` }),
          },
          mode: "cors",
          credentials: "include",
        });
        // console.log('Fetch response status:', response.status)
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        // Expose categories as-is for navigation usage
        categories.value = Array.isArray(data?.categories)
          ? data.categories
          : [];
        // Flatten products from categories -> subcategories -> products
        const flattened = Array.isArray(categories.value)
          ? categories.value
              .flatMap((cat) =>
                Array.isArray(cat.subcategories) ? cat.subcategories : []
              )
              .flatMap((sub) =>
                Array.isArray(sub.products) ? sub.products : []
              )
          : [];
        products.value = flattened;
        // console.log('Product data fetched (flattened products):', flattened)
      } catch (err) {
        error.value = err.message;
        console.error("Error fetching products:", err);
      } finally {
        loading.value = false;
      }
    };

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
