<script setup lang="ts">
defineProps<{
  isOpen: boolean
}>()
</script>

<template>
  <svg
    width="16"
    height="10"
    viewBox="0 0 16 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="isOpen ? '' : 'closed'"
  >
    <path d="M15 8.3335L8.33333 1.66683L1.66667 8.33349" stroke="white" stroke-width="2" />
  </svg>
</template>

<style lang="scss" scoped>
svg {
  transition: transform 0.4s;
}
.closed {
  transform: rotate(-180deg);
}
</style>
