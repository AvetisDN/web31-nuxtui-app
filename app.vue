<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
.page-enter-active,
.page-leave-active {
  @apply transition-all duration-500;
}
.page-enter-from,
.page-leave-to {
  @apply opacity-0 blur-sm;
}
</style>

<script setup>
const { fetchCategories } = useCategoriesStore();

fetchCategories();
</script>
