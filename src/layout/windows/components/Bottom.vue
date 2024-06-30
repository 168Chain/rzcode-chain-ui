<template>
  <div class="footer">
    <div class="inner">
      <div class="service">
        <Logo/>
        <div class="contact">
          <p>联系我们</p>
          <p>E-mail：xiaokuige1688@gmail.com</p>
        </div>
        <div class="wallet">
          <p>Bells Wallet Address</p>
          <div class="image-container">
            <img src="@/assets/imgs/wallet.png" alt="Wallet">
          </div>
          <p>BD2Mq3XQfSp1yNQEzTm87EnmpyLQjEa2t8</p>
        </div>
      </div>
      <div class="copyright">
        Copyright © 2020 - 2022 168Chain.com
      </div>
    </div>
  </div>
</template>
<script setup>
import Logo from '@/components/Logo/index.vue'
</script>
<style lang="scss" scoped>
.footer {
  height: 340px;
  background: #30303F;
  position: relative;


  .inner {
    position: relative;
    z-index: 2;
    width: 1540px;
    margin: 0 auto;
    padding-top: 40px;

    .service {
      display: flex;
      margin: 32px auto;

      .logo {
        height: 40px;
        width: auto;
        margin-right: 292px;
      }

      .contact {
        font-size: 14px;
        color: white;
        opacity: .5;
        margin-right: 263px;

        p {
          margin-top: 0;
          margin-bottom: 5px;
          height: 20px;
          line-height: 20px;
        }
      }

      .wallet {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          display: block;
          width: 120px;
        }

        p {
          line-height: 20px;
          margin-top: 8px;
          color: white;
          font-size: 14px;
        }

        &:last-child {
          margin-left: 160px;
        }
      }
    }

    .copyright {
      text-align: center;
      color: white;
      opacity: .5;
    }
  }
}
</style>
