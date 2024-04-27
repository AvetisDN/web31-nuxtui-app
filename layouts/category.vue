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
          <div class="flex flex-col gap-3">
            <h2>
              Price range (${{ store.getMinMaxPrice().min }} - ${{
                store.getMinMaxPrice().max
              }})
            </h2>
            <div class="grid gap-3 items-center grid-cols-8">
              <span>Min:</span>
              <URange
                v-model="min"
                :min="store.getMinMaxPrice().min"
                :max="max"
                class="col-span-5"
              />
              <span class="col-span-2"> ${{ min }} </span>

              <span>Max:</span>
              <URange
                v-model="max"
                :max="store.getMinMaxPrice().max"
                :min="min"
                class="col-span-5"
              />
              <span class="col-span-2"> ${{ max }} </span>
            </div>
            <div class="flex gap-4 my-4">
              <UButton
                label="Apply"
                @click="store.applyRangeFilter(min, max)"
              />
              <UButton
                variant="outline"
                label="Reset"
                @click="store.resetRangeFilter()"
              />
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <h2>Categories</h2>
            <UVerticalNavigation :links="links" />
          </div>
        </div>

        <template #footer> </template>
      </UCard>
    </USlideover>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const isOpen = ref(true);
const store = useCategoriesStore();
const { links } = storeToRefs(store);

const min = ref(store.getMinMaxPrice().min);
const max = ref(store.getMinMaxPrice().max);
</script>

<style></style>
