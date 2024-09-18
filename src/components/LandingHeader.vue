<script setup lang="ts">
function scrollTo(id: string) {
  const element = document.getElementById(id)
  if (!element) return
  element.scrollIntoView({ behavior: 'smooth' })
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <header class="header container">
    <div class="logo">
      <img src="/src/assets/images/logo-header.png" alt="Logo" width="255" height="55" />
    </div>
    <nav class="menu">
      <ul>
        <li><a @click="scrollToTop()">Home</a></li>
        <li><a @click="scrollTo('about')">About</a></li>
        <li><a @click="scrollTo('gift')">Get app</a></li>
        <li><a @click="scrollTo('features')">Features</a></li>
        <li><a @click="scrollTo('faq')">FAQ</a></li>
        <li><a href="mailto:hello@vpnasap.com">Contact us</a></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding-top: 32px;
  height: var(--header-height);
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
      margin-left: 40px;
      font-size: 14px;
      font-weight: 500;

      &:first-child {
        margin-left: 0;
      }

      a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
          color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }
}
</style>
