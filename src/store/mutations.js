import {RECEIVE_HOMEPAGE,RECEIVE_BRAND} from './mutation-types'
export default {
  [RECEIVE_HOMEPAGE](state,{productListing}){
    state.productListing = productListing
  },
  [RECEIVE_BRAND](state,{Brand}){
    state.Brand = Brand
  }
}
