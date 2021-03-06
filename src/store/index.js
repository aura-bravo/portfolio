import Vue from "vue";
import Vuex from "vuex";
import data from "../../public/assets/data.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: data,
    projectIndex: 0,
    isMenuOpened: false
  },
  mutations: {
    toggleMenu(state, payload) {
      state.isMenuOpened = payload;
    },
  },
  actions: {},
  modules: {},
});
