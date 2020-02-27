import Vue from 'vue';
// import Vant from 'vant';
// import 'vant/lib/index.css';
import '@/mock/mock';
import { Toast, CellGroup, Field, Button, Tab, Tabs } from 'vant';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/js/rem';
import './assets/css/common.scss';
import './assets/font/iconfont.css';

Vue.use(Toast).use(CellGroup).use(Field).use(Tab).use(Tabs).use(Button);

Vue.config.productionTip = false;

// Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
