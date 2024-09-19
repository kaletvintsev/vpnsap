<script setup lang="ts">
import FooterElement from '@/components/FooterElement.vue'
import TheLanding from '../components/TheLanding.vue'
import { useIsDesktop } from '@/composables/useIsDesktop'
import LandingHeader from '@/components/LandingHeader.vue'

const { isDesktop } = useIsDesktop()
</script>

<template>
  <LandingHeader v-if="isDesktop" />
  <main>
    <TheLanding />
  </main>
  <FooterElement />
</template>
