<template>
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
.page-enter-from {
  @apply translate-x-24;
}
.page-leave-to {
  @apply -translate-x-24;
}
</style>
