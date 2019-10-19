import Vue from 'vue';
import Router from 'vue-router';
import Movie from './views/Movie.vue';
import Music from './views/Music.vue';
import Book from './views/Book.vue';
import Picture from './views/Picture.vue';
import Moviedetail from './views/Moviedetail.vue';
import Musicdetail from './views/Musicdetail.vue';
import PictureDetail from './views/PictureDetail.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'movie',
      component: Movie,
    },
    {
      path: '/movie/moviedetail',
      name: 'moviedetail',
      component: Moviedetail,
    },
    {
      path: '/music',
      name: 'music',
      component: Music,
    },
    {
      path:'/music/musicdetail',
      name:'musicdetail',
      component:Musicdetail,
    },
    {
      path: '/book',
      name: 'book',
      component: Book,
    },
    {
      path: '/picture',
      name: 'picture',
      component: Picture,
    },
    {
      path: '/picture/picturedetail',
      name: 'picturedetail',
      component: PictureDetail,
    },
  ],
});
