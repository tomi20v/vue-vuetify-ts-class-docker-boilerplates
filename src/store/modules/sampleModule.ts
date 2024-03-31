export default {
  namespaced: true,
  state: {
    count: 0,
  },
  getters: {
    count: (state) => state.count,
  },
  actions: {
    increase: ({commit}) => commit('increase'),
  },
  mutations: {
    increase: (state) => state.count++,
  },
}
