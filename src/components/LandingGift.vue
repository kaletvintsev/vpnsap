<script setup lang="ts">
import AppButtons from './AppButtons.vue'
</script>

<template>
  <div ref="gift" class="section-gift container">
    <div class="gift-block">
      <h2 class="subtitle">A gift you will appreciate</h2>
      <div class="gift-img">
        <img src="/src/assets/images/gift.png" alt="gift" />
      </div>
      <div class="title">3-Day Free trial</div>
      <div class="description">
        VPN ASAP is truly an excellent service. You have 7 days to use all the possibilities 100%.
        Experience it for yourself at no cost by downloading it for all your devices.
      </div>
      <AppButtons />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section-gift {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  color: white;
}

.gift-block {
  max-width: 1000px;
  margin: 0 24px;
  padding-top: 50px ;
  padding-bottom: 32px;
  background: linear-gradient(180deg, #18352b 0%, #152d23 100%);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.gift-img {
  width: 300px;
}
//   .sub-title {
//     text-transform: uppercase;
//     color: rgba(255, 255, 255, 0.64);
//     font-style: normal;
//   }

//   .title {
//     color: #ffffff;
//     font-style: normal;
//     font-weight: 700;
//     font-size: 32px;
//     margin-top: 20px;
//   }

//   .description {
//     margin-top: 40px;
//     color: rgba(255, 255, 255, 0.64);
//     font-style: normal;
//     font-weight: 400;
//     line-height: 1.6;
//   }
// }

//   @media only screen and (max-width: 992px) {
//     .section-gift {
//       padding: 20px 0 20px 0;

//       .gift-block {
//         max-width: 100%;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         flex-flow: column;

//         .sub-title-mobile {
//           display: block;
//         }

//         .gift-img {
//           width: auto;

//           img {
//             width: 300px;
//           }
//         }

//         .gift-description {
//           width: 100%;
//           padding: 0 50px 50px 50px;
//           display: flex;
//           flex-flow: column;
//           margin-left: 0;
//           text-align: center;

//           .sub-title {
//             display: none;
//           }
//         }
//       }
//     }
//   }
// }

// @media only screen and (max-width: 480px) {
//   .section-gift {
//     .gift-block {
//       .gift-description {
//         padding: 0 20px 50px 20px;
//       }
//     }
//   }
// }
</style>
