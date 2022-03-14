<script setup lang="ts">
  import { computed, onMounted } from 'vue';
  import { usePersistCart } from './composables/usePersistCart';
  import { useCartStore } from './store/cart';
  import { useProductStore } from './store/products';
  import Nav from './components/Steps.vue';
  import SideBar from "./components/Sidebar.vue";
  const productStore = useProductStore();
  const cartStore = useCartStore();
  // const { t, availableLocales, locale } = useI18n()
  // const toggleLocales = () => {
  //   // change to some real logic
  //   const locales = $i18n.availableLocales
  //   locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  // }
  productStore.fetchAll();
  // productStore.fetchActions();
  usePersistCart();

  const count = computed(() => cartStore.count);
</script>

<template>
  
  <div class="container mx-auto min-w-screen min-h-screen bg-gray-100 px-5 pt-5 pb-24">
    <Nav />
    <router-view></router-view>
  </div>
</template>