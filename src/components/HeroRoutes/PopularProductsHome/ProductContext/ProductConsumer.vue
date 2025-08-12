<template>
  <div class="product-consumer">
    <h3>Product Consumer Component</h3>
    
    <!-- Use the context -->
    <ProductContext v-slot="{ products, loading, error }">
      <div class="consumer-content">
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Error: {{ error }}</div>
        <div v-else>
          <p>Total Products: {{ products.length }}</p>
          <div class="product-list">
            <div 
              v-for="(product, index) in products.slice(0, 3)" 
              :key="index"
              class="product-item"
            >
              <strong>{{ product.name || product.title }}</strong>
              <span>${{ product.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </ProductContext>
  </div>
</template>

<script>
import ProductContext from './ProductContext.vue'

export default {
  name: 'ProductConsumer',
  components: {
    ProductContext
  }
}
</script>

<style scoped>
.product-consumer {
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #f9f9f9;
}

.consumer-content {
  margin-top: 10px;
}

.product-list {
  margin-top: 10px;
}

.product-item {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  margin: 5px 0;
  background: white;
  border-radius: 4px;
  border: 1px solid #ddd;
}
</style> 