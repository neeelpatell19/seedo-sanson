<template>
    <ProductContext v-slot="{ products, loading, error }">
        <slot :products="products" :loading="loading" :error="error" />
    </ProductContext>
</template>

<script>
import ProductContext from './ProductContext/ProductContext.vue'

export default {
    name: 'WrapContext',
    components: {
        ProductContext
    }
}
</script>
