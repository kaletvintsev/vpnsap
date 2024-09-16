<script setup lang="ts">
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <TheHeader class="header" />
  <RouterView />
  <TheFooter />
</template>

<style scoped>
@media only screen and (max-width: 992px) {
  .header {
    display: none;
  }
}
</style>
