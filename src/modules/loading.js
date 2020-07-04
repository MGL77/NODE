export default {
  state: {
    isLoading: true
  },
  actions: {
    haoLoading({
      commit
    }, boolean) {
      commit("haoLoading", boolean)
    }
  },
  mutations: {
    haoLoading(state, boolean) {
      state.isLoading = boolean
    }
  },
  getters: {
    getLoading(state) {
      return state.isLoading
    }
  }
}
