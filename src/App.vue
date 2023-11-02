<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <Header class="" />
  <RouterView class="template" />
</template>

<style scoped>
.template {
  position: relative;
}
</style>