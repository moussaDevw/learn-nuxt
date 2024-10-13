<template>
  <div>
    <h1>Event id {{ $route.params.id }}</h1>
  </div>
</template>

<script setup>
const nux = useNuxtApp();
console.log(nux);
</script>
