<script setup lang="ts"></script>

<template>
  <section ref="confidence" class="section-confidence">
    <div class="container">
      <div class="confidence-block">
        <div class="sub-title">indispensable in daily tasks</div>
        <h2 class="title">Confidence in Internet Security</h2>
        <ul class="features">
          <li class="feature">
            <h3 class="feature-title">Faster than fast</h3>
            <p class="feature-description">
              Top-notch servers with super stable connection and speeds up to 10 Gbps
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.section-confidence {
  display: flex;
  justify-content: center;
  background: #092620;
  padding: 50px 0 50px 0;

  .confidence-block {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    flex-flow: column;

    .sub-title {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.64);
      text-align: center;
    }

    .title {
      margin-top: 20px;
      font-style: normal;
      font-weight: 700;
      font-size: 42px;
      color: #ffffff;
      text-align: center;
    }

    .description-block {
      display: flex;
      justify-content: start;
      flex-wrap: wrap;
      margin-top: 40px;

      .description-item {
        display: flex;
        flex: 0 0 33.33%;
        max-width: 33.33%;
        justify-content: space-around;
        flex-flow: column;
        align-items: center;
        padding-right: 80px;

        &:last-child {
          padding-right: 0;
        }

        img {
          width: 236px;
          height: 262px;
        }

        .item-title {
          font-style: normal;
          font-weight: 500;
          font-size: 32px;
          color: #eaaf03;
          text-shadow: 0 2.17263px 1.51486px rgba(63, 221, 37, 0.01438);
          text-align: center;
        }

        .item-description {
          color: rgba(255, 255, 255, 0.64);
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          text-align: center;
          line-height: 1.4;
          margin-top: 20px;
        }
      }
    }
  }

  @media only screen and (max-width: 992px) {
    .section-confidence {
      justify-content: center;
      align-items: center;
      flex-flow: column;

      .confidence-block {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;

        .description-block {
          display: flex;
          justify-content: center;
          flex-wrap: unset;
          flex-flow: column;
          margin-top: 40px;
          width: 100%;

          .description-item {
            display: flex;
            flex: 0 0 100%;
            max-width: 100%;
            justify-content: center;
            flex-flow: column;
            align-items: center;
            padding-right: 0;
          }
        }
      }
    }
  }
}
</style>
