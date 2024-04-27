<template>
  <div>
    <div class="flex justify-between gap-4 items-center">
      <h1 class="text-4xl font-black capitalize flex gap-1">
        {{ getCategoryData(id)?.name }}
        <span class="text-lg opacity-50 -translate-y-1">
          {{ productsFiltered.length }}
        </span>
      </h1>
      <USelect v-model="perPage" :options="perPageOptions" />
    </div>
    <div
      v-if="productsFiltered.length > 0"
      class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 xl:gap-8 py-6"
    >
      <ProductCard
        v-for="product in paginatedProducts"
        :key="product.id"
        :product="product"
      />
    </div>
    <UPagination
      :max="5"
      :page-count="perPage"
      :total="productsFiltered.length"
      v-model="page"
    />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "category",
});
const page = ref(1);
const perPageOptions = [5, 10, 15, 30];
const perPage = ref(perPageOptions[0]);

const store = useCategoriesStore();
const { productsFiltered } = storeToRefs(store);
const { getCategoryData, fetchProductsByCategory } = store;

const route = useRoute();
const { id } = route.params;

await useAsyncData("products", () => fetchProductsByCategory(id));

const paginatedProducts = computed(() => {
  return productsFiltered.value.slice(
    (page.value - 1) * perPage.value,
    perPage.value * page.value
  );
});

useSeoMeta({
  title: () => getCategoryData(id).name,
});
</script>

<style></style>
