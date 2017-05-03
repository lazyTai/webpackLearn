<template>
  <div id="app">
    <router-link to="/home">{{home}}</router-link>
    <p>{{home}}</p>
    <p>{{about}}</p>
    <p>{{user}}</p>
    <p>{{homeUser}}</p>
    <p>{{hello1}}</p>
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'app',
    data: function () {
      return {
        hello: "hello world"
      }
    },
    computed: mapState({
      home: state => state.home,
      about(state){
        return state.about
      },
      user: 'user',
      homeUser: function (state) {
        return state.user + this.home
      },
      hello1: function () {
        return this.$data.hello
      }
    })
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
