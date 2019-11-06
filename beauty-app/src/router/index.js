import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main.vue';
import Mine from '../views/Mine.vue';
import Buycar from '../views/Buycar.vue';
import Find from '../views/Find.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {
    path: '/find',
    name: 'find',
    component: Find,
  },
  {
    path: '/buycar',
    name: 'buycar',
    component: Buycar,
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
