import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import store from './store';
import headerModule from './modules/header-section'
import surfModule from './modules/surf-section'
import shopModule from './modules/shop-section'
import cart from './modules/cart'

// const localStore = {...store, ...shopModule}

export default new Vuex.Store({
    modules: {
        store,
        headerModule,
        surfModule,
        shopModule,
        cart
        // localStore
    }
});