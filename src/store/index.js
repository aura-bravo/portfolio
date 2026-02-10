import { createStore } from 'vuex'
import data from '../assets/data.json'

export default createStore({
  state() {
    return {
      data: data,
      projectIndex: 0,
      isMenuOpened: false,
      showProject: true,
      transitioning: false
    }
  },
  mutations: {
    toggleMenu(state, payload) {
      state.isMenuOpened = payload
    },
    toggleProjectVisibility(state, payload) {
      state.showProject = payload
    },
    toggleTransitionState(state, payload) {
      state.transitioning = payload
    }
  },
  actions: {},
  modules: {}
})
