<template>
  <div>
    <UHorizontalNavigation :links="links" />
  </div>
</template>

<script lang="ts" setup>
const links = [
  {
    label: "Home",
    icon: "i-heroicons-home",
    to: "/",
  },
  {
    label: "Payment&Shipping",
    icon: "i-heroicons-currency-dollar",
    to: "/payment-shipping",
  },
  {
    label: "Contact",
    icon: "i-heroicons-phone",
    to: "/contact",
  },
];
</script>

<style></style>
