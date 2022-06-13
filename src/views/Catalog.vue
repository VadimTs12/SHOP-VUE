<template>
  <Header/>
  <main class="main">
    <Link_category/>
    <Filter/>
    <Products_of_catalog/>
    <Delivery/>
    <Subscribe/>
  </main>
  <Footer/>
</template>

<script>
import Header from "@/components/Header.vue";
import Link_category from "@/components/Link_category";
import Filter from "@/components/Filter";
import Delivery from "@/components/Delivery.vue";
import Subscribe from "@/components/Subscribe.vue";
import Footer from "@/components/Footer.vue";
import Products_of_catalog from "@/components/Products_of_catalog";

export default {
  name: "Catalog",
  components: {
    Products_of_catalog,
    Header,
    Link_category,
    Filter,
    Delivery,
    Subscribe,
    Footer,
  }
}
</script>

<style scoped>

</style>