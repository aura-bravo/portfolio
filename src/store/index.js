import Vue from "vue";
import Vuex from "vuex";
import data from "../../public/assets/data.json"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: data,
    projectIndex: 0
  },
  mutations: {
    setProject(state, payload) {
      state.projectIndex = payload;
      console.log(state.projectIndex);
    }
  },
  actions: {},
  modules: {}
});
