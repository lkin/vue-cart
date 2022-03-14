<template>
    <div class="navbar p-2 mt-0 fixed sticky w-full z-50 top-0 bg-neutral text-neutral-content">
        <div class="navbar-start">

            <!-- <a class="btn btn-ghost text-xl font-sans">
                
            </a> -->

            <div class="dropdown">
                <label class="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Homepage</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>About</a></li>
                </ul>
            </div>
        </div>
        <div class="navbar-center">
            <ul class="steps steps-horizontal">
                <li data-content="✓" class="step step-primary">
                    <router-link to="/" v-text="step1" />
                </li>
                <li data-content="2" class="step" v-if="count == 0" v-html="step2" />
                <li data-content="?" class="step" v-else-if="count == 1 || count == 2" v-html="step2" />
                <li data-content="✓" class="step step-primary" v-else-if="count == 3" v-html="step2" />
                <li data-content="!" class="step step-error" v-else v-html="step2" />
                <li class="step">
                    <router-link to="/cart" v-text="step3" />
                </li>   
                <li class="step">
                    <router-link to="/end" v-text="step4" />
                </li>
            </ul> 
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useCartStore } from "../store/cart"
import Search from './Search.vue'
const fukuji2 = "副次目標"
const step1 = "軍勢"
const step2 = "<a href='/pick'>副次目標</a>"
const step3 = "採点"
const step4 = "計算"
const cartStore = useCartStore()

const count = computed(() => cartStore.count)
</script>
