<template>
  <div class="search__form">
    <form action="" class="search-form" id="#form">
      <input type="text" placeholder="Search..." class="search-field" v-model="searchValueInput">
      <button class="btn-search" @click.prevent="search(searchValueInput)"><i class="fas fa-search"></i></button>
      <div class="search"></div>
      <div class="searchClose"></div>
    </form>
  </div>
  <section class="section section__filter">
    <div class="_container">
      <div class="section__content">
        <div class="filter__box">
          <div class="filter" @click=" this.active = !this.active " :class="{ '_active': active }">
            <p class="filter__title">FILTER</p>
            <p class="filter__icon"><span></span></p>
          </div>
        </div>
        <div class="sort__box">
          <div class="sort">
            <div class="item" @click=" this.activeTrendingNow = !this.activeTrendingNow "
                 :class="{ '_active': activeTrendingNow }" id="trending">
              <p class="sort__title">TRENDING NOW</p>
              <p class="sort__icon"><span></span> <span></span></p>
            </div>
            <div class="item" @click=" this.activeSize = !this.activeSize " :class="{ '_active': activeSize }"
                 id="size">
              <p class="sort__title"> SIZE</p>
              <p class="sort__icon"><span></span> <span></span></p>

            </div>
            <div class="item" id="price">
                 <select v-model="selected" @click.prevent="selectedSort(selected)">
                <option disabled value="default">Сортировать по цене</option>
                <option value="ascending">по возростанию</option>
                <option value="descending">по убыванию</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Filter",
  data() {
    return {
      searchValueInput: "",
      selected: "default",
      active: false,
      activeTrendingNow: false,
      activeSize: false,

    }
  },
  computed: {
    ...mapGetters(['searchValue', 'sortSelected', 'filter']),


  },
  methods: {
    ...mapActions([
      'getSearch', 'getSortSelected', 'getSort'
    ]),
    search(value) {
      this.getSearch(value)
    },
    selectedSort(value) {
      this.getSortSelected(value)
      this.getSort()

    }
  }

}


</script>

<style scoped lang="scss">
.btn-search {
  background: transparent !important;
  border: none;
  color: #1b3400;
  font-size: 1.2em;
  position: absolute;
  bottom: 10px;
  right: 0;

}

.search__form {
  position: relative;
  margin: 0 auto;
  width: 90%;
}

.search-field:focus {
  outline: none;
}

.search-field {
  box-sizing: border-box;
  /*max-width: 200px;*/
  width: 100%;
  color: #2c2c2c;
  padding: 10px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #0c2c00;
}

.section__filter {
  .section__content {
    display: flex;
    align-items: center;
    padding: 50px 0;
    font-weight: 800;

    .filter__box {
      width: 100%;
      @media (max-width: 480px) {
        width: 20%;
      }

      .filter {
        display: flex;
        width: 100px;

        .filter__title {
          cursor: pointer;
          @media (max-width: 480px) {
            display: none;
          }
        }
      }

      .filter__icon {
        z-index: 5;
        display: block;
        position: relative;
        width: 30px;
        height: 15px;
        cursor: pointer;
        margin-left: 20px;
        @media (max-width: 480px) {
          margin-left: 0px;
        }
      }

      .filter__icon span,
      .filter__icon::before,
      .filter__icon::after {
        left: 0;
        position: absolute;
        height: 20%;
        width: 100%;
        transition: all 0.3s ease 0s;
        background-color: rgb(0, 0, 0);
        border-radius: 50px;
      }

      .filter__icon::before {
        width: 100%;
      }

      .filter__icon span {
        width: 50%;
      }

      .filter__icon::after {
        width: 10%;
      }

      .filter__icon::before,
      .filter__icon::after {
        content: "";
      }

      .filter__icon::before {
        top: 0;
      }

      .filter__icon::after {
        bottom: 0;
      }

      .filter__icon span {
        top: 40%;
      }

      .filter._active .filter__icon::before {
        width: 10%;
      }

      .filter._active .filter__icon::after {
        width: 100%;
      }
    }

    .sort__box {
      width: 100%;

      .sort {
        justify-content: space-between;
        display: flex;
        color: #6f6e6e;

        .item {
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          width: 100%;

          .sort__title {
            cursor: pointer;
            @media (max-width: 760px) {
              font-size: 10px;
            }
          }

          .sort-price {
            position: absolute;
            transform: translateY(-20%);

          }
        }

        .sort__icon {
          z-index: 5;
          display: flex;
          position: relative;
          width: 20px;
          height: 15px;
          cursor: pointer;
          margin-left: 10px;
          padding-top: 5px;
          transform: rotatex(0deg);
          transform-origin: 0px 6px;
          transition: 0.3s;
        }

        .sort__icon span {
          display: block;
          height: 10%;
          width: 50%;
          background-color: #6f6e6e;
          border-radius: 50px;
        }
      }

      .sort__icon span:nth-of-type(1) {
        transform: rotatez(45deg) translateX(2px);
      }

      .sort__icon span:nth-of-type(2) {
        transform: rotatez(315deg) translateX(-2px);
      }

      .item._active .sort__icon {
        transform: rotatex(180deg);
        transition: 0.3s;
      }
    }
  }
}

</style>