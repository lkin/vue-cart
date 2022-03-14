<template>
  <div class="">

    <!-- <div v-for="product in products>
        {{ product.category }}
    </div> -->
    <!-- <div class="form-control">
      <input type="text" placeholder="Search..." class="input input-ghost" :disabled="!productStore.loaded" v-model="input" />
    </div>

    <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-64 text-base-content overflow-y-scroll" style="max-height: 50vh;">
      <li v-for="product in searchResults" :key="product.id">
        <a href="#" @click.prevent="navigate(product.id)" v-text="product.title"></a>
      </li> 
    </ul> -->
    <h1 class="font-serif">{{ title }}</h1>
    <ProductCardSkeleton
      v-show="!productStore.loaded"
      v-for="n in 4"
      :key="n"
    /> 
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from "vue-router";
  import { computed, ref } from 'vue';
  import ProductCard from './ProductCard.vue';
  import ProductCardSkeleton from './ProductCardSkeleton.vue';
  import { useProductStore } from '../store/products';
  import type { Product } from '../store/products'
  import { useCartStore } from '../store/cart';
  const cartStore = useCartStore()
  const productStore = useProductStore();
  const products = computed(() => productStore.list);
  const router = useRouter()
  const input = ref('')
  const searchResults = computed(() => {
    if (!input.value || input.value.length < 2) return [];
      return productStore.list.filter(item => {
        return item.title.toLowerCase().includes(input.value.toLowerCase());
      });
    })
    const navigate = (id: number) => {
      input.value = ''
      router.push(`/product/${id}`)
    }
  import { toCurrency } from '../shared/utils'
  defineProps<{
      title,
      product: Product
  }>();
</script>