export default {
    state: {
        cartProducts: [],
        cartCount: 0,

    },
    getters: {
        allCartProducts(state) {
            return state.cartProducts
        },
        cartCount(state) {
            return state.cartCount
        },
    },

    mutations: {
        ADD_PRODUCT(state, item) {
            let find = state.cartProducts.find(el => el.id === item.id);
            if (find) {
                find.quantity++;
                state.cartCount++
            } else {
                const prod = Object.assign({quantity: 1}, item);
                state.cartProducts.push(prod)
                state.cartCount++
            }
        },

        REMOVE_PRODUCT(state, item) {
            if (item.quantity > 1) {
                item.quantity--;
                state.cartCount--
            } else {
                state.cartProducts.splice(state.cartProducts.indexOf(item), 1);
                state.cartCount--
            }

        },

        DELETE_PRODUCT(state, item) {
            state.cartProducts.splice(state.cartProducts.indexOf(item), 1);
            state.cartCount = 0
        },
    },

    actions: {
        addProduct(context, prod) {
            context.commit('ADD_PRODUCT', prod)
        },
        removeProduct(context, prod) {
            context.commit('REMOVE_PRODUCT', prod)
        },
        deleteProduct(context, prod) {
            context.commit('DELETE_PRODUCT', prod)
        },
    },
}