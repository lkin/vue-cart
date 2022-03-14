<template>
    <div>
    formattedCard: {{formattedCart}}
      Count: {{count}}<br>
      Round: {{round}}
      currentTab: {{currentTab}}
      <div class="demo">
      <!-- <button
        v-for="(_, tab) in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab"
      >
        {{ tab }}
      </button> -->

      <KeepAlive>
        <component :is="tabs[currentTab]" class="tab"></component>
      </KeepAlive>
    </div>



    <div class="flex">
      <div class="btn-group p-2">
        <button class="btn btn-active"> 
              軍勢へ戻る
        </button>
      </div>
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


    <div class="flex">
      <div class="btn-group p-2">
        <button class="btn btn-active"> 
              軍勢へ戻る
        </button>
      </div>
      <div class="btn-group justify-center p-2">
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
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useCartStore } from "../store/cart"
const cartStore = useCartStore()
const count = computed(() => cartStore.count)
const productStore = useProductStore();
const round = ref(1)
const currentTab = ref('testing1')
const tabs = {
  testing1,
  testing2
}
</script>
