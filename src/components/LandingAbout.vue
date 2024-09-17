<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

onMounted(() => {
  if (window.matchMedia('(hover: hover)').matches) {
    return
  }
  animateReasonsScroll()
})
function animateReasonsScroll() {
  const reasons = document.querySelectorAll('.reason')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reason--active')
        } else {
          entry.target.classList.remove('reason--active')
        }
      })
    },
    {
      root: null,
      threshold: 0.8,
      rootMargin: '0px 0px -15% 0px'
    }
  )

  reasons.forEach((reason) => observer.observe(reason))

  onBeforeUnmount(() => {
    reasons.forEach((reason) => observer.unobserve(reason))
  })
}
</script>

<template>
  <div class="section-about">
    <div class="container">
      <h2 class="title">
        Yes,<br />
        we know exactly what VPN is needed for:
      </h2>
      <ul class="reasons">
        <li class="reason">
          <h3 class="reason-title">Connection Security</h3>
          <p class="reason-text">
            The service employs encryption protocols to secure data transmission.
          </p>
        </li>
        <li class="reason">
          <h3 class="reason-title">Censorship Prevention</h3>
          <p class="reason-text">
            Mentioning the prevention of censorship, the service helps users bypass restrictions
            imposed by certain networks or countries.
          </p>
        </li>
        <li class="reason">
          <h3 class="reason-title">Privacy Enhancement</h3>
          <p class="reason-text">
            Users can expect increased privacy while browsing, as their internet traffic is
            encrypted and routed through a secure server.
          </p>
        </li>
        <li class="reason">
          <h3 class="reason-title">Access to Restricted Content</h3>
          <p class="reason-text">
            The service allows users to access content that might be restricted or censored in their
            geographical location.
          </p>
        </li>
        <li class="reason">
          <h3 class="reason-title">Commitment to Professionalism</h3>
          <p class="reason-text">
            By stating the goal of being "easy and professional,” the service aims to provide a high
            level of service with a user-friendly interface.
          </p>
        </li>
        <li class="reason">
          <h3 class="reason-title">Data Protection</h3>
          <p class="reason-text">
            Users can be assured that their online activities are shielded from potential
            surveillance or tracking.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section-about {
  padding: 60px 12px;
  background: #092620;
  color: rgba(255, 255, 255, 1);
}

.container {
  display: flex;
  gap: 40px 100px;
  justify-content: center;
  @media only screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
}

.title {
  font-size: clamp(32px, 3.5vw, 52px);
  width: 8em;

  @media only screen and (min-width: 993px) {
    text-align: left;
  }
}

.reasons {
  display: grid;
  gap: 40px;
  line-height: 1.5;
  letter-spacing: -2%;
  max-width: 716px;
  padding: 0;
}

.reason {
  cursor: default;
  list-style: none;
  display: grid;
  align-items: baseline;
  gap: 14px 20px;
  grid-template-columns: auto 1fr;
  opacity: 0.5;
  transition: all 0.7s;

  &--active,
  &:hover {
    color: rgba(234, 175, 3, 1);
    opacity: 1;
  }

  &--active {
    transition-delay: 0.6s;
  }

  &::before {
    content: '0' counter(list-item) '.';
    counter-increment: list-item;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -1%;
  }
}

.reason-text {
  grid-column: 2/-1;
  opacity: 0.7;
  margin: 0;
}

.reason-title {
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -1%;
}
</style>
