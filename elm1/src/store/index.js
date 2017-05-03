/**
 * Created by liumingtai on 2017-5-2.
 callme 17602014220
 github:https://github.com/lazyTai
 */
/*开始使用*/
import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)
import mutations from './mutations';
import state from './state';

var store = new Vuex.Store({
  state,
  mutations
})

export  default store
