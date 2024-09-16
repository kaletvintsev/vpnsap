<template>
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
    <a href="https://www.linkedin.com/in/vpn-asap-153a0b301/" target="_blank" class="item-social"
      ><img src="/src/assets/images/social-in.svg" alt="LinkedIn"
    /></a>
  </div>
</template>

<style scoped lang="scss">
.social-block {
  display: flex;
  gap: 16px;
}

.item-social {
  opacity: 0.6;
  transition: opacity 0.3s;
  &:hover,
  &:active {
    opacity: 1;
  }
}
</style>
