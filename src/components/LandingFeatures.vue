<script setup lang="ts">
import LandingFeaturesCard from './LandingFeaturesCard.vue'

interface Feature {
  imgName: string
  title: string
  description: string
}
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
  <section ref="confidence container" class="section-confidence">
    <div class="sub-title">indispensable in daily SCENARIOS</div>
    <h2 class="title">Confidence in <br />Internet Security</h2>
    <ul class="features">
      <LandingFeaturesCard
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

.sub-title {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.57;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.64);
  margin-bottom: 30px;
  max-width: 60vw;
}

.title {
  font-size: 40px;
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: -0.04em;
  margin-bottom: 50px;
}

.features {
  list-style: none;
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

// .description-block {
//   display: flex;
//   justify-content: start;
//   flex-wrap: wrap;
//   margin-top: 40px;

//   .description-item {
//     display: flex;
//     flex: 0 0 33.33%;
//     max-width: 33.33%;
//     justify-content: space-around;
//     flex-flow: column;
//     align-items: center;
//     padding-right: 80px;

//     &:last-child {
//       padding-right: 0;
//     }

//     img {
//       width: 236px;
//       height: 262px;
//     }

//     .item-title {
//       font-style: normal;
//       font-weight: 500;
//       font-size: 32px;
//       color: #eaaf03;
//       text-shadow: 0 2.17263px 1.51486px rgba(63, 221, 37, 0.01438);
//       text-align: center;
//     }

//     .item-description {
//       color: rgba(255, 255, 255, 0.64);
//       font-style: normal;
//       font-weight: 400;
//       font-size: 14px;
//       text-align: center;
//       line-height: 1.4;
//       margin-top: 20px;
//     }
//   }
// }

// @media only screen and (max-width: 992px) {
//   .section-confidence {
//     justify-content: center;
//     align-items: center;
//     flex-flow: column;

//     .confidence-block {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       width: 100%;

//       .description-block {
//         display: flex;
//         justify-content: center;
//         flex-wrap: unset;
//         flex-flow: column;
//         margin-top: 40px;
//         width: 100%;

//         .description-item {
//           display: flex;
//           flex: 0 0 100%;
//           max-width: 100%;
//           justify-content: center;
//           flex-flow: column;
//           align-items: center;
//           padding-right: 0;
//         }
//       }
//     }
//   }
// }
</style>
