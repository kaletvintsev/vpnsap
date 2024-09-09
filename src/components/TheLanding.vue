<script setup lang="ts">


// function toggleItem(index) {
//   faqItems.forEach((item, i) => {
//     if (i === index) {
//       item.expanded = !item.expanded
//     } else {
//       item.expanded = false
//     }
//   })
// }
</script>

<template>
    <div class="first-block">
      <div class="container">

        <div class="mobile-logo">
          <img src="assets/logo-header.png" alt="Logo" />
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
                ><img src="assets/app-store.png" class="app-store" alt="apple store"
              /></a>
              <a href="#" class="download-button"
                ><img src="assets/google-store.png" class="app-store" alt="google store"
              /></a>
            </div>
          </div>
          <div class="phone-block">
            <img class="phone-1" src="assets/iphone-14-pro-1.png" alt="iPhone display 1" />
            <img class="phone-2" src="assets/iphone-14-pro-2.png" alt="iPhone display 2" />
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
    <div ref="about" class="section-about">
      <div class="container">
        <h2>ABOUT VPN ASAP</h2>
        <div class="title">
          We know exactly<br />
          what VPN is needed for
        </div>
        <div class="about-description">
          <div class="description-block-position">
            <div class="description-block">
              <div class="header">
                <div>Connection<br />Security</div>
                <div>01</div>
              </div>
              <p>The service employs encryption protocols <br />to secure data transmission.</p>
            </div>
          </div>
          <div class="description-block-position">
            <div class="description-block">
              <div class="header">
                <div>Censorship<br />Prevention</div>
                <div>02</div>
              </div>
              <p>
                Mentioning the prevention of censorship, <br />the service help users bypass
                restrictions imposed by certain networks or countries.
              </p>
            </div>
          </div>
          <div class="description-block-position">
            <div class="description-block">
              <div class="header">
                <div>Privacy<br />Enhancement</div>
                <div>03</div>
              </div>
              <p>
                Users can expect increased privacy while browsing, as their internet traffic is
                encrypted and routed through a secure server.
              </p>
            </div>
          </div>
          <div class="description-block-position">
            <div class="description-block">
              <div class="header">
                <div>Access to Restricted<br />Content</div>
                <div>04</div>
              </div>
              <p>
                The service allow users to access content that might be restricted or censored in
                their geographical location.
              </p>
            </div>
          </div>
          <div class="description-block-position">
            <div class="description-block">
              <div class="header">
                <div>Commitment to<br />Professionalism</div>
                <div>05</div>
              </div>
              <p>
                By stating the goal of being "easy and professional”, the service<br />
                aims to provide a high level of service with a user-friendly interface.
              </p>
            </div>
          </div>
          <div class="description-block-position">
            <div class="description-block">
              <div class="header">
                <div>Data<br />Protection</div>
                <div>06</div>
              </div>
              <p>
                Users can be assured that their online activities are shielded from potential
                surveillance or tracking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="gift" class="section-gift">
      <div class="container">
        <div class="gift-block">
          <div class="sub-title-mobile">A gift you will appreciate</div>
          <div class="gift-img">
            <img src="assets/gift.png" alt="gift" />
          </div>
          <div class="gift-description">
            <div class="sub-title">A gift you will appreciate</div>
            <div class="title">7-Day Free trial</div>
            <div class="description">
              VPN ASAP is truly an excellent service. You have 7 days to use all the possibilities
              100%. Experience it for yourself at no cost by downloading it for all your devices.
            </div>
            <div class="button-block">
              <a
                href="https://apps.apple.com/cl/app/vpn-asap-best-secure-fast/id6477047407"
                target="_blank"
                class="download-button"
                ><img src="assets/app-store.png" class="app-store" alt="apple store"
              /></a>
              <a href="#" class="download-button"
                ><img src="assets/google-store.png" class="app-store" alt="google store"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="confidence" class="section-confidence">
      <div class="container">
        <div class="confidence-block">
          <h2 class="sub-title">indispensable in daily tasks</h2>
          <div class="title">Confidence in Internet Security</div>
          <div class="description-block">
            <div class="description-item">
              <img src="assets/protection.png" alt="protection" />
              <div class="item-title">Protection</div>
              <div class="item-description">
                Work online privately even <br />
                on public networks
              </div>
            </div>
            <div class="description-item">
              <img class="anonymity" src="assets/anonymity.png" alt="anonymity" />
              <div class="item-title">Anonymity</div>
              <div class="item-description">
                Change your IP address and prevent your activities from being tracked
              </div>
            </div>
            <div class="description-item">
              <img class="location" src="assets/location.png" alt="location" />
              <div class="item-title">Location</div>
              <div class="item-description">
                Unlimited internet access from <br />
                anywhere in the world
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="futures" class="section-working">
      <div class="container">
        <div class="working-block">
          <h2 class="sub-title">Meticulously WORKED TO THE DETAILS</h2>
          <div class="title">Really works<br />beyond expectations</div>
          <div class="working-item-block">
            <div class="working-item">
              <div class="number">01.</div>
              <div class="description">
                <div class="item-title">Robust online security</div>
                <p>
                  Ensure the protection of your data and online activities through top-tier
                  encryption. Safeguard your connection, even on public Wi-Fi hotspots.
                </p>
              </div>
            </div>
            <div class="working-item">
              <div class="number">02.</div>
              <div class="description">
                <div class="item-title">Rapid VPN server network</div>
                <p>
                  Enjoy your favourite content and applications with high-speed connections and
                  limitless bandwidth on any network. Connect to ultra-secure servers across 30
                  countries.
                </p>
              </div>
            </div>
            <div class="working-item">
              <div class="number">03.</div>
              <div class="description">
                <div class="item-title">Premier privacy protection</div>
                <p>
                  Navigate the internet with confidence while maintaining the privacy of your IP
                  address and location. Committed to strict privacy policies, VIN ASAP doesn't
                  gather activity or connection logs, having undergone independent audits to
                  guarantee your security.
                </p>
              </div>
            </div>
            <div class="working-item">
              <div class="number">04.</div>
              <div class="description">
                <div class="item-title">Five-star customer service</div>
                <p>
                  Receive assistance within seconds, 24/7. Ask anything, anytime, through our
                  support or email services. Troubleshooting is made simple with help guides
                  integrated into the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="faq" class="section-faq">
      <div class="container">
        <div class="faq-block">
          <h2 class="sub-title">FREQUENTLY ASKED QUESTIONS</h2>
          <div class="title">Looking for answers?<br />You're in the right place!</div>
          <!-- <div v-for="(item, index) in faqItems" :key="index" class="faq-items-block">
            <div @click="toggleItem(index)" class="faq-item">
              <div class="item-header">
                <div class="item-title">{{ item.question }}</div>
                <div
                  class="item-title"
                  :class="{ 'item-arrow-top': item.expanded, 'item-arrow-bottom': !item.expanded }"
                >
                  <img v-if="!item.expanded" src="assets/arrow-bottom.png" alt="arrow-bottom" />
                  <img v-if="item.expanded" src="assets/arrow-top.png" alt="arrow-top" />
                </div>
              </div>
              <div v-if="item.expanded" class="item-faq-description" v-html="item.answer"></div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <div class="menu-block">
          <div class="first-menu-block">
            <div class="footer-logo"><img src="assets/logo-footer.png" alt="Logo footer" /></div>
            <div class="social-block-mobile">
              <a href="https://www.instagram.com/vpnasap/" target="_blank" class="item-social"
                ><img src="assets/social-instagram.svg" alt="Instagram"
              /></a>
              <a href="https://www.tiktok.com/@vpnasap" target="_blank" class="item-social"
                ><img src="assets/social-tiktok.svg" alt="TikTok"
              /></a>
              <a href="https://x.com/VPNASAP" target="_blank" class="item-social"
                ><img src="assets/social-x.svg" alt="Twitter"
              /></a>
              <a
                href="https://www.linkedin.com/in/vpn-asap-153a0b301/"
                target="_blank"
                class="item-social"
                ><img src="assets/social-in.svg" alt="LinkedIn"
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
                  ><img src="assets/social-instagram.svg" alt="Instagram"
                /></a>
                <a href="https://www.tiktok.com/@vpnasap" target="_blank" class="item-social"
                  ><img src="assets/social-tiktok.svg" alt="TikTok"
                /></a>
                <a href="https://x.com/VPNASAP" target="_blank" class="item-social"
                  ><img src="assets/social-x.svg" alt="Twitter"
                /></a>
                <a
                  href="https://www.linkedin.com/in/vpn-asap-153a0b301/"
                  target="_blank"
                  class="item-social"
                  ><img src="assets/social-in.svg" alt="LinkedIn"
                /></a>
              </div>
              <div class="button-block">
                <a
                  href="https://apps.apple.com/cl/app/vpn-asap-best-secure-fast/id6477047407"
                  target="_blank"
                  class="download-button"
                  ><img src="assets/app-store.png" class="app-store" alt="apple store"
                /></a>
                <a href="#" target="_blank" class="download-button"
                  ><img src="assets/google-store.png" class="app-store" alt="google store"
                /></a>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">© {{ new Date().getFullYear() }} VPN ASAP All Rights Reserved</div>
      </div>
    </div>
</template>
