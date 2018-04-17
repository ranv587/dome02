<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="./images/shouye_9.jpg" alt=""></div>
        <div class="swiper-slide"><img src="./images/shouye_10.jpg" alt=""></div>
        <div class="swiper-slide"><img src="./images/shouye_11.jpg" alt=""></div>
        <div class="swiper-slide"><img src="./images/shouye_19.jpg" alt=""></div>
        <div class="swiper-slide"><img src="./images/shouye_20.jpg" alt=""></div>
        <div class="swiper-slide"><img src="./images/shouye_21.jpg" alt=""></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>

  import {mapState} from 'vuex'
  import Swiper from 'swiper'  // 引入swiper的js库
  import 'swiper/dist/css/swiper.min.css' // 引入swiper的样式文件
  export default {
    mounted(){
      new Swiper(".swiper-container",{
        autoplay:true,
        loop:true,
        pagination: {
          el: '.swiper-pagination',
        }
      })
    },
    computed:{
      ...mapState(['Brand'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .swiper-container
    width 100%
    height: 160px
    img
      width:100%
      height:100%
    .swiper-pagination
      > span.swiper-pagination-bullet-active
        background #70a738
</style>


