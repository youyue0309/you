import Vue from 'vue';
import VueRouter from 'vue-router';
// import Main from '../views/Main.vue';
// import Mine from '../views/Mine.vue';
// import Buycar from '../views/Buycar.vue';
// import Find from '../views/Find.vue';
let Main = ()=> import('../views/Main.vue');
let Mine = ()=> import('../views/Mine.vue');
let Buycar = ()=> import('../views/Buycar.vue');
let Find = ()=> import('../views/Find.vue');

import Detail from '../views/Detail.vue';
import CommonFooter from '../components/CommonFooter.vue';
import Error from '../views/Error.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    // component: Main,
    components: {
      default: Main,
      'common-footer': CommonFooter
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/find',
    name: 'find',
    // component: Find,
    components: {
      default: Find,
      'common-footer': CommonFooter
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/buycar',
    name: 'buycar',
    // component: Buycar,
    components: {
      default: Buycar,
      'common-footer': CommonFooter
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/mine',
    name: 'mine',
    // component: Mine,
    components: {
      default: Mine,
      'common-footer': CommonFooter
    },
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
  },
  {
    path: '*',
    component: Error
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
