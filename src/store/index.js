import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

const store = {
  modules
}

export default new Vuex.Store(store)
