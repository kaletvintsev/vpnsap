<script setup lang="ts">
import AppButtons from './AppButtons.vue'
</script>

<template>
  <div class="first-block">
    <div class="container">
      <div class="mobile-logo">
        <img src="/src/assets/images/logo-mobile.png" alt="ASAP VPN" />
      </div>
      <div class="image-wrapper"></div>

      <div class="description-block">
        <h1 class="promo-title">
          Surf fast.<br />
          Talk secure.<br />
          Stay anonymous.
        </h1>
        <p class="text-description">
          Get an&nbsp;ultra-fast VPN and secure messenger in&nbsp;one app. Your online activity will
          be completely hidden thanks to&nbsp;top-notch X25519&nbsp;&amp; AES encryption with
          rock-solid connections up&nbsp;to&nbsp;10&nbsp;Gbps.
        </p>
        <AppButtons />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.first-block {
  background-size: cover;
  overflow: hidden;
  background:
    url('/src/assets/images/world-map.png') no-repeat center -140px,
    linear-gradient(315deg, #d0b336 0%, #f4d66c 100%);
  padding-top: 60px;
  color: rgba(10, 22, 20, 1);

  @media screen and (min-width: 993px) {
    margin-top: Calc(var(--header-height) * -1);
    padding-top: var(--header-height);
    background:
    url('/src/assets/images/world-map.png') no-repeat center 60px,
    linear-gradient(315deg, #d0b336 0%, #f4d66c 100%);
  }
}

.container {
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  @media screen and (min-width: 993px) {
    flex-direction: row-reverse;
    gap: 2em;
    justify-content: space-between;
  }
}

.mobile-logo {
  display: none;
  width: Min(220px, 80vw);
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: 20px;
  img {
    object-fit: cover;
  }
  @media only screen and (max-width: 992px) {
    display: flex;
  }
}
.image-wrapper {
  display: flex;
  margin: auto;
  background-image: url('/src/assets/images/promo-phones.png');
  width: 100%;
  height: 700px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 3;
  transform: scale(1.35);
  @media only screen and (max-width: 992px) {
    margin-bottom: -200px;
    height: 160vw;
    max-width: 500px;
    max-height: 850px;
  }
  @media only screen and (min-width: 993px) {
    position: relative;
    top: 150px;
  }
}

.description-block {
  display: flex;
  flex-direction: column;
  padding: 50px 0 70px 0;
  justify-content: center;
  @media only screen and (max-width: 992px) {
    text-align: center;
    align-items: center;
  }
  @media only screen and (min-width: 993px) {
    width: 60vw;
  }
}

.promo-title {
  font-size: clamp(40px, 5.5vw, 64px);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.04em;
  margin-bottom: 30px;
  @media only screen and (min-width: 993px) {
    margin-bottom: 48px;
  }
}

.text-description {
  font-weight: 600;
  line-height: 1.75;
  margin-bottom: 50px;
  max-width: 406px;
  @media only screen and (min-width: 993px) {
    margin-bottom: 58px;
  }
}
</style>
