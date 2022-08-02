<template>
  <div class="relative w-screen min-h-screen">
    <DefaultHeader class="my-auto w-screen"></DefaultHeader>
    <LandingPage class="my-auto" />
    <DefaultFooter class="absolute bottom-0 w-screen shadow-black" />
  </div>
</template>

<script setup lang="ts">
import DefaultHeader from "../components/Nav/header.vue";
import DefaultFooter from "../components/Footer/footer.vue";
import LandingPage from "./common/LandingPage.vue";
</script>
