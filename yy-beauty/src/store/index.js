import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      userName:'登录/注册'
    }
  },
  mutations: {
    changeLogin(state, status){
      state.userInfo = status;
    }
  },
  actions: {
    loginAction({commit}, user){
      commit('changeLogin', user)
    }
  },
  modules: {
  },
});
