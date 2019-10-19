import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "电影",
    color: "#ff0036",
    photoList:[]
  },
  mutations: {
    change(state, arg) {
      state.title = arg.title;
      state.color = arg.color;
    },
    addPhoto(state,list){
      state.photoList=list;
    }
  },
  actions: {

  },
});
