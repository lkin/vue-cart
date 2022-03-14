<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { usePersistCart } from './composables/usePersistCart';
import { useCartStore } from './store/cart';
import { useProductStore } from './store/products';
import Nav from './components/Steps.vue';
import SideBar from "./components/Sidebar.vue";
const productStore = useProductStore();
const cartStore = useCartStore();

productStore.fetchAll();
// productStore.fetchActions();
usePersistCart();

const count = computed(() => cartStore.count);
</script>

<template>
  <div class="h-screen w-full drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle">
    <div class="min-h-screen drawer-content flex flex-col items-center">


      //Navbar
      <div class="navbar w-full mt-0 p-2 z-10 top-0 fixed shadow-xl bg-neutral bg-base-100 text-neutral-content">
      
        <span>Secondaries</span>
        
        <Nav />

        <div class="flex-none hidden lg:block">
          <SideBar />
        </div>


        <div class="navbar-end flex:none lg:hidden">
          <label for="my-drawer-4" class="btn btn-primary drawer-button">
            Open drawer
          </label>
          <label for="my-drawer-4" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div>
      
      </div>

      <!-- <router-view></router-view> -->

    </div>
    <div class="drawer-side">
        <label for="my-drawer-4" class="drawer-overlay">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
        <SideBar/>
    </div>
  </div>
</template>