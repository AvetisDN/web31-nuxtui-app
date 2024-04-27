import { defineStore } from "pinia";

export const useCategoriesStore = defineStore("categories", () => {
  const categories = ref([]);
  const products = ref([]);
  const productsFiltered = ref([]);
  const links = ref([]);
  const priceMin = ref(0);
  const priceMax = ref(0);

  const fetchCategories = async () => {
    const response = await $fetch("https://api.escuelajs.co/api/v1/categories");
    categories.value = response;
    links.value = response.map((item) => ({
      label: item.name,
      to: `/category/${item.id}`,
    }));
  };

  const getCategoryData = (id) => {
    const tmp = categories.value.find((item) => item.id == id);
    return tmp;
  };

  const fetchProductsByCategory = async (id) => {
    const response = await $fetch(
      `https://api.escuelajs.co/api/v1/products/?categoryId=${id}`
    );
    products.value = response;
    productsFiltered.value = response;
    let min = products.value[0].price;
    let max = products.value[0].price;
    products.value.forEach((p) => {
      min = p.price < min ? p.price : min;
      max = p.price > max ? p.price : max;
    });
    priceMin.value = min;
    priceMax.value = max;
  };

  const getMinMaxPrice = () => {
    return {
      min: priceMin.value,
      max: priceMax.value,
    };
  };

  const applyRangeFilter = (min, max) => {
    productsFiltered.value = products.value.filter(
      (p) => p.price >= min && p.price <= max
    );
  };
  const resetRangeFilter = () => {
    productsFiltered.value = products.value;
  };

  return {
    categories,
    productsFiltered,
    links,
    getMinMaxPrice,
    fetchCategories,
    getCategoryData,
    fetchProductsByCategory,
    applyRangeFilter,
    resetRangeFilter,
  };
});
