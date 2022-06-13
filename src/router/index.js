import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Cart from "../views/Cart.vue";
import Product from "../views/Product.vue";
import Catalog from "../views/Catalog.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/Product",
    name: "Product",
    component: Product,
    children: [
      { path: ":id", component: Product},
    ],
  },
  {
    path: "/Catalog",
    name: "Catalog",
    component: Catalog,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
  // scrollBehavior(to, from, savedPosition) {
  //   if (to.hash) {
  //     return {
  //       selector: to.hash
  //     }
  //   }
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // }
});

export default router;
