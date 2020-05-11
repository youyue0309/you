import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Cart from '../views/Cart.vue';
import Order from '../views/Order.vue';
import Shop from '../views/Shop.vue';
import Admin from '../views/Admin.vue';
import User from '../views/User.vue';
import Hello from '../views/Hello.vue';
import Shopmsg from '../views/Shopmsg.vue';
import Addproduct from '../views/Addproduct.vue';
import Detail from '../views/Detail.vue';
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
    path: '/login',
    name: 'login',
    // component: Login
    components: {
      default: Login,
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
    path: '/detail',
    name: 'detail',
    component: Detail,
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
    path: '/shop',
    name: 'shop',
    // component: Shop,
    components: {
      default: Shop,
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
        path: '/admin/shopmsg',
        name: 'shopmsg',
        component: Shopmsg
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
