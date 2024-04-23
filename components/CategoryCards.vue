<template>
  <div
    class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 xl:gap-8"
  >
    <NuxtLink
      v-for="item in categories"
      :to="`/category/${item.id}`"
      :key="item.id"
      class="bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all"
    >
      <NuxtImg
        :src="item.image"
        :alt="item.name"
        class="w-full h-60 object-cover"
      />
      <h2 class="p-4 text-lg text-center font-semibold">{{ item.name }}</h2>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
defineProps(["categories"]);

// const getSlugFromName = (name) => name.toLowerCase().replace(" ", "-");
</script>

<style></style>
