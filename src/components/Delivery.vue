<template>
  <section class="section section__servies">
    <div class="_container">
      <div class="section__content row">
        <div class="section__content-item col-md-4 col-sm-12 px-lg-5 mb-4">
          <img src="../assets/img/auto.svg" alt="" />
          <p class="item-title">Free Delivery</p>
          <p class="item-subtitle">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>
        <div class="section__content-item col-md-4 col-sm-12 px-lg-5 mb-4">
          <img src="../assets/img/proccent.svg" alt="" />
          <p class="item-title">Sales & discounts</p>
          <p class="item-subtitle">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>
        <div class="section__content-item col-md-4 col-sm-12 px-lg-5 mb-4">
          <img src="../assets/img/Crown.svg" alt="" />
          <p class="item-title">Quality assurance</p>
          <p class="item-subtitle">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.section__servies {
  background: #222224;
  padding: calc(30px + (100 - 30) * ((100vw - 320px) / (1600 - 320))) 0;
  .section__content {
    display: flex;
    justify-content: space-between;
    .section__content-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fbfbfb;

      .item-title {
        font-size: 20px;
        margin: 20px 0;
        font-weight: bold;
      }
      .item-subtitle {
        font-size: 14px;
        text-align: center;
        font-weight: 100;
      }
    }
  }
}
</style>
