import Vue from 'vue'
import Vuex from 'vuex'
// 持久化插件
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    searchHistoryList: []
  },
  getters: {
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    // payload传入的参数
    searchHistoryList (state, payload) {
      let arr = state.searchHistoryList
      arr.unshift(payload)
      // 去重
      arr = [...new Set(arr)]
      state.searchHistoryList = arr
    },
    // 根据索引删除
    delHistory (state, index) {
      state.searchHistoryList.splice(index, 1)
    },
    // 删除所有
    delAllHistory (state) {
      state.searchHistoryList = []
    }
  },
  actions: {
  },
  modules: {
  },
  // 使用持久化插件
  plugins: [vuexLocal.plugin]
})
