<template>
  <section class="section section__subscribe">
    <div class="_container">
      <div class="section__content row">
        <div class="section__content-item col-md-6 col-sm-12">
          <img src="../assets/img/autor.png" alt="" />
          <p class="text">
            “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
            <i>a pulvinar purus condimentum</i> “
          </p>
        </div>
        <div class="section__content-item col-md-6 col-sm-12">
          <p class="title">SUBSCRIBE</p>
          <p class="subtitle">FOR OUR NEWLETTER AND PROMOTION</p>
          <form action="">
            <input type="email" placeholder="Enter Your Email" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.section__subscribe {
  padding: calc(30px + (100 - 30) * ((100vw - 320px) / (1600 - 320))) 0;
  background: url(../assets/img/subscribe.png) no-repeat top left / cover;
  .section__content {
    display: flex;
    align-items: center;
  }
  .section__content-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    .text {
      width: 60%;
      margin-top: 30px;
      font-size: 20px;
      line-height: 24px;
      text-align: center;

      color: #222224;
      @media (max-width: 768px) {
        width: 100%;
        font-size: 18px;
      }
    }
    .title {
      font-weight: 900;
      font-size: 24px;
      text-align: center;
      margin: 20px 0 10px 0;
    }
    .subtitle {
      margin-bottom: 20px;
      text-align: center;
    }
  }
  form {
    display: flex;

    @media (max-width: 480px) {
      width: 100%;
    }
    input[type="email"] {
      width: 100%;
      background: #e1e1e1;
      padding: 20px 0 20px 20px;
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
      border: none;
      outline: none;
      box-sizing: border-box;
      @media (max-width: 480px) {
        padding: 15px 0 15px 15px;
      }
    }
    input[type="submit"] {
      background: #f16d7f;
      padding: 20px;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      color: #ffffff;
      outline: none;
      box-sizing: border-box;
      @media (max-width: 480px) {
        padding: 15px;
      }
    }
  }
}
</style>
