<script setup lang="ts"></script>

<template>
  <div ref="about" class="section-about">
    <div class="container">
      <h2>ABOUT VPN ASAP</h2>
      <div class="title">Yes, we know exactly what VPN is needed for:</div>
      <div class="about-description">
        <div class="description-block-position">
          <div class="description-block">
            <div class="header">
              <div>Connection Security</div>
              <div>01</div>
            </div>
            <p>The service employs encryption protocols to secure data transmission.</p>
          </div>
        </div>
        <div class="description-block-position">
          <div class="description-block">
            <div class="header">
              <div>Censorship Prevention</div>
              <div>02</div>
            </div>
            <p>
              Mentioning the prevention of censorship, the service help users bypass restrictions
              imposed by certain networks or countries.
            </p>
          </div>
        </div>
        <div class="description-block-position">
          <div class="description-block">
            <div class="header">
              <div>Privacy Enhancement</div>
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
              <div>Access to Restricted Content</div>
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
              <div>Commitment to Professionalism</div>
              <div>05</div>
            </div>
            <p>
              By stating the goal of being "easy and professional”, the service aims to provide a
              high level of service with a user-friendly interface.
            </p>
          </div>
        </div>
        <div class="description-block-position">
          <div class="description-block">
            <div class="header">
              <div>Data Protection</div>
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
</template>
<style lang="scss" scoped>
.section-about {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0 100px 0;
  background: #092620;

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.64);
  }
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    color: #ffffff;
    font-size: 32px;
    line-height: 1.2;
    font-weight: 700;
    text-align: center;
  }

  .about-description {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 40px;

    .description-block-position {
      flex: 0 0 33.33%;
      max-width: 33.33%;
      padding: 0 10px 10px;

      .description-block {
        background: rgba(0, 0, 0, 0.16);
        margin-top: 20px;
        padding: 20px;
        border-radius: 12px;
        height: 190px;

        .header {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          font-weight: 500;
          width: 100%;
          color: #ffffff;
        }

        p {
          margin-top: 50px;
          color: rgba(255, 255, 255, 0.64);
          line-height: 1.2;
          margin-bottom: 0;
        }
      }
    }
  }
}

@media only screen and (max-width: 1200px) {
  .section-about {
    .about-description {
      .description-block-position {
        flex: 0 0 50%;
        max-width: 50%;
      }
    }
  }
}

@media only screen and (max-width: 992px) {
  .section-about {
    padding: 50px 0 50px 0;

    .about-description {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      flex-wrap: unset;
      width: 100%;

      .description-block-position {
        flex: 0 0 100%;
        max-width: 100%;
        padding: 0;
        width: 100%;

        &:last-child {
          padding-bottom: 0;
        }

        .description-block {
          width: 100%;
        }
      }
    }
  }
}
</style>
