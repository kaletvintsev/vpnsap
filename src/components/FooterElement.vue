<script setup lang="ts">
import { useIsDesktop } from '@/composables/useIsDesktop'
import AppButtons from './AppButtons.vue'
import SocialBlock from './SocialBlock.vue'

const { isDesktop } = useIsDesktop()

interface Props {
  style?: 'default' | 'green'
}

const { style = 'default' } = defineProps<Props>()
</script>

<template>
  <footer class="footer" :class="{ 'footer--green': style === 'green' }">
    <div class="container">
      <div class="menu-block">
        <div class="first-menu-block">
          <RouterLink to="/" class="footer-logo">
            <img src="/src/assets/images/logo-footer.png" alt="Logo footer" />
          </RouterLink>
          <SocialBlock class="mobile-social" v-if="!isDesktop" />
          <div class="menu">
            <RouterLink to="/terms">Terms of use</RouterLink>
            <RouterLink to="/privacy">Privacy policy</RouterLink>
            <a href="mailto:hello@vpnasap.com">hello@vpnasap.com</a>
          </div>
        </div>
        <div class="second-menu-block">
          <div class="second-menu">
            <SocialBlock class="desktop-social" v-if="isDesktop" />

            <AppButtons class="app-buttons" />
          </div>
        </div>
      </div>
      <div class="copyright">© {{ new Date().getFullYear() }} VPN ASAP All Rights Reserved</div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  padding: 80px 24px;
  @media only screen and (min-width: 993px) {
    padding-bottom: 40px;
  }

  &--green {
    background-color: #092620;
  }
}

.menu-block {
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 992px) {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
}

.footer-logo {
  display: flex;
  align-items: center;
  max-width: 321px;
  @media only screen and (max-width: 992px) {
    margin-bottom: 68px;
  }
  @media only screen and (min-width: 993px) {
    align-self: start;
    max-width: Min(321px, 30vw);
  }
}

.mobile-social {
  margin-bottom: 60px;
}

.app-buttons {
  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }
}

.first-menu-block {
  flex: 1;
  display: flex;
  justify-content: space-between;
  width: 50%;
  @media only screen and (max-width: 992px) {
    justify-content: center;
    align-items: center;
    flex-flow: column;
  }
}

.menu {
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: auto;

  @media only screen and (max-width: 992px) {
    margin-bottom: 40px;
  }

  a {
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

.second-menu-block {
  display: flex;

  @media only screen and (max-width: 992px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
}
.second-menu {
  display: flex;
  align-items: end;
  flex-flow: column;
  gap: 28px;
  @media only screen and (max-width: 992px) {
    align-items: center;
  }
}

.item-social {
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
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
</style>
