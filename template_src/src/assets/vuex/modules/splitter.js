export default {
  namespaced: true,
  state: {
    open: false
  },
  getters: {
    getOpen: state => state.open
  },
  mutations: {
    TOGGLE (state, shouldOpen) {
      if (shouldOpen instanceof Boolean) {
        state.open = shouldOpen;
      } else {
        state.open = !state.open;
      }
    }
  },
  actions: {
    toggle ({commit}, payload) {
      commit('TOGGLE', payload)
    }
  }
}
