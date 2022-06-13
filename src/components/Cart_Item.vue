<template>
  <div class="cart__product-item" v-if="cartItem">
    <div class="cart__product-image">
      <img :src="cartItem.img" alt="" class="image__cart">
    </div>
    <div class="cart__product-content">
      <p class="title">
        {{ cartItem.title }}
      </p>
      <p class="price__block">
        Price: <span class="price">{{ cartItem.price }}</span> <br>
        All Price:  <span class="price">{{ cartItem.price * cartItem.quantity}}</span>
      </p>
      <p class="color__block">
        Color: <span class="color">Red</span>
      </p>
      <p class="size__block">
        Size: <span class="size">Xl</span>
      </p>
      <p class="quantity__block">
        Quantity: <span class="quantiy">{{ cartItem.quantity }}</span>
      </p>
    </div>
    <button class="close" @click="deleteProduct(cartItem)">
      <svg width="13" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7.416 6.004l4.3-4.29a1.004 1.004 0 10-1.42-1.42l-4.29 4.3-4.29-4.3a1.004 1.004 0 00-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 00.325 1.639 1 1 0 001.095-.219l4.29-4.3 4.29 4.3a1.002 1.002 0 001.639-.325 1 1 0 00-.22-1.095l-4.3-4.29z"
            fill="#6F6E6E"/>
      </svg>
    </button>

  </div>
  <div class="cart__btn">
    <button class="btn__add button"  @click="addProduct(cartItem)">ADD</button>
    <button class="btn__remove button" @click="removeProduct(cartItem)">REMOVE</button>
  </div>
</template>

<script>

import {mapActions} from "vuex";

export default {
  name: "Cart_Item",
  props: ['cartItem'],

  methods: {
    ...mapActions(["addProduct", 'removeProduct', 'deleteProduct'])
  }
}
</script>

<style scoped lang="scss">
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

.button {
  border: 1px solid #ccc;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
  @media (max-width: 480px) {
    padding: 5px;
    font-size: 10px;
  }
}
</style>