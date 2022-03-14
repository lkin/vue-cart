<template>
    <div class="flex flex-row justify-center p-6 space-x-6 object-contain">
        <select class="select select-secondary">
            <!-- <option disabled selected>軍勢を選ぶ</option> -->
            <option v-for="faction in factions">{{faction.name}}</option>
        </select>

<!-- https://jasonfavrod.com/vue-js-v-for-set-option-selected/ -->

        <button v-if="count == 3" class="btn btn-wide btn-primary animate-pulse  flex-shrink-0 flex-nowrap" @click="">
            次へ
        </button>
        <button v-else-if="count < 3" class="btn btn-wide btn-disabled flex-shrink-0 flex-nowrap" tabindex="-1" role="button" aria-disabled="true">
            副次目標をもう２つ選択して下さい
        </button>
        <!-- <button v-else-if="count == 2" class="btn btn-wide btn-disabled"  tabindex="-1" role="button" aria-disabled="true">
            副次目標をもう１つ選択せよ
        </button> -->
        <button v-else-if="count > 3" class="btn-disabled flex-shrink-0 flex-nowrap">
            副次目標は３つまでしか選択できません
        </button>
</div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useProductStore } from '../store/products';
const productStore = useProductStore();
const products = computed(() => productStore.list);
import { useCartStore } from "../store/cart"
const cartStore = useCartStore()
const count = computed(() => cartStore.count)
const factions = ref([
{name: 'Necrons'},
{name: 'Tyranids'},
{name: 'Astra Militarum'}
]);
</script>
