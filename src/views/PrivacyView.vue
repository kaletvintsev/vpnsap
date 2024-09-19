<script setup lang="ts">
import FooterElement from '@/components/FooterElement.vue'
import HeaderElement from '@/components/HeaderElement.vue'
import ThePrivacy from '@/components/ThePrivacy.vue'
import { useIsDesktop } from '@/composables/useIsDesktop'

const { isDesktop } = useIsDesktop()
</script>

<template>
  <HeaderElement v-if="isDesktop" />

  <ThePrivacy />
  <FooterElement :style="'green'" />
</template>
