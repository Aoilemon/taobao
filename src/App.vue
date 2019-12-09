<template>
  <div id="app">
    <router-view></router-view>
    <NavBar/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style>
@import './assets/common.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding:.986667rem 0 1.333333rem 0;
  background: #f4f4f4;
}
</style>
