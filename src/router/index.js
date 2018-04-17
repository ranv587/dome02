import Vue from 'vue'
import VueRouter from 'vue-router'

//引入路由组件
import HomePpage from '../pages/homePpage/homePage'
import Private from '../pages/private/private'
import Shopping from '../pages/shopping/shopping'
import Sort from '../pages/sort/sort'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/homepage'
    },
    {
      path: '/homepage',
      component: HomePpage,

    },
    {
      path: '/private',
      component: Private,

    },
    {
      path: '/shopping',
      component: Shopping,

    },
    {
      path: '/sort',
      component: Sort,

    }]
})
