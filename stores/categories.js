import { defineStore } from "pinia";

export const useCategoriesStore = defineStore("categories", () => {
  const categories = ref([]);
  const links = ref([]);

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
    return response;
  };

  return {
    categories,
    links,
    fetchCategories,
    getCategoryData,
    fetchProductsByCategory,
  };
});
