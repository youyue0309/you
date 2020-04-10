import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Category from '../views/Category.vue';
import Cart from '../views/Cart.vue';
import Mine from '../views/Mine.vue';
import Order from '../views/Order.vue';
import Province from '../views/Province.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/category',
    name: 'category',
    component: Category,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine,
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
  },
  {
    path: '/province',
    name: 'province',
    component: Province,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
