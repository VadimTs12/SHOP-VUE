<template>
  <Header/>
  <main class="main flex-shrink-0">
    <Slide/>
    <Delivery/>
    <Subscribe/>
  </main>
  <Footer/>
</template>

<script>
import Header from "@/components/Header.vue";
import Slide from "@/components/Slide";
import Delivery from "@/components/Delivery.vue";
import Subscribe from "@/components/Subscribe.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "Product",
  components: {
    Header,
    Slide,
    Delivery,
    Subscribe,
    Footer
  },


}
</script>

<style scoped>

</style>