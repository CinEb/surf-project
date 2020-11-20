import Vue from 'vue';
import VueRouter from 'vue-router';

import vMainPage from '../components/pages/main-page.vue';
import vCart from '../components/cart/cart.vue';
import vTravel from '../components/travel-section/travel-section.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {selector: to.hash}
        } else {
            return {x: 0, y: 0}
        }
    },
    routes:[
        {
            path: '/surf-project/',
            name: 'mainPage',
            component: vMainPage,
        },
        {
            path: '/surf-project/cart',
            name: 'cart',
            component: vCart,
            props: true
        },
        // {
        //     path: '/travel',
        //     name: 'travel',
        //     component: vMainPage,
        //     props: true
        // },

    ]
});

export default router;