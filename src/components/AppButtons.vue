<template>
  <div class="button-block">
    <a
      href="https://apps.apple.com/cl/app/vpn-asap-best-secure-fast/id6477047407"
      target="_blank"
      class="button"
      ><img src="/src/assets/images/app-store.png" class="app-store" alt="apple store"
    /></a>
    <a href="#" class="button"
      ><img src="/src/assets/images/google-store.png" class="app-store" alt="google store"
    /></a>
  </div>
</template>
<style lang="scss" scoped>
.button-block {
  display: flex;
  gap: 12px;
}

.button {
  transition: filter 0.6s;

  :hover,
  :active {
    filter: invert(1) brightness(0.93) invert(1);
  }
}
</style>
