<template>
  <header class="header">
    <div class="_container">
      <nav class="navbar navbar-expand-lg">
        <div class="d-flex justify-content-between w-100">
          <ul class="navbar-nav-left d-flex align-items-center justify-content-between ">
            <li class="logo">
              <router-link to="/"><img src="../assets/img/logo.png" alt=""></router-link>

            </li>
            <li class="search__form">
              <div class="search__form">

              </div>
            </li>
          </ul>
          <ul class="navbar-nav-right d-flex align-items-center justify-content-between ">
            <li class="menu">
              <div class="menu__icon" @click=" this.activator = !this.activator " :class="{ '_active': activator }">
                <span></span>
              </div>
            </li>
            <li class="user">
              <a class="user__link" href="#">
                <img src="../assets/img/user.png" alt="">
              </a>
            </li>
            <li class="buy">
              <div class="cart__count" v-if="cartCount > 0" :class ="{'active': !showCart }" > {{ cartCount }}</div>
              <router-link to="/cart"><img src="../assets/img/buy.png" alt=""></router-link>


            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="menu__block" :class="{ '_active': activator }">
      <div class="close">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M7.4158 6.00409L11.7158 1.71409C11.9041 1.52579 12.0099 1.27039 12.0099 1.00409C12.0099 0.73779 11.9041 0.482395 11.7158 0.294092C11.5275 0.105788 11.2721 0 11.0058 0C10.7395 0 10.4841 0.105788 10.2958 0.294092L6.0058 4.59409L1.7158 0.294092C1.52749 0.105788 1.2721 -1.9841e-09 1.0058 0C0.739497 1.9841e-09 0.484102 0.105788 0.295798 0.294092C0.107495 0.482395 0.0017066 0.73779 0.0017066 1.00409C0.0017066 1.27039 0.107495 1.52579 0.295798 1.71409L4.5958 6.00409L0.295798 10.2941C0.20207 10.3871 0.127676 10.4977 0.0769072 10.6195C0.0261385 10.7414 0 10.8721 0 11.0041C0 11.1361 0.0261385 11.2668 0.0769072 11.3887C0.127676 11.5105 0.20207 11.6211 0.295798 11.7141C0.388761 11.8078 0.499362 11.8822 0.621222 11.933C0.743081 11.9838 0.873786 12.0099 1.0058 12.0099C1.13781 12.0099 1.26852 11.9838 1.39038 11.933C1.51223 11.8822 1.62284 11.8078 1.7158 11.7141L6.0058 7.41409L10.2958 11.7141C10.3888 11.8078 10.4994 11.8822 10.6212 11.933C10.7431 11.9838 10.8738 12.0099 11.0058 12.0099C11.1378 12.0099 11.2685 11.9838 11.3904 11.933C11.5122 11.8822 11.6228 11.8078 11.7158 11.7141C11.8095 11.6211 11.8839 11.5105 11.9347 11.3887C11.9855 11.2668 12.0116 11.1361 12.0116 11.0041C12.0116 10.8721 11.9855 10.7414 11.9347 10.6195C11.8839 10.4977 11.8095 10.3871 11.7158 10.2941L7.4158 6.00409Z"
              fill="#6F6E6E"/>
        </svg>
      </div>
      <p class="menu__title">Menu</p>
      <div class="block__item">
        <a href="">
          <p class="title">MAN</p>
        </a>
        <ul class="block__item-list">
          <li class="list__item">
            <a href="" class="list__item-link">
              Accessories
            </a>
          </li>
          <li class="list__item">
            <a href="" class="list__item-link">
              Bags
            </a>
          </li>
          <li class="list__item">
            <a href="" class="list__item-link">
              Denim
            </a>
          </li>
          <li class="list__item">
            <a href="" class="list__item-link">
              T-Shirts
            </a>
          </li>
        </ul>
      </div>
      <div class="block__item">
        <a href="">
          <p class="title">WOMAN</p>
        </a>
        <ul class="block__item-list">
          <li class="list__item">
            <a href="" class="list__item-link">
              Accessories
            </a>
          </li>
          <li class="list__item">
            <a href="" class="list__item-link">
              Jackets & Coats
            </a>
          </li>
          <li class="list__item">
            <a href="" class="list__item-link">
              Polos
            </a>
          </li>
          <li class="list__item">
            <a href="" class="list__item-link">
              T-Shirts
            </a>
          </li>
          <li class="list__item">
            <a href="" class="list__item-link">
              Shirts
            </a>
          </li>
        </ul>
      </div>
      <div class="block__item">
        <a href="">
          <p class="title">KIDS</p>
        </a>
        <ul class="block__item-list">
          <li class="list__item">
            <a href="" class="list__item-link">
              Accessories
            </a>
          </li>
          <li class="list__item">
            <a href="" class="list__item-link">
              Jackets & Coats
            </a>
          </li>
          <li class="list__item">
            <a href="" class="list__item-link">
              Polos
            </a>
          </li>
          <li class="list__item">
            <a href="" class="list__item-link">
              T-Shirts
            </a>
          </li>
          <li class="list__item">
            <a href="" class="list__item-link">
              Shirts
            </a>
          </li>
          <li class="list__item">
            <a href="" class="list__item-link">
              Bags
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>

</template>

<style lang="scss">
header {
  background-color: #222222;
  position: fixed;
  width: 100%;
  z-index: 1000;
  box-shadow: #22222270 0 3px 32px 4px;


  ._container {
    position: relative;
    z-index: 2;
  }



  .navbar-nav-right {
    .user {
      margin: 0 20px;
    }
    .buy {
      position: relative;
      .cart__count {
        right: -10px;
        top: -10px;
        width: 20px;
        height: 20px;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        border-radius: 50px;
        background: #ffc7cf;
        position: absolute;
        display: none;
      }
      .cart__count.active {
        display: flex;
      }
    }

    @media (max-width: 768px) {
      justify-content: end !important;
    }

    .user,
    .buy {
      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  .menu {
    .menu__icon {
      z-index: 5;
      display: block;
      position: relative;
      width: 30px;
      height: 21px;
      cursor: pointer;
    }

    .menu__icon span,
    .menu__icon::before,
    .menu__icon::after {
      left: 0;
      position: absolute;
      height: 10%;
      width: 100%;
      transition: all 0.3s ease 0s;
      background-color: #fff;
    }

    .menu__icon::before,
    .menu__icon::after {
      content: "";
    }

    .menu__icon::before {
      top: 0;
    }

    .menu__icon::after {
      bottom: 0;
    }

    .menu__icon span {
      top: 50%;
      transform: scale(1) translate(0px, -50%);
    }

    .menu__icon._active span {
      transform: scale(0) translate(0px, -50%);
    }

    .menu__icon._active::before {
      top: 50%;
      transform: rotate(-45deg) translate(0px, -50%);
    }

    .menu__icon._active::after {
      bottom: 50%;
      transform: rotate(45deg) translate(0px, 50%);
    }
  }

  .menu__block {
    background: #ffffff;
    position: absolute;
    top: 55px;
    right: 0;
    transform: translateX(120%);
    transition: 0.5s;
    padding: 20px;
    z-index: 1;

    .menu__title {
      padding-left: 25px;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    p.title {
      font-size: 14px;
      color: #f16d7f;
      padding-left: 25px;
      margin-bottom: 10px;
    }

    .block__item-list {
      padding-left: 50px;

      li {
        margin-bottom: 10px;

        a {
          color: #6f6e6e;
        }
      }
    }

    .close {
      display: flex;
      justify-content: end;
    }
  }

  .menu__block._active {
    transform: translateX(0);
  }
}

</style>


<script>
import {mapGetters} from "vuex";

export default {
  name: "Headers",
  data() {
    return {
      activator: false,
      showCart: false,
    }
  },
  computed: {
    ...mapGetters(['cartCount']),
  }
}
</script>