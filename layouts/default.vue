<template>
  <div class="min-h-screen flex flex-col w-full bg-gray-200 dark:bg-gray-950">
    <AppHeader />
    <UContainer class="grow w-full py-4 md:py-5 xl:py-6">
      <slot />
    </UContainer>
    <AppFooter />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
