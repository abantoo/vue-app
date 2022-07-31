<template>
  <div class="relative w-screen">
    <DefaultHeader class="my-auto w-screen"></DefaultHeader>
    <main class="h-full">
    </main>
    <DefaultFooter class="absolute w-screen shadow-black" />
  </div>
</template>

<script setup lang="ts">
import DefaultHeader from "../components/Nav/header.vue";
import DefaultFooter from "../components/Footer/footer.vue";
</script>
