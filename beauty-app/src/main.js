import Vue from 'vue';
// import Vant from 'vant';
// import 'vant/lib/index.css';
import { Button } from 'vant';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/js/rem';
import './assets/css/common.scss';
import './assets/font/iconfont.css';

Vue.use(Button);

Vue.config.productionTip = false;

// Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
