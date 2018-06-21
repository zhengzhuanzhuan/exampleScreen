<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: '微软雅黑';
  }
  html, body{
    overflow-x: hidden;
    height: 100%;
  }
  #app{
    width: 100%;
    height: 100%;
  }
</style>
