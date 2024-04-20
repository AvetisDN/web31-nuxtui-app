import { defineStore } from "pinia";

export const useCategoriesStore = defineStore("categories", () => {
  const categories = ref([]);
  const links = ref([]);

  const fetchCategories = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/categories");
    const json = await response.json();
    categories.value = json;
    links.value = json.map((item) => ({
      label: item.name,
      to: `/category/${item.id}`,
    }));
  };

  return { categories, links, fetchCategories };
});
