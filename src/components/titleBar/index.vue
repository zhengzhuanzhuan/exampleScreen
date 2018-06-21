<template>
  <p class="title-bar"><span></span>{{label}}</p>
</template>
<style lang="scss" scoped>
 p {
   color: #fff;
  font-family:PingFangSC-Semibold;
  font-size: 20px;
  letter-spacing: 1px; 
  span {
     width: 6px;
      height: 20px;
      display: inline-block;
      vertical-align: middle;
      margin : 0px 10px 0 5px;
      background:linear-gradient(180deg,rgba(51,230,239,1),rgba(46,157,255,1));
  }
 }
</style>
<script>
export default {
  props: ['label']
}
</script>