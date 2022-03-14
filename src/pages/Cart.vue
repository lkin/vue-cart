<script setup lang="ts">
import { ref, computed } from 'vue';
import CartCard from '../components/CartCard.vue';
import CartCardSkeleton from '../components/CartCardSkeleton.vue';
import { toCurrency } from '../shared/utils';
import { useCartStore } from '../store/cart';
import { useProductStore } from '../store/products';

import testing1 from '../components/testing1.vue'
import testing2 from '../components/testing2.vue'

import Bottom from '../components/Bottom.vue'
const productStore = useProductStore();
const cartStore = useCartStore();
const formattedCart = computed(() => cartStore.formattedCart);
const count = computed(() => cartStore.count)
const round = ref(1)
const currentTab = ref('testing1')
const tabs = {
  testing1,
  testing2
}
</script>

<template>
  <div class="p-4 max-w-4xl mx-auto">
    <div class="flex justify-between">
      <div class="btn-group p-2">
        <button class="btn btn-inactive"> 
          副次目標を選び直す
        </button>
      </div>
      <div class="btn-group p-2">
        <label for="my-modal-4" class="btn btn-secondary modal-button">リセット</label>
      </div>
    </div>

    <input type="checkbox" id="my-modal-4" class="modal-toggle">
    <label for="my-modal-4" class="modal cursor-pointer">
      <label class="modal-box" for="">
        <h3 class="text-lg font-bold">本当にリセットしますか？</h3>
        <p class="py-4">全てのポイントが失われます</p>
        <div class="flex justify-around">
          <button class="btn btn-active animate-pulse">リセット</button>
            <label for="my-modal-3" class="btn btn-inactive">
              キャンセル
            </label>
        </div>
      </label>
    </label>

    <!-- <KeepAlive>
      <component :is="tabs[currentTab]" class="tab" />
    </KeepAlive>

    <div class="flex">
      <div class="btn-group p-2">
        主要目標
      </div>
      <div class="btn-group p-2 flex-grow">      
        <input type="range" min="0" max="12" value="0" class="range" step="4">
        <div class="w-full flex justify-between text-xs px-2">
          <span></span>
          <span>4</span>
          <span>8</span>
          <span>12</span>
        </div>
      </div>
    </div> -->



    <div v-if="!productStore.loaded" class="space-y-4">
      <CartCardSkeleton v-for="n in 15" :key="n" />
    </div>
    <div v-else-if="!formattedCart.length">
      <h1 class="text-xl">Cart is empty.</h1>
    </div>
    <div v-else class="space-y-4">
      <CartCard
        v-for="(cartProduct, index) in formattedCart"
        :key="index"
        :cartProduct="cartProduct"
      />
      <div class="text-right text-2xl md:text-4xl">
        Total: {{ toCurrency(cartStore.total) }}
      </div>
    </div>
  </div>

  <div class="flex">
    <div class="btn-group justify-center p-2">
      <button
        v-for="(_, tab) in tabs"
        :key="tab"
        :class="['btn', { active: currentTab === tab }]"
        @click="currentTab = tab"
      >
        {{ tab }}
      </button>
      <button class="btn" v-if="round < 5" @click="round++">
        次へ
      </button>
      <button class="btn" v-else-if="round = 5">
        結果へ
      </button>
    </div>
  </div>


</template>
