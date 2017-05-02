import Vue from 'vue'
import App from "./App.vue"
import home from "../page/home/home.vue"
import about from "../page/about/about.vue"
import user from "../page/user/user.vue"
import VueRouter from 'vue-router'

Vue.use(VueRouter)
var routes = [
  {path: '/home', component: home},
  {path: '/about', component: about},
  {path: '/user/:id', component: user}
]
var router = new VueRouter({
  routes
})

new Vue({
  el: "#app",
  router,
  components: {App}
})
