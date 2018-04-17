<template>
  <div class="head_tab" >
    <div class="swiper-containers slidex" style="height: 36px">
      <ul class="swiper-wrapper">
        <li class="swiper-slide on" style="width: 20%"  >
           <span class="rela">
             <span>首页</span>
             <i></i>
           </span>
        </li>
        <li class="swiper-slide "   >
           <span class="rela">
             <span>猫猫主粮</span>
             <i></i>
           </span>
        </li>
        <li class="swiper-slide "   >
           <span class="rela">
             <span>首页</span>
             <i></i>
           </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'  // 引入swiper的js库
  import 'swiper/dist/css/swiper.min.css' // 引入swiper的样式文件
  export default {
    data() {
      return {}
    },
    mounted(){
      var slidex = new Swiper('.head_tab>.swiper-containers ', {
        loop: false,
        autoplay:false,
        // delay:3000,
        // slidesPerView:5,
        // spaceBetween: 10,
        pagination: {
          // el: '.swiper-pagination'
        }

      });
    },

    computed: {},
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .slidex
    margin-top 10px
    line-height 40px
    height 36px
    background white
    .swiper-wrapper
      .swiper-slide
        float left
        margin-right:15px
        color: #666;
        .rela
          position relative
          display inline-block
          i
            position: absolute;
            bottom: 1px;
            left: -10%;
            width: 120%;
            height: 2px;
        &.on
          .rela
            span
              color #459d36
            i
              background #459d36


</style>
