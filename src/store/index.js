import Vue from "vue"
import Vuex from "vuex"
import Loading from "@/modules/loading.js"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Loading
  }
})
