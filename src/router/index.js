import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PracticeView from '../views/PracticeView.vue'
import AboutView from '../views/AboutView.vue'
import GameDetail from '../views/GameDetail.vue'
import ShopView from '../views/ShopView.vue'
import CartView from '../views/CartView.vue'
import PesananSukses from '../views/PesananSukses.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/practice',
    name: 'PracticeView',
    component: PracticeView
  },

  {
    path: '/shop',
    name: 'shop-view',
    component: ShopView
  },
  {
    path: '/game/:id',
    name: 'game-detail',
    component: GameDetail
  },
  {
    path: '/cart',
    name: 'cart-view',
    component: CartView
  },
  {
    path: '/pesanan-sukses',
    name: 'pesanan-sukses',
    component: PesananSukses
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
