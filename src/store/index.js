import Vue from 'vue'
import Vuex from 'vuex'

import graphics from './modules/graphics'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    graphics
  }
})
