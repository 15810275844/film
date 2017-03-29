<template>
  <div id="app">
    <m-nav></m-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from '@/components/Nav/Nav'
export default {
  name: 'app',
  components:{
    'm-nav':Nav
  }
}
</script>

<style>
  body{
    width: 100%;
    height: 100%;
  }
</style>
