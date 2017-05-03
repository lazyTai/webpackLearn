// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './config/rem'

import FastClick from 'fastclick'
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  })
}

Vue.config.productionTip = false;

/*开始使用*/
import Vuex from 'vuex';
Vue.use(Vuex)
const state = {
  home: "home",
  about: "about",
  user: "user",
}

var store = new Vuex.Store({
  state
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
