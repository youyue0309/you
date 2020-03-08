import Vue from 'vue';
// import Vant from 'vant';
// import 'vant/lib/index.css';
import '@/mock/mock';
import { SubmitBar, Card, GoodsAction, GoodsActionIcon, GoodsActionButton, PullRefresh, List, Row, Col, NavBar, Toast, CellGroup, Field, Button, Tab, Tabs } from 'vant';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/js/rem';
import './assets/css/common.scss';
import './assets/font/iconfont.css';

Vue.use(SubmitBar).use(Card).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(PullRefresh).use(List).use(Row).use(Col).use(NavBar).use(Toast).use(CellGroup).use(Field).use(Tab).use(Tabs).use(Button);

Vue.config.productionTip = false;

// Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
