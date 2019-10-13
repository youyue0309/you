import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Mine from './views/Mine';
import Test from './views/Test';
import Test1 from './views/Test1';
import Test2 from './views/Test2';
import Error from './views/Error'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias:'/c',
      beforeEnter: (to, from, next) => {
        // ...
        console.log('首页',to);
        console.log('首页',from);
        console.log('首页',next);
        next();
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path:'/mine',
      name:'mine',
      component:Mine,
      children:[
          {
            path:'test1',
            name:'test1',
            component:Test1
          },
          {
            path:'test2',
            name:'test2',
            component:Test2
          }
      ]
    },{
      path:'/test/:id/:name',
      name:'test',
      component:Test
    },{
      path:'/aaa',
      redirect:'/'
    }
    ,{
      path:'*',
      name:'error',
      component:Error
    }
  ],
});

router.beforeEach((to, from, next) => {
    // ...
    console.log(to);
    console.log(from);
    console.log(next);
    next();
})


export default router;