<template>

  <div>
    <div class="overflow">
      <div class="overflow_images">
        <span></span>
        <img src="../../common/images/ytr_10.jpg" alt="">
      </div>
      <!--搜索-->
      <div class="clearfix" >
        <div class="epet-search ">
          <div class="fl">
            <a class="a1" href="https://wap.epet.com/place.html?pet_type=dog&amp;fw=0">
              <span class="catordog c89">狗狗</span>
              <span class="c80">|</span>
              <span data-name="my-place" class="myposition c89 ft13">重庆</span>

            </a>
          </div>
          <p class="search-text">
            <a href="https://wap.epet.com/search.html?pet_type=dog&amp;fw=0">
              <input class="search" type="search" placeholder="搜索商品和品牌" disabled="disabled">
              <span class="eico serach-ico">
            </span>
            </a>
          </p>
          <a href="https://wap.epet.com/wappms/pms.html?fw=0" class="epet-category">
            <img class="epet-category_img" src="//static.epetbar.com/static_web/wap/src/images/mydope.png">
          </a>
        </div>
      </div>
      <!--列表-->
      <div class="find_nav" v-if="productListing">
        <ul class="find_nav_ul"  >

          <li class="find_nav_li" v-for="(item,index) in productListing.menus" :key="index" >
            <p>{{item.menu_name}}</p>
            <span></span>
          </li>
         </ul>
      </div>

    </div>
    <!--内容区-->
    <div class="content">
      <Carousel></Carousel>
       <!--列表-->
       <div>
        <div class="columnnavdiv">
          <div>
            <ul class="hottype ">
              <li class="fl" style="width: 20%; height: 90px;">

                <a href="https://wap.epet.com/group/v226/main.html?pet_type=dog&amp;fw=0">
                  <img src="a8a0c14d85ee6b0229770385d8f9f.jpg@!water" lazy="loaded">
                </a>
              </li>

            </ul>
          </div>
        </div>
       </div>
       <div class="swiper-slide">
        <a href="https://sale.epet.com/m/1706/newWelfare.html?pet_type=dog&amp;fw=0" class="pointer">
          <img src="https://img2.epetbar.com/nowater/2017-12/18/09/60c354a5d94be9fd114523ee77259c73.gif" lazy="loaded" style="height: 120px;">
        </a>
      </div>
      <!--限时抢购-->
       <div class="time">
         <div class="time_content">
           <img src="../../common/images/01.jpg" alt="">
         </div>

         <p class="time_p">下一场</p>
         <div class="time_span" >
           <span class="time_span_1" >20</span>
           <span>:</span>
           <span class="time_span_1">00</span>
         </div>
         <a href="">
           <img src="../../common/images/011.jpg" alt="">
         </a>


       </div>
       <div class="time_top_ul ">
         <ul>
           <li>
             <img src="https://img1.epetbar.com/2016-12/06/18/80f8935097460206ef9944dc11522efd.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
             <span class="span1">￥57.00</span>
             <span>省57.00</span>
           </li>
           <li>
             <img src="https://img1.epetbar.com/2016-12/06/18/80f8935097460206ef9944dc11522efd.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
             <span class="span1">￥57.00</span>
             <span>省57.00</span>
           </li>
           <li>
             <img src="https://img1.epetbar.com/2016-12/06/18/80f8935097460206ef9944dc11522efd.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
             <span class="span1">￥57.00</span>
             <span>省57.00</span>
           </li>
           <li>
             <img src="https://img1.epetbar.com/2016-12/06/18/80f8935097460206ef9944dc11522efd.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
             <span class="span1">￥57.00</span>
             <span>省57.00</span>
           </li>
          </ul>
          <div class="top"></div>
       </div>
      <!--E宠国际-->
       <div class="chongw">
         <div class="chongw1">
           <img src="https://img2.epetbar.com/nowater/2017-12/13/09/1ec9379f83eb421db9a09195c9594e29.jpg@!water" alt="">
         </div>
         <div class="chongw1">
           <div class="chongw2">
             <img src=" https://img2.epetbar.com/nowater/2017-12/13/10/35bb7f3bd146cb9a9e74a935803f0d9a.jpg@!water" alt="">
           </div>
           <div class="chongw2">
             <img src="https://img2.epetbar.com/nowater/2017-12/13/10/35bb7f3bd146cb9a9e74a935803f0d9a.jpg@!water" alt="">
           </div>
         </div>
       </div>
       <!--横条-->
      <div class="trabecula"></div>
      <div class="chongw_nowater_img">
         <img src="https://img2.epetbar.com/nowater/2018-04/09/09/cb1638292b794ab005e83f38e6c2d7bf.jpg@!water" alt="">
       </div>
      <!--潮品视频-->
      <Fashion></Fashion>
      <Video></Video>
      <!---->
      <div class="activity">
        <div class="activity1">
          <div>
            <img src="https://img2.epetbar.com/nowater/2018-02/05/14/9aa462284ec8a79694fa5c9ce062d5ab.jpg@!water" alt="">
          </div>
          <div>
            <img src="https://img2.epetbar.com/nowater/2018-02/05/14/9aa462284ec8a79694fa5c9ce062d5ab.jpg@!water" alt="">
          </div>
        </div>
        <div class="activity2">
          <div>
            <img src="https://img2.epetbar.com/nowater/2018-02/05/14/9aa462284ec8a79694fa5c9ce062d5ab.jpg@!water" alt="">
          </div>
          <div>
            <img src="https://img2.epetbar.com/nowater/2018-02/05/14/9aa462284ec8a79694fa5c9ce062d5ab.jpg@!water" alt="">
          </div>
        </div>

      </div>
      <!--列表-->
      <Fashion></Fashion>
      <div class="list">
        <ul class="list_ul">
          <li>
            <img src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water" alt="">
          </li>
            <Split></Split>
          <li>
            <img src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water" alt="">
          </li>
          <Split></Split>
          <li>
            <img src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water" alt="">
          </li>
          <Split></Split>
          <li>
            <img src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water" alt="">
          </li>
          <Split></Split>
          <li>
            <img src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water" alt="">
          </li>
          <Split></Split>
          <li>
            <img src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water" alt="">
          </li>
          <Split></Split>
          <li>
            <img src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water" alt="">
          </li>

        </ul>
      </div>
      <!--萌爪联盟-->
      <Fashion></Fashion>
      <Video></Video>
      <!--萌宠说-->
      <Fashion></Fashion>
      <Video></Video>
      <!--小剧场-->
      <Fashion></Fashion>
      <Video></Video>

      <div class="slogan">
        <p>品质养宠</p>
         <p class="p1"></p>
        <p>尽在E宠</p>

      </div>
    </div>
  </div>






</template>

<script>
  import vue from 'vue'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Carousel from '../../components/Carousel/Carousel'
  import Video from '../../components/Video/Video'
  import Split from '../../components/Split/Split'
  import Fashion from '../../components/Fashion/Fashion'
 /* import Slidex from '../../components/Slidex/Slidex'*/
  export default {
    data() {
      return {}
    },
    mounted(){
      /*在组件刚挂载时获取数据*/
      this.$store.dispatch('getHomePage')
      //获取组件和轮播
      this.$store.dispatch('getBrand')

     new BScroll(".time_top_ul",{
        click:true,
        scrollX:true
      })

    },
    methods: {},
    computed: {
      ...mapState(['productListing']),
      //定义一个二维数组


    },
    components: {
      Carousel,
      Video,
      Split,
      Fashion,
     /* Slidex*/

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 .overflow
   position fixed
   top 0
   width 100%
   background whitesmoke
   z-index 999
   .overflow_images  img
    height 55px
    width 100%
   .clearfix
    width 375px
    height 45px
    .epet-search
      display -webkit-box
      -webkit-box-align: center;
      width 355px
      height 41px
      margin 8px auto
      a1
        display block
        width 70px
        height 19px
        float left
        .c89
          display inline-block
          width 28px
          height 19px
          font-size 14px
          line-height 19px
        .c80
          width 1px
          height 20px
          font-size 12px



    .search-text a
      margin-left 8px
      text-decoration: none;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      display inline-block
      width 233.91px
      height 25px
      background #e9e9e9
      border-radius 5px

      .search
        width: 222.91px;
        border: 0;
        height: 25px;
        background: #e9e9e9
        border-radius: 4px;
        color: #bcbcbc;
        text-indent: 10px;
        font-size: 13px;
        outline: 0;

      .eico
        outline none
        display inline-block
        width 11px
        height 11px
        background #bcbcbc
        float right
        margin-top 7px


    .epet-category
       display inline-block
       width 25px
       height 25px
       margin-left 10px
     .epet-category_img
       width 100%
       height 100%


    /*头部导航*/
   .find_nav

    width 100%
    height 51px
    overflow hidden

    .find_nav_ul
      /*position absolute*/
      width 200%
      height 50px
      .find_nav_li
        float left
        padding 0 15px
        height 20px
        margin-top 20px
        span
           display inline-block
           width 33px
           height 2px
           background #02a774



  .content
    margin-top 167px
    width 375px
    height 40000px
    overflow hidden
    .content_swipe
      width 100%
      height 160px
      background #02a774
    .hottype
      width 100%
      height 180px
      display flex
      flex-flow: row wrap;
      li
       width: 25%;
       img
         width 100%



    .swiper-slide
      width 100%
      height 120px
    .time
      display flex
      flex-direction row
      width 100%
      height 20px
      padding 10px
      .time_content
        width 162px
        height 22px
        margin-right 65px
        img
          width 100px
          height 22px


      .time_p
          display inline-block
          width 39px
          height 20px
          font-size 12px
          line-height 20px
      .time_span
         width 43px
         height 20px
         font-size 12px
         line-height 20px
         .time_span_1
           border 1px solid gainsboro
      a
        display block
        position relative
        top -6px
        width 54px
        height 54px
        img
          display block
          width 100%



    .time_top_ul
      width 100%

      overflow hidden
      ul
       height 150px
       width 700px
       display flex
      .top
         width 100%
         height 10px
         background darkgrey
       li
        display flex
        flex-direction column
        width 98.56px
        margin-bottom 10px
        img
           display block
           width 98.56px
           height 100px
           margin-bottom 5px
        .span1
          margin auto
          font-size 14px
          color red
          margin-bottom 5px

         span
          margin auto
          font-size 14px
          color darkgrey
          margin-bottom 5px



    .chongw
      display flex
      width 375px
      height 250px

      .chongw1
        display flex
        flex-direction column
        width 50%
        height 250px

        img
          width 100%
          height 100%
        .chongw2
         width 100%
         height 50%
         img
           width 100%
           height 100%


    .trabecula
      width 375
      height 10px
      background #a9a9a9
    .chongw_nowater_img
       width 375px
       height 170px
       img
        width 100%
        height 100%


    .activity
       width 375px
       height 300px
       display flex
       background rebeccapurple
       .activity1
           width 50%
           height 100%
           display flex
           flex-direction column
           background red
           div
             width 100%
             height 50%
             img
               width 100%
               height 100%
       .activity2
          width 50%
          height 100%
          display flex
          flex-direction column
          background yellow
          div
            width 100%
            height 50%
            img
             width 100%
             height 100%




    .list
       width 100%
       .list_ul
          width 375px
          li
           width 375px
           height 200px
           img
            width 100%
            height 100%




    .slogan
        width 100%
        height 30px
        background silver
        display flex
        padding 0 62px
        line-height 30px
        p
         font-size 16px
         color #7e8c8d
         letter-spacing 10px
         margin-right 15px
</style>
