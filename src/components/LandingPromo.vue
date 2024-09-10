<script setup lang="ts"></script>

<template>
  <div class="first-block">
    <div class="container">
      <div class="mobile-logo">
        <img src="/src/assets/images/logo-mobile.png" alt="Logo" />
      </div>
      <div class="description-block">
        <div class="text-block">
          <h1 class="title">
            Surf fast.<br />
            Talk secure.<br />
            Stay anonymous.
          </h1>
          <p class="text-description">
            Get an ultra-fast VPN and secure messenger in one app. Your online activity will be
            completely hidden thanks to top-notch X25519 &amp; AES encryption with rock-solid
            connections up to 10 Gbps.
          </p>
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
        <div class="phone-block">
          <img
            class="phone-1"
            src="/src/assets/images/iphone-14-pro-1.png"
            alt="iPhone display 1"
          />
          <img
            class="phone-2"
            src="/src/assets/images/iphone-14-pro-2.png"
            alt="iPhone display 2"
          />
        </div>

        <p class="text-mobile-description">
          VPN ASAP is created to provide the best VPN solutions.<br />
          Surf on Internet without any limitations through<br />
          secure online connections that ensure privacy<br />
          and security of user data.
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.first-block {
  display: flex;
  background-size: cover;
  background:
    url('../assets/world-map.png') no-repeat center 60px,
    linear-gradient(315deg, #d0b336 0%, #f4d66c 100%);
  width: 100%;

  .description-block {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 50px 0 50px 0;

    .text-block {
      flex: 1;
      max-width: 50%;
      margin-top: 100px;

      .title {
        font-size: 52px;
        line-height: 1.2;
        font-family: 'Gotham Pro', serif;
        font-weight: 800;
      }
      .text-description {
        margin-top: 20px;
        font-size: 16px;
        line-height: 1.4;
        font-weight: 500;
      }

      .button-block {
        margin-top: 20px;
        margin-bottom: 100px;

        .download-button {
          width: 100%;

          &:nth-child(2) {
            margin-left: 15px;
          }
        }
      }
    }

    .phone-block {
      display: flex;
      justify-content: start;
      position: relative;

      .phone-1 {
        position: absolute;
        width: 280px;
        z-index: 999;
        margin-left: -200px;
      }

      .phone-2 {
        width: 280px;
        z-index: 1;
        margin-top: 50px;
        max-height: 490px;
      }
    }

    .text-mobile-description {
      display: none;
      margin-top: 40px;
      text-align: center;
      font-size: 16px;
      line-height: 1.4;
      font-weight: 500;
      padding: 0 20px 0 20px;
    }
  }
  .header {
    width: 100%;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;

    .logo {
      display: flex;
      position: relative;
      width: 100px;
      height: 100px;
      background:
        url('../assets/logo-bg.png') no-repeat center 0,
        rgb(240, 210, 101);
      background-blend-mode: color-dodge;
      background-size: 100px 100px;
      justify-content: center;
      align-items: center;

      img {
        margin-left: -5px;
        max-width: 68px;
      }
    }

    .menu {
      display: flex;
      align-items: center;

      ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;

        li {
          display: inline;
          margin-left: 30px;
          font-size: 14px;
          font-weight: 500;

          &:first-child {
            margin-left: 0;
          }

          a {
            color: rgba(0, 0, 0, 0.4);
            text-decoration: none;
            transition: color 0.3s;
            cursor: pointer;

            &:hover {
              color: rgba(0, 0, 0, 0.6);
            }
          }
        }
      }
    }
  }
  .mobile-logo {
    display: none;
    position: relative;
    width: 100px;
    height: 100px;
    background:
      url('../assets/logo-bg.png') no-repeat center 0,
      rgba(237, 207, 97, 80);
    background-blend-mode: color-dodge;
    background-size: 100px 100px;
    justify-content: center;
    align-items: center;
    margin: 20px auto;

    img {
      margin-left: -5px;
      max-width: 68px;
    }
  }
}

@media only screen and (max-width: 992px) {
  .first-block {
    display: flex;
    justify-content: center;
    align-items: center;
    background:
      url('../assets/world-map.png') no-repeat center -100px,
      linear-gradient(315deg, #d0b336 0%, #f4d66c 100%);

    .description-block {
      justify-content: center;
      align-items: center;
      flex-flow: column;
      padding: 0 0 50px 0;

      .text-block {
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 100%;
        text-align: center;
        margin-top: 0 !important;

        .title {
          font-size: 42px;
        }

        .text-description {
          display: none;
        }

        .button-block {
          margin-top: 50px;
          margin-bottom: 50px;
        }
      }

      .phone-block {
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 100%;

        .phone-1 {
          position: absolute;
          width: 280px;
          z-index: 999;
          margin-left: -200px;
        }

        .phone-2 {
          width: 280px;
          z-index: 1;
          margin-top: 50px;
          max-height: 490px;
          margin-left: 200px;
        }
      }

      .text-mobile-description {
        display: block;
      }
    }
    .header {
      display: none;
    }
    .mobile-logo {
      display: flex;
    }
  }

  @media only screen and (max-width: 480px) {
    .first-block {
      .description-block {
        .phone-block {
          .phone-1 {
            position: absolute;
            width: 180px;
            z-index: 999;
            margin-left: -130px;
          }

          .phone-2 {
            width: 180px;
            z-index: 1;
            margin-top: 50px;
            max-height: 390px;
            margin-left: 130px;
          }
        }
      }
    }
  }
}
</style>
