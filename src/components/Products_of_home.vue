<template>
  <Products/>
  <div class="all__products">
    <router-link to="/catalog" class="all__product">
      Browse All Product
    </router-link>
  </div>
</template>

<script>
import Products from "@/components/Products";
export default {
  name: "Products_of_home",
  components: {Products}
}
</script>

<style scoped lang="scss">

.all__products {
a {
  border: 1px solid #F26376;
  color: #F26376;
  padding: 10px;
  background: #ffffff;
  transition: 0.5s;
}

display: flex;
justify-content: center;

}

.all__products a:hover {
  background: #F26376;
  color: #ffffff;
  transition: 0.5s;
}
</style>