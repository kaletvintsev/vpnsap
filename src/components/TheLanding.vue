<script setup lang="ts">
import LandingAbout from './LandingAbout.vue'
import LandingFAQ from './LandingFAQ.vue'
import LandingGift from './LandingGift.vue'
import LandingPromo from './LandingPromo.vue'
import LandingConfidence from './LandingConfidence.vue'
import LandingFeatures from './LandingFeatures.vue'
import LandingHeader from './LandingHeader.vue'
import { useIsDesktop } from '@/composables/useIsDesktop'

const { isDesktop } = useIsDesktop();
</script>

<template>
  <LandingHeader v-if="isDesktop" />
  <main>
    <LandingPromo />
    <LandingConfidence />
    <LandingAbout id="about" />
    <LandingGift id="gift" />
    <LandingFeatures id="features" />
    <LandingFAQ id="faq" />
  </main>
</template>
