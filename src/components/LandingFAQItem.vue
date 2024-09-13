<script setup lang="ts">
import type { FAQ } from '@/interfaces'
import { ref } from 'vue'
import IconArrow from './icons/IconArrow.vue'

defineProps<{
  question: FAQ
}>()
const isOpen = ref(false)
</script>

<template>
  <div @click="isOpen = !isOpen" class="faq-item">
    <div class="item-header">
      <div class="item-title">{{ question.question }}</div>
      <IconArrow :is-open="isOpen" class="arrow" :class="{ 'arrow--closed': !isOpen }" />
    </div>
    <Transition>
      <div v-show="isOpen" class="item-faq-description" v-html="question.answer"></div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.faq-item {
  display: flex;
  flex-flow: column;
  padding: 16px 20px;
  border-radius: 20px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.32);
  cursor: pointer;
  height: min-content;

  &:last-child {
    margin-bottom: 0;
  }
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}
.item-title {
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.04em;
}

.arrow {
  min-width: 18px;
  &--closed {
    opacity: 0.4;
  }
}

.item-faq-description {
  color: rgba(255, 255, 255, 0.64);
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.02em;
  padding-top: 16px;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.8s ease;
  max-height: 999px;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  max-height: 0;
  transition: all 0.4s ease;
}
</style>
