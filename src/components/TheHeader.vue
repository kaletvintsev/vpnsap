<script setup lang="ts">
function scrollTo(refName: string) {
  const element = document.querySelector('[ref="' + refName + '"]')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <header class="header">
    <div class="logo">
      <img src="assets/logo-header.png" alt="Logo" />
    </div>
    <nav class="menu">
      <ul>
        <li><a @click="scrollToTop()">Home</a></li>
        <li><a @click="scrollTo('about')">About</a></li>
        <li><a @click="scrollTo('gift')">Get app</a></li>
        <li><a @click="scrollTo('futures')">Features</a></li>
        <li><a @click="scrollTo('faq')">FAQ</a></li>
        <li><a href="mailto:hello@vpnasap.com">Contact us</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
