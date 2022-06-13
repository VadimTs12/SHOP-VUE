<template>
  <Header/>
  <main class="main flex-shrink-0">
    <Cart_Products/>
  </main>
  <Footer/>
</template>

<script>
import Header from "@/components/Header.vue";
import Cart_Products from "../components/Cart_Products";
import Footer from "@/components/Footer.vue";

export default {
  name: "Cart",
  components: {
    Header,
    Cart_Products,
    Footer,
  }
}
</script>

<style scoped>

</style>