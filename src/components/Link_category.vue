<template>
  <section class="section section__new-products">
    <div class="_container">
      <div class="section__content">
        <h1 class="title">NEW ARRIVALS </h1>
        <div class="type">
          <a href="" class="item home">HOME </a>/
          <a href="" class=" item men">MEN </a>/
          <a href="" class="item new active">NEW ARRIVALS </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Link_category"
}
</script>

<style scoped lang="scss">
.section__new-products {
  background:#F8F3F4;
  padding: 65px 0;
  .section__content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1.title {
      font-size: 24px;
      line-height: 29px;
      color: #F16D7F;
      @media (max-width:768px) {
        display: none;
      }
    }
    .item {
      font-weight: 900;
      font-size: 14px;
      color: #636363;
      transition: 0.5s;

    }
    .item:hover {
      color: #b8b8b8;
      transition: 0.5s;
    }
    .item.active {
      color: #F16D7F;

    }
    .item:hover.active {
      color: #ffb8c3;

    }
  }
}

</style>