<script setup lang="ts">
import AppButtons from './AppButtons.vue'
</script>

<template>
  <div ref="gift" class="section-gift container">
    <div class="gift-block">
      <duv class="subtitle">A gift you will appreciate</duv>
      <div class="gift-img">
        <img src="/src/assets/images/gift.png" alt="gift" />
      </div>
      <h2 class="title">3-Day Free trial</h2>
      <p class="description">
        VPN ASAP is truly an excellent service. You have 7 days to use all the possibilities 100%.
        Experience it for yourself at no cost by downloading it for all your devices.
      </p>
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
  @media only screen and (min-width: 993px) {
    padding: 100px 0;
  }
}

.gift-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: 0 24px;
  padding-top: 50px;
  padding-bottom: 32px;
  background-color: #18352b;
  background-image: linear-gradient(180deg, #18352b 0%, #152d23 100%);
  border-radius: 20px;

  @media only screen and (max-width: 992px) {
    text-align: center;
  }
  @media only screen and (min-width: 993px) {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0 36px;
    padding: 50px 0;
    padding-right: 70px;
  }
}

.gift-img {
  width: 300px;
  margin-bottom: -1.5em;

  @media only screen and (min-width: 993px) {
    grid-column: 1/2;
    grid-row: 1/6;
  }
}

.subtitle {
  margin-bottom: -1em;
  @media only screen and (min-width: 993px) {
    margin-bottom: 24px;
    text-align: left;
  }
}

.title {
  font-size: clamp(30px, 3.3em, 52px);
  line-height: 42px;
  margin-bottom: 30px;
  @media only screen and (min-width: 993px) {
    margin-bottom: 24px;
    text-align: left;
  }
}

.description {
  margin-bottom: 40px;
  color: rgba(255, 255, 255, 0.64);
  font-style: normal;
  font-weight: 500;
  line-height: 1.6;
  max-width: 480px;
  @media only screen and (max-width: 992px) {
    padding: 0 25px;
  }
}
</style>
