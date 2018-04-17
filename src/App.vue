<template>
  <div id="app">
    <router-view></router-view>
    <Foot></Foot>
  </div>
</template>

<script>
  import Foot from './components/foot/foot'

export default {

  components: {
    Foot
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
   width 100%
   height 100%
   position relative
</style>
