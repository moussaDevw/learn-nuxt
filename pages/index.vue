<script setup lang="ts">
const counter = useCounter();
const store = useCounterStore();
useHead({
  title: "J'essaye de voir le Seo",
  meta: [
    {
      name: "description",
      content: "Je suis seo",
    },
  ],
});
const { data: products } = await useFetch("/api/products", {
  transform: (_products) => _products.data,
});
console.log(products);
</script>

<template>
  <div>
    {{ products }}
    Counter: {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>
