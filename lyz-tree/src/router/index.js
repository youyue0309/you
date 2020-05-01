import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Category from '../views/Category.vue';
import Cart from '../views/Cart.vue';
import Mine from '../views/Mine.vue';
import Order from '../views/Order.vue';
import Province from '../views/Province.vue';
import Admin from '../views/Admin.vue';
import User from '../views/User.vue';
import Hello from '../views/Hello.vue';
import Shop from '../views/Shop.vue';
import Addproduct from '../views/Addproduct.vue';
import Update from '../views/Update.vue';
import CommonHeader from '../components/CommonHeader.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home,
    components: {
      default: Home,
      "common-header": CommonHeader
    }
  },
  {
    path: '/category',
    name: 'category',
    // component: Category,
    components: {
      default: Category,
      "common-header": CommonHeader
    }
  },
  {
    path: '/cart',
    name: 'cart',
    // component: Cart,
    components: {
      default: Cart,
      "common-header": CommonHeader
    }
  },
  {
    path: '/mine',
    name: 'mine',
    // component: Mine,
    components: {
      default: Mine,
      "common-header": CommonHeader
    }
  },
  {
    path: '/order',
    name: 'order',
    // component: Order,
    components: {
      default: Order,
      "common-header": CommonHeader
    }
  },
  {
    path: '/province',
    name: 'province',
    // component: Province,
    components: {
      default: Province,
      "common-header": CommonHeader
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin, children: [
      {
        path: '/admin/',
        name: 'hello',
        component: Hello
      },
      {
        path: '/admin/user',
        name: 'user',
        component: User
      },
      {
        path: '/admin/shop',
        name: 'shop',
        component: Shop
      },
      {
        path: '/admin/addproduct',
        name: 'addproduct',
        component: Addproduct
      },
      {
        path: '/admin/update',
        name: 'update',
        component: Update
      },
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
