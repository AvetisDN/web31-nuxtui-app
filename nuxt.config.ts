// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image", "@pinia/nuxt", "@nuxtjs/seo"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  site: {
    url: "http://localhost:3000/",
    name: "Pink Store",
    description: "Welcome to PINK STORE!",
    defaultLocale: "en", // not needed if you have @nuxtjs/i18n installed
  },
});
