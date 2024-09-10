<script setup lang="ts">
// function toggleItem(index) {
//   faqItems.forEach((item, i) => {
//     if (i === index) {
//       item.expanded = !item.expanded
//     } else {
//       item.expanded = false
//     }
//   })
// }
</script>

<template>
  <div ref="faq" class="section-faq">
    <div class="container">
      <div class="faq-block">
        <h2 class="sub-title">FREQUENTLY ASKED QUESTIONS</h2>
        <div class="title">Looking for answers?<br />You're in the right place!</div>
        <!-- <div v-for="(item, index) in faqItems" :key="index" class="faq-items-block">
            <div @click="toggleItem(index)" class="faq-item">
              <div class="item-header">
                <div class="item-title">{{ item.question }}</div>
                <div
                  class="item-title"
                  :class="{ 'item-arrow-top': item.expanded, 'item-arrow-bottom': !item.expanded }"
                >
                  <img v-if="!item.expanded" src="/src/assets/images/arrow-bottom.png" alt="arrow-bottom" />
                  <img v-if="item.expanded" src="/src/assets/images/arrow-top.png" alt="arrow-top" />
                </div>
              </div>
              <div v-if="item.expanded" class="item-faq-description" v-html="item.answer"></div>
            </div>
          </div> -->
      </div>
    </div>
  </div>
</template>
