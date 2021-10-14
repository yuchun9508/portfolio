import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuOpened: false
  },
  mutations: {
    toggleMenu(state, status) {
      state.isMenuOpened = status;
    },
  },
  actions: {
    toggleMenu({ commit }, status) {
      commit('toggleMenu', status);
    },
  },
  modules: {
  }
})
