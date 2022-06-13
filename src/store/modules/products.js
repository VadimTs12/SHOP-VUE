export default {
    state: {
        products: [],
        searchValue: "",
        selected: "",
    },
    getters: {
        allProducts(state) {
            return state.products
        },
        singleProduct(state) {
            return (id) => {
                return state.products.find((item) => {
                    if (item.id === id) {
                        return item
                    }
                })
            }
        },
        searchValue(state) {
            return state.searchValue
        },
        sortSelected(state) {
            return state.selected
        },
        filter(state) {
            if (state.searchValue === '') {
                return state.products
            }
            let regExp = new RegExp(state.searchValue, 'i');
            return state.products.filter(el => regExp.test(el.title))

        }
    },

    actions: {
        async fetchProducts(context) {
            const res = await fetch(
                'https://raw.githubusercontent.com/VadimTs12/product-shop/master/products-shop.json'
            );
            const products = await res.json()
            context.commit('UPDATE_PRODUCTS', products)
        },
        getSearch({ commit }, value) {
            commit('SET_SEARCH', value)
        },
        getSortSelected({ commit }, value) {
            commit('SET_SORT_SELECTED', value)
        },
        getSort({ commit }) {
            commit('SORT_FILTER')
        }
    },

    mutations: {
        UPDATE_PRODUCTS(state, products) {
            state.products = products
        },
        SET_SEARCH(state, value) {
            state.searchValue = value
        },
        SET_SORT_SELECTED(state, value) {
            state.selected = value
        },
        SORT_FILTER(state) {
            if (state.selected == "ascending") {
                state.products.sort((a, b) => a.price - b.price)
            }
            if (state.selected == "descending") {
                state.products.sort((a, b) => b.price - a.price)
            }
        }
    },
}