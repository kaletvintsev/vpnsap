<template>
  <header class="header">
    <nav class="menu">
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/#about">About</RouterLink></li>
        <li><RouterLink to="/#gift">Get app</RouterLink></li>
        <li><RouterLink to="/#features">Features</RouterLink></li>
        <li><RouterLink to="/#faq">FAQ</RouterLink></li>
        <li><a href="mailto:hello@vpnasap.com">Contact us</a></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  color: white;
  padding: 32px;
}
.menu {
  display: flex;
  align-items: center;
  margin: auto;

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
        opacity: 0.4;

        transition: opacity 0.3s;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
}
</style>
