import Vue from 'vue'
import VueRouter from 'vue-router'

import vMainPage from '../components/pages/main-page.vue'
import vCart from '../components/cart/cart.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to) {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: vMainPage
    },
    {
      path: '/cart',
      name: 'cart',
      component: vCart,
      props: true
    }
  ]
})

export default router
