import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main.vue';
import Mine from '../views/Mine.vue';
import Buycar from '../views/Buycar.vue';
import Find from '../views/Find.vue';
import Detail from '../views/Detail.vue';
import CommonFooter from '../components/CommonFooter.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    // component: Main,
    components: {
      default: Main,
      'common-footer': CommonFooter
    }
  },
  {
    path: '/find',
    name: 'find',
    // component: Find,
    components: {
      default: Find,
      'common-footer': CommonFooter
    }
  },
  {
    path: '/buycar',
    name: 'buycar',
    // component: Buycar,
    components: {
      default: Buycar,
      'common-footer': CommonFooter
    }
  },
  {
    path: '/mine',
    name: 'mine',
    // component: Mine,
    components: {
      default: Mine,
      'common-footer': CommonFooter
    }
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
