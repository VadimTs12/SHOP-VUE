<template>
  <section class="section section__products" v-cloak>
    <div class="_container">
      <h1 class="title">
        Fetured Items
      </h1>
      <p class="subtitle">
        Shop for items based on what we featured in this week
      </p>
      <div class="section__content-products row">
        <div v-for="product_Item in filter" :key="product_Item.id"
             class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <Product_Item :product_Item="product_Item"/>
        </div>


      </div>
    </div>
  </section>
</template>

<script>
import Product_Item from '@/components/Product_Item.vue';
import {mapActions, mapGetters, mapState} from 'vuex'

export default {
  components: {
    Product_Item,
  },
  computed: {
    ...mapGetters(['filter']),
    ...mapState(['searchValue']),
  },
  async mounted() {
    await this.fetchProducts()
  },
  methods: {
    ...mapActions(['fetchProducts'])
  }
}
</script>

<style lang="scss" scoped>
[v-cloak] {
  display: none;
}

.section__products {
  padding-bottom: 65px;

  .title {
    font-size: 30px;
    line-height: 36px;
    color: #222222;
    text-align: center;
  }

  .subtitle {
    font-size: 14px;
    line-height: 17px;
    color: #9f9f9f;
    text-align: center;
  }

  .section__content-products {
    padding: 20px 0;
  }

}

</style>