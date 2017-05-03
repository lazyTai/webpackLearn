import Vue from 'vue'
import Router from 'vue-router'
import home from "@/components/home.vue"
import user from "@/components/user.vue"

Vue.use(Router)

var routes =
  [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: user
    }
  ]
var router = new Router({routes})
// router.push("home")
// router.push({name: "user", params: {userId: 'asdasd'}})
router.push({path:'home',query:{id:'ad'}})
export default router

