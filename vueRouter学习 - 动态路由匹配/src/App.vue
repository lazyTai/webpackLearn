<template>
  <div>
    路由学习demo 我是打不死的的小强
    我只管疯狂的敲代码，不断的细分demo做到强者的无敌
    <p>
      <router-link to="/home">home</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/user/hello fuck">user</router-link>
    </p>

    <router-view></router-view>
  </div>
</template>
<script type="text/javascript">
  export default {}
</script>
<style lang="scss">
  .router-fade-enter-active,
  .router-fade-leave-active {
    transition: opacity .3s;
  }

  .router-fade-enter,
  .router-fade-leave-active {
    opacity: 0;
  }
</style>
