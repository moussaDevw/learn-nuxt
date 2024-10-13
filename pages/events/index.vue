<script setup lang="ts">
const counter = useCounter();
</script>

<template>
  <div>
    Counter: {{ counter }}
    <Alert />
    <h1>Events</h1>
    <img src="@/assets/test-1.jpg" alt="test" />
  </div>
</template>
