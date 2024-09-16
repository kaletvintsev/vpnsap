<script setup lang="ts">
import type { Feature } from '@/interfaces';
import LandingConfidenceCard from './LandingConfidenceCard.vue';

const features: Feature[] = [
  {
    imgName: 'speed.png',
    title: 'Faster than fast',
    description: 'Top-notch servers with super stable connection and speeds<br/> up to 10 Gbps'
  },
  {
    imgName: 'encryption.png',
    title: 'Totally encrypted',
    description:
      'X25519 and AES encryption standards make your online activity unrecognizable to even the most prying eyes.'
  },
  {
    imgName: 'clean-story.png',
    title: 'Your story always clean',
    description:
      'Auto-delete all traces you can make <br/>every 10 minutes. No tracking, no identifiers, no data storage'
  },
  {
    imgName: 'messenger.png',
    title: 'Private messenger',
    description:
      'Talk freely without worry. Messages are secured with X25519 & AES encryption and a strong VPN connection'
  }
]
</script>

<template>
  <section class="section-confidence container">
    <div class="subtitle">indispensable in daily SCENARIOS</div>
    <h2 class="title">Confidence in <br />Internet Security</h2>
    <ul class="features">
      <LandingConfidenceCard
        class="feature"
        v-for="feature of features"
        :key="feature.title"
        :feature="feature"
      />
    </ul>
  </section>
</template>
<style lang="scss" scoped>
.section-confidence {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(10, 22, 20, 1);
  padding: 60px 0;
  color: rgba(255, 255, 255, 1);
  text-align: center;
}

.subtitle {
  margin-bottom: 30px;
  max-width: 60vw;
}

.title {
  // font-size: 40px;
  // font-weight: 700;
  // line-height: 1.12;
  // letter-spacing: -0.04em;
  margin-bottom: 50px;
}

.features {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px 20px;
  margin-bottom: 10px;
  @media only screen and (min-width: 993px) {
    margin-bottom: 50px;
  }
}
</style>
