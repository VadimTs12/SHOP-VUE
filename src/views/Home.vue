<template>
  <Header/>
  <main class="main flex-shrink-0">
    <Main_screen/>
    <Categories/>
    <Products_of_home/>
    <Delivery/>
    <Subscribe/>
  </main>
  <Footer/>
</template>

<script>

import Header from "@/components/Header.vue";
import Main_screen from "@/components/Main_screen.vue";
import Categories from "@/components/Categories.vue";
import Products_of_home from "@/components/Products_of_home";
import Delivery from "@/components/Delivery.vue";
import Subscribe from "@/components/Subscribe.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Main_screen,
    Categories,
    Products_of_home,
    Delivery,
    Subscribe,
    Footer,
  },
  methods: {},
};
</script>
