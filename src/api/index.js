import ajax from './ajax'
//获取首页广告类表
export const reqHomePage =()=>ajax('/api/index')
//获取轮播和每日疯抢
export const reqBrand =()=>ajax('/api/carousel')
