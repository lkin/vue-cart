<template>
  <!-- 1
  <router-link :to="{ name: 'factions', params: { faction: 'faction.name' }}" />

  2
  <div v-for="faction in factions">
  User
{{ faction.name }}
  </div> -->

  <div class=" max-w-md mx-auto top-0 p-8">
        <!-- <div class="px-7 bg-white shadow-lg rounded-2xl mb-5"> -->
            <div class="flex font-serif">
                Secondariesへようこそ
            </div>
        <!-- </div> -->

        <!-- https://tailwindcomponents.com/component/bottom-navbar-ui-design -->
    

  </div>

  <div class="carousel rounded-box w-full">
    <ArmyCardSkeleton
      v-show="!productStore.loaded"
      v-for="n in 15"
      :key="n"
    />
    
    <ArmyCard class="carousel-item w-1/2"
      v-for="faction in factions"
      :name="faction.name"
      :image="faction.image"
    />
    <!-- <div v-for="faction in factions" class="carousel-item w-1/2">
      {{  faction.name }}
      <img src="../assets/factions/necrons.webp">
    </div> -->
    <!-- <div class="carousel-item w-1/2">
      <img src="https://api.lorem.space/image/game?w=256&h=400&hash=8B7BCDC2" class="w-full">
    </div> 
    <div class="carousel-item w-1/2">
      <img src="https://api.lorem.space/image/game?w=256&h=400&hash=500B67FB" class="w-full">
    </div> 
    <div class="carousel-item w-1/2">
      <img src="https://api.lorem.space/image/game?w=256&h=400&hash=A89D0DE6" class="w-full">
    </div> 
    <div class="carousel-item w-1/2">
      <img src="https://api.lorem.space/image/game?w=256&h=400&hash=225E6693" class="w-full">
    </div> 
    <div class="carousel-item w-1/2">
      <img src="https://api.lorem.space/image/game?w=256&h=400&hash=9D9539E7" class="w-full">
    </div> 
    <div class="carousel-item w-1/2">
      <img src="https://api.lorem.space/image/game?w=256&h=400&hash=BDC01094" class="w-full">
    </div> 
    <div class="carousel-item w-1/2">
      <img src="https://api.lorem.space/image/game?w=256&h=400&hash=7F5AE56A" class="w-full">
    </div> -->
  </div>


  <!-- <Bottom /> -->
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ArmyCard from '../components/ArmyCard.vue';
import ArmyCardSkeleton from '../components/ArmyCardSkeleton.vue';
import { useProductStore } from '../store/products';
import Bottom from '../components/Bottom.vue';

const productStore = useProductStore();

const products = computed(() => productStore.list);
const categories = computed (() => productStore.categories);

const factions = ref([
  {name: 'Necrons', image: "https://static.wikia.nocookie.net/warhammer40k/images/2/29/The_Necrons_Paul_Dainton.jpg", image2: "https://static.wikia.nocookie.net/warhammer40k/images/6/65/Necron_Immortal.png"},
  {name: 'Tyranids', image: "https://static.wikia.nocookie.net/warhammer40k/images/e/e1/Assualt.png"},
  {name: 'Tyranids'},
  {name: 'Tyranids'},
  {name: 'Tyranids'},
  {name: 'Tyranids'},
  {name: 'Tyranids'},
  {name: 'Tyranids'},
  {name: 'Tyranids'},
]);
</script>
