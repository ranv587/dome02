//获取ajax发送请求
import {reqHomePage,reqBrand} from '../api'
import {RECEIVE_HOMEPAGE,RECEIVE_BRAND} from './mutation-types'
//发送异步请求获取首页
export default {
  async getHomePage({commit}){
    const result = await reqHomePage()
    if(result.code===0){
      commit(RECEIVE_HOMEPAGE,{productListing:result.data})
    }

  },
  //获取组件和轮播
  async getBrand({commit}){
    const result = await reqBrand()
    if(result.code===0){
      commit(RECEIVE_BRAND,{Brand:result.data})
    }

  }

}
