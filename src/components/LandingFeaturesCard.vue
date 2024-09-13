<script setup lang="ts">
import type { Feature } from '@/interfaces';
import { computed } from 'vue';


const props = defineProps<{
  feature: Feature
}>()

let imgURL = computed(() => `/src/assets/images/features/${props.feature.imgName}`)
</script>

<template>
  <li class="feature">
    <img class="image" :src="imgURL" :alt="feature.title">
    <h3 class="feature-title">{{ feature.title }}</h3>
    <p class="feature-description" :innerHTML="feature.description"></p>
  </li>
</template>
<style lang="scss" scoped>
.feature {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 32px 20px;

  max-width: 325px;
  min-height: 484px;
  border-radius: 20px;

  background-color: #222819;
  background-image: linear-gradient(180deg, #222819 0%, #0f201d 100%);
}

.image {
  margin-bottom: -100px;
}

.feature-title {
  color: rgba(234, 175, 3, 1);
  font-size: 32px;
  font-weight: 500;
  line-height: 38px;
  letter-spacing: -0.02em;
  max-width: 189px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.feature-description {
  color: rgba(255, 255, 255, 0.64);
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -2%;
}
</style>
