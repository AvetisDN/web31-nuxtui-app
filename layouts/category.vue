<template>
  <NuxtLayout name="default">
    <div class="py-4 flex">
      <UButton
        variant="outline"
        label="Catalog parameters"
        @click="isOpen = true"
      />
    </div>
    <slot />
    <USlideover v-model="isOpen">
      <UCard
        class="flex flex-col flex-1"
        :ui="{
          body: { base: 'flex-1' },
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <h2 class="text-xl font-bold">Catalog parameters</h2>
        </template>

        <div class="h-full flex flex-col gap-6">
          <UVerticalNavigation :links="links" />
        </div>

        <template #footer> </template>
      </UCard>
    </USlideover>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const isOpen = ref(false);
const store = useCategoriesStore();
const { categories, links } = storeToRefs(store);
</script>

<style></style>
