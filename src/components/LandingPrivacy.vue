<script setup lang="ts"></script>

<template>
  <div ref="futures" class="section-working">
    <div class="container">
      <div class="subtitle">Meticulously WORKED&nbsp;TO&nbsp;THE&nbsp;DETAILS</div>
      <h2 class="title">Truly Private Messenger within&nbsp;VPN&nbsp;ASAP</h2>
      <p class="description">
        Experience the highest level of privacy with the Truly Private Messenger inside VPN ASAP.
        Your messages are safeguarded with end-to-end encryption, ensuring that they remain
        protected from the moment they leave your device until they reach the recipient's device.
      </p>
      <p class="description">
        This robust encryption means that no one, including VPN ASAP, can access the content of your
        messages during transmission. Additionally, messages are automatically deleted every 10
        minutes, leaving no trace behind.
      </p>
      <ul class="privacy-list">
        <li class="item">
          <div class="item-title-wrapper">
            <h3 class="item-title">Strict Privacy Commitment</h3>
          </div>
          <p class="item-description">
            As a private company, we do not share any information. Your privacy is our top priority.
          </p>
        </li>
        <li class="item">
          <div class="item-title-wrapper">
            <h3 class="item-title">Encrypted Registration</h3>
          </div>
          <p class="item-description">
            All registration data is encrypted, ensuring that we do not have access to any personal
            information.
          </p>
        </li>
        <li class="item">
          <div class="item-title-wrapper">
            <h3 class="item-title">Auto-Deletion</h3>
          </div>
          <p class="item-description">
            All encrypted information is automatically deleted from our servers every 10 minutes,
            guaranteeing no trace, no tracking, and no identifiers.
          </p>
        </li>
        <li class="item">
          <div class="item-title-wrapper">
            <h3 class="item-title">VPN Integration</h3>
          </div>
          <p class="item-description">
            While messaging, you can also use the VPN, ensuring that your messages and location are
            fully hidden from any eyes.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section-working {
  background-color: #f4d66c;
  background-image: linear-gradient(315deg, #d0b336 0%, #f4d66c 100%);
  padding: 60px 12px;
  @media only screen and (min-width: 993px) {
    padding: 90px 0;
  }
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subtitle {
  max-width: 200px;
  margin-bottom: 30px;
}

.title {
  line-height: 1.4;
  margin-bottom: 50px;
  max-width: 564px;
}

.description {
  text-align: center;
  color: rgba(0, 0, 0, 0.64);
  max-width: 777px;

  &:last-of-type {
    margin-bottom: 50px;
  }
}

.privacy-list {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(8px, 0.7em, 20px);
}

.item {
  background-color: rgba(255, 255, 255, 0.16);
  padding: 22px;
  border-radius: 12px;
  max-width: 486px;
  &:hover {
    animation: gradientHover 0.3s forwards;
  }
}

@keyframes gradientHover {
  25% {
    background-image: linear-gradient(
      99.99deg,
      rgba(255, 255, 255, 0.08) 0%,
      rgba(255, 255, 255, 0.032) 100%
    );
  }
  50% {
    background-image: linear-gradient(
      99.99deg,
      rgba(255, 255, 255, 0.16) 0%,
      rgba(255, 255, 255, 0.064) 100%
    );
  }
  100% {
    background-image: linear-gradient(
      99.99deg,
      rgba(255, 255, 255, 0.32) 0%,
      rgba(255, 255, 255, 0.128) 100%
    );
  }
}

.item-title-wrapper {
  display: flex;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -4%;
  justify-content: space-between;
  margin-bottom: 60px;

  &::after {
    content: '0' counter(list-item);
    counter-increment: list-item;
  }
}

.item-title {
  max-width: 144px;
  font: inherit;
}

.item-description {
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -2%;
  opacity: 0.64;
}
</style>
