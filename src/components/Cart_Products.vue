<template>
  <section class="section section__cart">
    <div class="_container">
      <div v-if="allCartProducts.length > 0" class="section__content row">
        <div v-for="cartItem in allCartProducts"
             :key="cartItem.id"
             class="cart__products col-md-12 col-lg-6">
          <Cart_Item :cartItem="cartItem"/>


        </div>
      </div>
      <div v-else>
        <p class="navbar-item" href="">
          Корзина пуста
        </p>
      </div>
      <div class="cart__data col-md-12 col-lg-6">

      </div>
    </div>


  </section>
</template>

<script>

import Cart_Item from "./Cart_Item";
import {mapGetters} from "vuex";

export default {
  name: "Cart_Products",
  components: {
    Cart_Item,
  },
  computed: mapGetters(['allCartProducts']),



}
</script>

<style scoped lang="scss">
.section__cart {

  .section__content {
    padding: 65px 0;
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
    }

    .cart__products {

    }

    .cart__product-item {
      width: 100%;
      box-shadow: 2px 10px 10px #ccc;
      display: flex;

      margin-bottom: 30px;
      position: relative;

      .cart__product-image {
        max-width: 220px;
        width: 100%;
        margin-right: 20px;
        @media (max-width: 768px) {
          margin-right: 10px;
        }

        img {
          width: 100%;
          height: auto;
        }
      }
    }

    .cart__product-content {
      padding: 20px;
      margin-right: 20px;
      @media (max-width: 768px) {
        padding: 10px;
      }

      p {
        margin-bottom: 10px;
        @media (max-width: 768px) {
          font-size: 12px;
        }
      }

      .title {
        font-size: 24px;
        margin-bottom: 30px;
        @media (max-width: 768px) {
          font-size: 16px;
        }

      }

      .price__block {


      }

      .price {
        color: #EF5B70;
      }

      .color__block {
      }

      .color {
      }

      .size__block {
      }

      .size {
      }

      .quantity__block {
      }

      .quantiy {
      }
    }

    .close {
      position: absolute;
      right: 10px;
      top: 10px;
      display: flex;
      align-items: flex-start;
    }

    .cart__btn {
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
    }




  }
}
</style>