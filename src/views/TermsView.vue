<script setup lang="ts">
import FooterElement from '@/components/FooterElement.vue'
import HeaderElement from '@/components/HeaderElement.vue'
import TheTerms from '@/components/TheTerms.vue'
import { useIsDesktop } from '@/composables/useIsDesktop'

const { isDesktop } = useIsDesktop()
</script>

<template>
  <HeaderElement v-if="isDesktop" />
  <TheTerms />
  <FooterElement :style="'green'" />
</template>

<style></style>
