<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>
<script>
  // @ is an alias to /src
  import navbar from './components/Navbar.vue'
  export default {
    name: 'home',
    components: {
      'nav-bar' : navbar
    }
  }
</script>
<style>
  body {
    margin: 0;
    background-color: #404040;
  }
</style>
