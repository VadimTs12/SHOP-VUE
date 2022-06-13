
import Vuex from 'vuex'
import products from './modules/products';
import cart from './modules/cart';



const store = new Vuex.Store({
  modules: {
    products,
    cart,
  },
});
export default store;
