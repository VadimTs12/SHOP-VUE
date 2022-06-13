<template>
  <section class="section main-screen">
    <div class="_container">
      <div class="section__content">
        <img src="../assets/img/man.png" alt="">
        <div class="section__content-text">
          THE BRAND<br>
          <span>OF LUXERIOUS <span>FASHION         </span></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.main-screen {
  background-color: #f1e4e6;
  .section__content {
    display: flex;
    align-items: center;
    @media (max-width:768px) {
      justify-content: center;
    }
    img {
      width: 50%;
      @media (max-width:768px) {
        display: none;
      }
    }
    .section__content-text {
      font-weight: 900;
      font-size: calc(30px + (50 - 30) * ((100vw - 320px) / (1600 - 320)));
      line-height: 1;
      color: #222222;
      border-left: 12px solid #f16d7f;
      padding-left: 15px;
      @media (max-width:768px) {
        margin: 50% 0;
      }
      span {
        font-size: calc(15px + (30 - 15) * ((100vw - 320px) / (1600 - 320)));
        font-weight: 500;
        span {
          color: #f16d7f;
        }
      }
    }
  }
}

</style>