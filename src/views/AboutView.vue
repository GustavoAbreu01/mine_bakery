<script setup lang="ts">
import cat from '../assets/img/unnamed.gif'
</script>

<template>
  <div>
    <img class="cat" :src="cat" />
  </div>
</template>

<style>
.cat {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
}
</style>
