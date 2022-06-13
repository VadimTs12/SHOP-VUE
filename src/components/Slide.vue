<template>
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner" v-if="prod">
      <div class="carousel-item active" data-bs-interval="10000">
        <img :src="prod.img" class="d-block " alt="...">
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img :src="prod.img" class="d-block " alt="...">
      </div>
      <div class="carousel-item">
        <img :src="prod.img" class="d-block " alt="...">
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Предыдущий</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Следующий</span>
      </button>
    </div>
    <div v-else > не найдено </div>


  </div>

</template>

<script>


import {mapActions, mapGetters} from "vuex";
export default {
  name: "Slide",
  computed: {
    ...mapGetters(['singleProduct']),
    prod () {
      return this.singleProduct(+this.$route.params.id);
    }
  },

  async mounted() {
    await this.fetchProducts()
  },

  methods: {
    ...mapActions(['fetchProducts']),
  }
}
</script>

<style lang="scss" scoped>
.slide {
  position: relative;
  z-index: 4;
  height: 700px;
.carousel-control-next-icon, .carousel-control-prev-icon {
  width: 2em;
  border: 1px solid #ccc;
}

.carousel-control-next-icon {
  background: #ccc url("data:image/svg+xml;charset=UTF-8, %3csvg width='9' height='14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M.995 12l5-5-5-5 1-2 7 7-7 7-1-2z' fill='%23000'/%3e%3c/svg%3e") center / 50% no-repeat;

}

.carousel-control-prev-icon {

  background: #ccc url("data:image/svg+xml;charset=UTF-8, %3csvg width='9' height='14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.995 2l-5 5 5 5-1 2-7-7 7-7 1 2z' fill='%23000'/%3e%3c/svg%3e") center / 50% no-repeat;
}

.carousel-control-next:hover .carousel-control-next-icon{
  background: #ccc url("data:image/svg+xml;charset=UTF-8, %3csvg width='9' height='14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M.995 12l5-5-5-5 1-2 7 7-7 7-1-2z' fill='%23F16D7F'/%3e%3c/svg%3e") center / 50% no-repeat;

}

.carousel-control-prev:hover  .carousel-control-prev-icon{
  background: #ccc url("data:image/svg+xml;charset=UTF-8, %3csvg width='9' height='14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.995 2l-5 5 5 5-1 2-7-7 7-7 1 2z' fill='%23F16D7F'/%3e%3c/svg%3e") center / 50% no-repeat;
}

.carousel-item {
  background:#f7f7f7;
  text-align: center;
}
.d-block {
  margin: 0 auto;
  width: 50%;
@media (max-width:768px) {
  width: 100%;
}
}
}
</style>