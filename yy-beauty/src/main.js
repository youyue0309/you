import Vue from 'vue';
import { Dialog, Upload, Form, FormItem, Table, TableColumn, Pagination, InfiniteScroll, Col, Row, Icon, CarouselItem, Carousel, Button, Select, Input, Message, Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/css/common.scss';

Vue.use(InfiniteScroll).use(Col).use(Row).use(Icon).use(CarouselItem).use(Carousel).use(Button).use(Dialog).use(Upload).use(FormItem).use(Form).use(Table).use(TableColumn).use(Input).use(Pagination).use(Submenu).use(MenuItem).use(MenuItemGroup).use(Menu);
Vue.component(Message.name, Message);
Vue.prototype.$message = Message;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
