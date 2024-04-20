<template>
  <div>
    <h1 class="text-6xl font-black text-center py-8">
      Welcome to the <span class="text-primary-500">Pink</span>
    </h1>
    <CategoryCards v-if="categories" :categories="categories" />
  </div>
</template>

<script lang="ts" setup>
const store = useCategoriesStore();
const { categories } = storeToRefs(store);
</script>

<style></style>
