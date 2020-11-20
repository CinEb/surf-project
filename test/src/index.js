import './js/common.js'
import './assets/scss/style.scss'
// import './assets/css/animate.css/animate.min.css'

//Types of import file
// import 'vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import Vue from 'vue'
// window.Vue = require('vue')

// import Vue from 'vue';
// export const eventBus = new Vue();

import VueSmoothScroll from 'vue2-smooth-scroll';

window.Vue = require('vue');
import store from './store';
import router from './router';
export const eventBus = new Vue();

Vue.use(VueSmoothScroll, {
    duration: 700,
    updateHistory: false,
})

//App
Vue.component('v-surf-app', require ('./components/v-surf-app.vue').default);
//Pages
Vue.component('main-page', require ('./components/pages/main-page.vue').default)
//Sections
Vue.component('header-section', require('./components/header-section/header-section.vue').default);
Vue.component('surf-section', require('./components/surf-section/surf-section.vue').default);
Vue.component('travel-section', require('./components/travel-section/travel-section.vue').default);
Vue.component('sleep-section', require('./components/sleep-section/sleep-section.vue').default);
Vue.component('shop-section', require('./components/shop-section/shop-section.vue').default);
//Components Global
Vue.component('header-slider-item', require('./components/slider/header-slider-item.vue').default);
Vue.component('text-box', require('./components/text-box.vue').default);
Vue.component('title-element', require('./components/title-element.vue').default);
Vue.component('info-block', require('./components/info-block.vue').default);
Vue.component('btn-element', require('./components/btn-element.vue').default);
Vue.component('travel-sleep-slider-item', require('./components/slider/travel-sleep-slider-item.vue').default);
Vue.component('stars-block', require('./components/stars-block.vue').default);
Vue.component('cart', require('./components/cart/cart.vue').default);
Vue.component('cart-link', require('./components/cart/cart-link.vue').default);
Vue.component('nav-block', require('./components/nav-block.vue').default);
//Components Surf-section
Vue.component('surf-map', require('./components/surf-section/surf-map.vue').default);
Vue.component('surf-slider', require('./components/surf-section/surf-slider.vue').default);


const app = new Vue({
    // data(){
    //     return{
    //         component: false,
    //     }
    // },
    router,
    store,
    el: '#app'
});