<script setup lang="ts"></script>

<template>
  <div ref="gift" class="section-gift">
    <div class="container">
      <div class="gift-block">
        <h2 class="sub-title">A gift you will appreciate</h2>
        <div class="gift-img">
          <img src="/src/assets/images/gift.png" alt="gift" />
        </div>
        <div class="gift-description">
          <div class="title">3-Day Free trial</div>
          <div class="description">
            VPN ASAP is truly an excellent service. You have 7 days to use all the possibilities
            100%. Experience it for yourself at no cost by downloading it for all your devices.
          </div>
          <div class="button-block">
            <a
              href="https://apps.apple.com/cl/app/vpn-asap-best-secure-fast/id6477047407"
              target="_blank"
              class="download-button"
              ><img src="/src/assets/images/app-store.png" class="app-store" alt="apple store"
            /></a>
            <a href="#" class="download-button"
              ><img src="/src/assets/images/google-store.png" class="app-store" alt="google store"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section-gift {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0a1614;
  padding: 50px 0 50px 0;
  width: 100%;

  .gift-block {
    max-width: 900px;
    background: linear-gradient(180deg, #18352b 0%, #152d23 100%);
    border-radius: 20px;
    display: flex;
    justify-content: start;
    margin: 0 auto;

    .sub-title-mobile {
      display: none;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.64);
      font-style: normal;
      margin-top: 50px;
    }

    .gift-img {
      width: 300px;
    }

    .gift-description {
      width: 100%;
      padding: 50px 30px;
      display: flex;
      flex-flow: column;
      margin-left: 80px;

      .sub-title {
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.64);
        font-style: normal;
      }

      .title {
        color: #ffffff;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        margin-top: 20px;
      }

      .description {
        margin-top: 40px;
        color: rgba(255, 255, 255, 0.64);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.6;
      }
      .button-block {
        margin-top: 40px;

        .download-button {
          width: 100%;

          &:nth-child(2) {
            margin-left: 15px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 992px) {
    .section-gift {
      padding: 20px 0 20px 0;

      .gift-block {
        max-width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;

        .sub-title-mobile {
          display: block;
        }

        .gift-img {
          width: auto;

          img {
            width: 300px;
          }
        }

        .gift-description {
          width: 100%;
          padding: 0 50px 50px 50px;
          display: flex;
          flex-flow: column;
          margin-left: 0;
          text-align: center;

          .sub-title {
            display: none;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 480px) {
  .section-gift {
    .gift-block {
      .gift-description {
        padding: 0 20px 50px 20px !important;
      }
    }
  }
}
</style>
