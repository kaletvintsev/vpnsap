<script setup lang="ts">
import type { FAQ } from '@/interfaces'
import LandingFAQItem from './LandingFAQItem.vue'

const FAQItems: FAQ[] = [
  {
    question: 'What can I do with a VPN?',
    answer:
      'A VPN is a multi-purpose digital survival tool. You can use your VPN to: <ul><li>Hide your real IP address and surf the web with added privacy</li><li>Protect your confidential information (such as online banking credentials or social media passwords) through VPN encryption</li><li>Unblock and access your favorite websites and social media platforms</li><li>Stream and download anything securely, anonymously, and with no limits</li><li>Get discounts when you shop online</li></ul>'
  },
  {
    question: 'Is VPN ASAP free?',
    answer:
      'No. VPNASAP is a premium VPN service, although a <b>free trial</b> is available for certain mobile devices.'
  },
  {
    question: 'How do I cancel my subscription?',
    answer:
      'For instructions on canceling your subscription just email as at hello@vpnasap.com or cancel it via your apple id/google pay subscription manager.'
  },
  {
    question: 'How many IPs do you have?',
    answer:
      'VPNASAP has thousands of servers in dozens of locations around the globe. Each location can have hundreds of servers, with each server containing thousands of IPs.  VPNASAP does not specify the number of available IPs because that may change depending on demand and other factors.'
  },
  {
    question: 'Do you log my data?',
    answer:
      'VPNASAP is a privacy-focused company that does not store activity logs or connection logs of our users. VPNASAP does collect minimal information about the usage of our services in order to identify and address technical issues, but this information cannot be used to connect you to any specific activity or behavior.'
  },
  {
    question: 'My Registration is Private?',
    answer: 'Yes, we don’t have or collect any user information so all is Private.'
  },
  {
    question: 'Why Use ASAP Private Messenger?',
    answer:
      "End-to-end encryption keeps your conversations secure. We can't read your messages or listen to your calls, and no one else can either. Privacy isn’t an optional mode — it’s just the way that ASAP works."
  },
  {
    question:
      'What does it mean when Messenger says messages are secured with end-to-end encryption?',
    answer:
      "he content of your messages  in an end-to-end encrypted chat is protected from the moment it leaves your device to the moment it reaches the receiver's device. This means that nobody during this delivery, including ASAP, can see to what's sent."
  },
  {
    question: 'Is VPNASAP safe?',
    answer:
      'Yes! VPNASAP takes numerous measures to ensure your VPN connection is safe and secure: <ul><li>IP masking using server locations around the world</li><li>Industry-standard 256-bit AES encryption</li><li>Network Lock (kill switch) for superior leak protection</li><li>•No activity logs and no connection logs</li><li>Private, encrypted DNS on every server</li><li>Perfect forward secrecy for future-proofed privacy. Besides these standard features, VPNASAP has a dedicated team of security engineers working to constantly upgrade our network and apps to address new threats to your privacy.</li></ul>'
  },
  {
    question: 'Why should I choose VPNASAP over other VPN providers?',
    answer:
      'VPNASAP runs a premium VPN network optimized for quickness and reliability. Enjoy unlimited bandwidth and your choice of servers in dozens of countries around the world. VPNASAP has built the best network and VPN apps in the industry. Still not convinced? VPNASAP comes with a 30-day money-back guarantee on all plans, so you can try the best VPN service available with zero risk.'
  },
  {
    question: 'Does VPNASAP throttle my connection?',
    answer:
      'No. With VPNASAP, there is <b>no monthly data cap</b> and <b>no ISP service throttling.</b>'
  },
  {
    question: 'I still have questions. How can I contact live chat support?',
    answer:
      'For any other questions, or for any issues you have encountered, please contact us at hello@vpnasap.com'
  }
]
</script>

<template>
  <div class="section-faq">
    <div class="container faq-block">
      <h2 class="subtitle">FREQUENTLY ASKED QUESTIONS</h2>
      <div class="title">Looking for answers?<br />You're in the right place!</div>
      <div class="faq-items-block">
        <LandingFAQItem
          v-for="item in FAQItems"
          :key="item.question"
          :question="item"
          class="item"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section-faq {
  display: flex;
  justify-content: center;
  background: #092620;
  padding: 60px 24px;
  color: #ffffff;
}
.faq-block {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-flow: column;
}

.subtitle {
  margin-bottom: 30px;
}
.title {
  margin-bottom: 50px;
}

.faq-items-block {
  @media only screen and (min-width: 993px) {
    columns: 2;
    column-gap: 19px;
  }
}

.item {
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
  margin-bottom: 8px;
}
</style>
