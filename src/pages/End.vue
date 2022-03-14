<style>
@import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;800&display=swap');
body {
    font-family: 'Poppins', sans-serif;
}
.hover\:w-full:hover {
    width: 100%;
}
.group:hover .group-hover\:w-full {
    width: 100%;
}
.group:hover .group-hover\:inline-block {
    display: inline-block;
}
.group:hover .group-hover\:flex-grow {
    flex-grow: 1;
}
</style>

<template>
  <!-- <div class="flex nowrap">
    <button class="btn gap-2">
      ツイート！
    </button>
  </div> -->

  <div class="w-full max-w-md mx-auto bottom-0">

    inside bubble

    <div class="p-4 bg-white shadow-lg rounded-2xl mb-5 form-control flex-col">
      <span class="p-4">を使っていただきありがとうございました！よろしければ対戦相手のスコアを記入の上、ツイッターに結果を投稿しませんか？</span>
      <div class="flex p-4">
        <span class="w-1/3">
          対戦相手のスコア
        </span>

        <input type="range" min="0" max="90" value="0" class="range w-2/3">
      </div>
      <div class="flex p-4">
        <select class="select select-bordered w-2/3 px-4">
          <option disabled selected>対戦相手の軍勢</option>
          <option v-for="faction in factions">{{faction.name}}</option>
        </select>
        <button class="btn gap-2 w-1/3 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          ツイート
        </button>
      </div>
    </div>

    <!-- <button class="btn btn-active"> 
          リセット
    </button>
    </div>
    </div> -->

    <!-- <div class="px-7 bg-white shadow-lg rounded-2xl mb-5"> -->
    <!-- <div class="flex">
        <div class="btn-group justify-center p-2">
            <button class="btn"> 
                軍勢へ戻る
            </button>
        </div>
        <div class="flex-nowrap btn-group justify-center p-2">
            <button class="btn">１</button>
            <button class="btn btn-active" >2</button>
            <button class="btn">3</button>
            <button class="btn">4</button>
            <button class="btn">5</button>
            <button class="btn" v-if="round < 5" @click="round++">
            次へ
            </button>
            <button class="btn" v-else-if="round = 5">
            結果へ
            </button>
        </div> -->
    <!-- </div> -->

    <!-- https://tailwindcomponents.com/component/bottom-navbar-ui-design -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ArmyCard from '../components/ArmyCard.vue';
import ArmyCardSkeleton from '../components/ArmyCardSkeleton.vue';
import { useProductStore } from '../store/products';

const productStore = useProductStore();

const products = computed(() => productStore.list);
const categories = computed (() => productStore.categories);

const factions = ref([
{name: 'Necrons', image: "https://static.wikia.nocookie.net/warhammer40k/images/6/65/Necron_Immortal.png"},
{name: 'Tyranids'}
]);
</script>
