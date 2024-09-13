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
  <div @click="isOpen = !isOpen" class="faq-item" :class="{ 'faq-item--open': isOpen }">
    <div class="item-header">
      <div class="item-title">{{ question.question }}</div>
      <IconArrow :is-open="isOpen" :class="{ 'arrow--closed': !isOpen }" />
    </div>
    <Transition>
      <div v-show="isOpen" class="item-faq-description" v-html="question.answer"></div>
    </Transition>
  </div>
</template>
<style lang="scss" scoped>
.faq-item {
  display: flex;
  justify-content: start;
  flex-flow: column;
  padding: 16px 20px;
  border-radius: 20px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.32);
  cursor: pointer;
  max-height: 10em;
  transition: max-height 0.4s;

  &:last-child {
    margin-bottom: 0;
  }

  &--open {
    max-height: 800em;
  }
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-title {
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.04em;
}

.arrow--closed {
  opacity: 0.4;
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
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
