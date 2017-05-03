/**
 * Created by liumingtai on 2017-5-2.
 callme 17602014220
 github:https://github.com/lazyTai
 */
/*开始使用*/
import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)

const state = {
  home: "home",
  about: "about",
  user: "user",
}
import mutations from './mutations'
/*var mutations = {
 setHome: function (state) {
 state.home = state.home + "1"
 }
 }*/

var store = new Vuex.Store({
  state,
  mutations
})
export  default store
