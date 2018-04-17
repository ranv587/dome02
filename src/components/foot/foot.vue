<template>
  <footer class="footer_guide border-1px">
    <div class="guide_item" @click="goto('/homepage')" >
      <span class="item_icon">
        <i class="iconfont icon-waimai">
          <img src="../../common/images/foot/_01.png" alt="">
        </i>
      </span>

    </div>
    <div class="guide_item" @click="goto('/private')" >
      <span class="item_icon">
        <i class="iconfont icon-search">
          <img src="../../common/images/foot/_02.png" alt="">
        </i>
      </span>

    </div>
    <div class="guide_item" @click="goto('/shopping')" >
      <span class="item_icon">
        <i class="iconfont icon-dingdan">
           <img src="../../common/images/foot/_03.png" alt="">
        </i>
      </span>

    </div>
    <div class="guide_item" @click="goto('/sort')" >
      <span class="item_icon">
        <i class="iconfont icon-geren">
           <img src="../../common/images/foot/_04.png" alt="">
        </i>
      </span>

    </div>
  </footer>
</template>

<script>

  export default {
    methods: {
      goto(path) {
        this.$router.replace(path)
      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
          img
            width 30px
            height 30px

</style>
