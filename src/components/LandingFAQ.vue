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
<style lang="scss" scoped>
.section-faq {
  display: flex;
  justify-content: center;
  background: #092620;
  padding: 50px 0 50px 0;
  color: #ffffff;


  .faq-block {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    flex-flow: column;

    .sub-title {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.64);
      text-align: center;
    }

    .title {
      margin-top: 20px;
    }

    .faq-items-block {
      display: flex;
      justify-content: start;
      flex-flow: column;
      margin-top: 20px;
      width: 100%;

      .faq-item {
        display: flex;
        justify-content: start;
        flex-flow: column;
        margin-bottom: 10px;
        padding: 25px;
        background: rgba(0, 0, 0, 0.16);
        border-radius: 20px;
        cursor: pointer;

        &:last-child {
          margin-bottom: 0;
        }

        .item-header {
          display: flex;
          justify-content: space-between;
          flex-flow: row;

          .item-title {
            color: #ffffff;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
          }

          .item-arrow-top {
            width: 18px;

            img {
              width: 18px;
            }
          }

          .item-arrow-bottom {
            width: 18px;
            opacity: 0.4;
            img {
              width: 18px;
            }
          }
        }
        .item-faq-description {
          margin-top: 20px;
          color: rgba(255, 255, 255, 0.64);
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 1.8;
        }
      }
    }
  }
}
</style>
