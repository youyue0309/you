import Vue from 'vue';
import { Card, Menu, Submenu, MenuItem, MenuItemGroup, Button, Select, Message, Carousel, CarouselItem,Icon, Row, Col, } from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/css/common.scss';

Vue.use(Card).use(Submenu).use(MenuItem).use(MenuItemGroup).use(Menu).use(Icon).use(Row).use(Col).use(Button).use(Carousel).use(CarouselItem);
Vue.component(Message.name, Message);
Vue.prototype.$message = Message;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
