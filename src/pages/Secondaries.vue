<template>
  <SecondariesBottom />
  <div class="overflow-auto overflow-scroll max-w-full gap-4 flex flex-nowrap">
    <Lane v-for="kind in kinds" :title="kind.title" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Lane from '../components/Lane.vue';
  import SecondariesBottom from '../components/SecondariesBottom.vue';
  const kinds = ref([
    {title: 'Purge the Enemy'},
    {title: 'No Mercy, No Respite'},
    {title: 'Warpcraft'},
    {title: 'Shadow Operations'},
    {title: 'Battlefield Supremacy'}
  ]);
</script>