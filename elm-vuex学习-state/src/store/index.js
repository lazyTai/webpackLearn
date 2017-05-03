/**
 * Created by liumingtai on 2017-5-2.
 callme 17602014220
 github:https://github.com/lazyTai
 */

import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'


Vue.use(Vuex)

const state = {
  say: 'hello world'
}

export default  new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
