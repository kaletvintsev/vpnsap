<script setup lang="ts"></script>

<template>
  <div ref="futures" class="section-working">
    <div class="container">
      <div class="working-block">
        <div class="sub-title">Meticulously WORKED TO THE DETAILS</div>
        <h2 class="title">Truly Private Messenger within VPN ASAP</h2>
        <p class="description">
          Experience the highest level of privacy with the Truly Private Messenger inside VPN ASAP.
          Your messages are safeguarded with end-to-end encryption, ensuring that they remain
          protected from the moment they leave your device until they reach the recipient's device.
          This robust encryption means that no one, including VPN ASAP, can access the content of
          your messages during transmission. Additionally, messages are automatically deleted every
          10 minutes, leaving no trace behind.
        </p>
        <div class="working-item-block">
          <div class="working-item">
            <div class="number">01</div>
            <div class="description">
              <div class="item-title">Strict Privacy Commitment</div>
              <p>
                As a private company, we do not share any information. Your privacy is our top
                priority.
              </p>
            </div>
          </div>
          <div class="working-item">
            <div class="number">02</div>
            <div class="description">
              <div class="item-title">Encrypted Registration</div>
              <p>
                All registration data is encrypted, ensuring that we do not have access to any
                personal information.
              </p>
            </div>
          </div>
          <div class="working-item">
            <div class="number">03</div>
            <div class="description">
              <div class="item-title">Auto-Deletion</div>
              <p>
                All encrypted information is automatically deleted from our servers every 10
                minutes, guaranteeing no trace, no tracking, and no identifiers.
              </p>
            </div>
          </div>
          <div class="working-item">
            <div class="number">04</div>
            <div class="description">
              <div class="item-title">VPN Integration</div>
              <p>
                While messaging, you can also use the VPN, ensuring that your messages and location
                are fully hidden from any eyes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section-working {
  display: flex;
  justify-content: center;
  background: linear-gradient(315deg, #d0b336 0%, #f4d66c 100%);
  padding: 50px 0 50px 0;

  .working-block {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    flex-flow: column;

    .sub-title {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      text-transform: uppercase;
      color: rgba(0, 0, 0, 0.64);
      text-align: center;
    }

    .title {
      margin-top: 20px;
      font-style: normal;
      font-weight: 800;
      font-size: 42px;
      color: #000000;
      text-align: center;
      line-height: 1.4;
    }

    .working-item-block {
      display: flex;
      justify-content: start;
      flex-flow: column;
      margin-top: 20px;

      .working-item {
        display: flex;
        justify-content: start;
        flex-flow: row;
        margin-bottom: 20px;

        &:last-child {
          margin-bottom: 0;
        }

        .number {
          width: 50px;
          font-style: normal;
          font-weight: 500;
          font-size: 32px;
          color: #0a1614;
        }

        .description {
          margin-left: 20px;

          .item-title {
            font-style: normal;
            font-weight: 500;
            font-size: 32px;
            color: #0a1614;
          }

          p {
            margin-top: 15px;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 1.2;
            color: rgba(0, 0, 0, 0.64);
            margin-bottom: 0 !important;
            max-width: 500px;
          }
        }
      }
    }
  }
}
</style>
