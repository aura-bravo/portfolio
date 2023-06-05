import Vue from 'vue';
import Vuex from 'vuex';
import data from '../../public/assets/data.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: data,
    projectIndex: 0,
    isMenuOpened: false,
    showProject: true,
    transitioning: false
  },
  mutations: {
    toggleMenu(state, payload) {
      state.isMenuOpened = payload;
    },
    toggleProjectVisibility(state, payload) {
      state.showProject = payload;
    },
    toggleTransitionState(state, payload) {
      state.transitioning = payload;
    }
  },
  actions: {},
  modules: {}
});
