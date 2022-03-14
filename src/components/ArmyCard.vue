<template>
    <div class="carousel-item w-1/2" a="/factions/{{ faction.name }}">

        <!-- <span v-text="name" a="#" @click="router.push({ name: 'faction', params: { name } })"></span> -->
            <img
                :src="image"
                alt="Card Image"
                class="w-full"
                @click="router.push({ name: 'faction', params: { name } })"
            />

        <!-- <div class="" >
            <h2 class="card-title">
                <router-link class="link link-hover" :to="`/product/${product.id}`">{{ product.title }}</router-link>
            </h2>
            <p>{{ toCurrency(product.price) }}</p>
            <div class="justify-end card-actions">
                <button class="btn btn-primary" @click="cartStore.add(product.id)">Add to Cart</button>
            </div>
        </div>-->
    </div>   
</template>

<script setup lang="ts">
    defineProps<{
        name,
        image
    }>();
</script>