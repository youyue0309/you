import Vue from 'vue';
import { Col, Row, Icon, CarouselItem, Carousel, Button, Select, Input, Message } from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/css/common.scss';

Vue.use(Col).use(Row).use(Icon).use(CarouselItem).use(Carousel).use(Button).use(Input);
Vue.component(Message.name, Message);
Vue.prototype.$message = Message;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
