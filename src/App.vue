<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import sesStorage from './libs/sessionStorage.js'
  import {
    getAllIssues
  } from './services/issues.js'

  export default {
    name: 'app',
    created: function() {
      if (!sesStorage('articles')) {
        getAllIssues()
      }
    }
  }
</script>

<style>
  *:focus {
    outline: 0;
  }
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  
  h1 {
    //font-weight: normal;
    text-align: center;
  }
</style>