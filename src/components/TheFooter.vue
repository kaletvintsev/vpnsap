<script setup lang="ts">
import AppButtons from './AppButtons.vue'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="menu-block">
        <div class="first-menu-block">
          <div class="footer-logo">
            <img src="/src/assets/images/logo-footer.png" alt="Logo footer" />
          </div>
          <div class="social-block-mobile">
            <a href="https://www.instagram.com/vpnasap/" target="_blank" class="item-social"
              ><img src="/src/assets/images/social-instagram.svg" alt="Instagram"
            /></a>
            <a href="https://www.tiktok.com/@vpnasap" target="_blank" class="item-social"
              ><img src="/src/assets/images/social-tiktok.svg" alt="TikTok"
            /></a>
            <a href="https://x.com/VPNASAP" target="_blank" class="item-social"
              ><img src="/src/assets/images/social-x.svg" alt="Twitter"
            /></a>
            <a
              href="https://www.linkedin.com/in/vpn-asap-153a0b301/"
              target="_blank"
              class="item-social"
              ><img src="/src/assets/images/social-in.svg" alt="LinkedIn"
            /></a>
          </div>
          <div class="menu">
            <a href="/terms">Terms of use</a>
            <a href="/privacy">Privacy policy</a>
            <a href="mailto:hello@vpnasap.com">hello@vpnasap.com</a>
          </div>
        </div>
        <div class="second-menu-block">
          <div class="second-menu">
            <div class="social-block">
              <a href="https://www.instagram.com/vpnasap/" target="_blank" class="item-social"
                ><img src="/src/assets/images/social-instagram.svg" alt="Instagram"
              /></a>
              <a href="https://www.tiktok.com/@vpnasap" target="_blank" class="item-social"
                ><img src="/src/assets/images/social-tiktok.svg" alt="TikTok"
              /></a>
              <a href="https://x.com/VPNASAP" target="_blank" class="item-social"
                ><img src="/src/assets/images/social-x.svg" alt="Twitter"
              /></a>
              <a
                href="https://www.linkedin.com/in/vpn-asap-153a0b301/"
                target="_blank"
                class="item-social"
                ><img src="/src/assets/images/social-in.svg" alt="LinkedIn"
              /></a>
            </div>
            <AppButtons />
          </div>
        </div>
      </div>
      <div class="copyright">© {{ new Date().getFullYear() }} VPN ASAP All Rights Reserved</div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: center;
  background: #0a1614;
  padding: 50px 0 50px 0;

  .menu-block {
    display: flex;
    justify-content: space-between;
    flex-flow: row;

    .first-menu-block {
      flex: 1;
      display: flex;
      justify-content: space-between;
      flex-flow: row;
      width: 50%;

      .social-block-mobile {
        display: none;
        margin-bottom: 60px;

        .item-social {
          margin-right: 15px;

          &:last-child {
            margin-right: 0;
          }
        }
      }

      .footer-logo {
        width: 130px;

        img {
          max-width: 130px;
        }
      }

      .menu {
        display: flex;
        justify-content: start;
        flex-flow: column;

        a {
          font-style: normal;
          font-weight: 500;
          color: #ffffff;
          text-decoration: none;
          margin-bottom: 15px;

          &:last-child {
            margin-bottom: 0;
          }

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .second-menu-block {
      display: flex;
      justify-content: end;
      width: 50%;

      .second-menu {
        display: flex;
        align-items: end;
        flex-flow: column;

        .social-block {
          .item-social {
            margin-right: 15px;

            &:last-child {
              margin-right: 0;
            }
          }
        }


      }
    }
  }

  .copyright {
    color: #ffffff;
    opacity: 0.4;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    margin-top: 80px;
    text-align: center;
  }

  @media only screen and (max-width: 992px) {
    .footer {
      display: flex;
      justify-content: center;
      align-items: center;

      .menu-block {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;

        .first-menu-block {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          width: 100%;

          .social-block-mobile {
            display: block;
          }

          .footer-logo {
            width: 130px;
            margin-bottom: 60px;
          }

          .menu {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            margin-bottom: 40px;
          }
        }

        .second-menu-block {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;

          .second-menu {
            display: flex;
            align-items: center;
            flex-flow: column;

            .social-block {
              display: none;
            }

            .button-block {
              margin-top: 40px;
            }
          }
        }
      }
    }
  }
}
</style>
