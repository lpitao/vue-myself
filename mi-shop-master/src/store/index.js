/**
 * Created by HP on 2018/1/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import ShopCarTool from '../util/shop-car-tool'

let shopCar = new ShopCarTool()
//使用我们vuex，引入之后用Vue.use进行引用
Vue.use(Vuex)


const AppLoading = { // 路由状态
  state: {
    nowStatus: 'loading'
  },
  // 改变状态
  mutations: {
    nowStatus (state, data) {
      state.nowStatus = data
    }
  },
  getters: {
    nowStatus: state => {
      return state.nowStatus
    }
  }
}


const ShopCar = { // 购物车
  state: {
    length: shopCar.length()
  },
  // 改变状态
  mutations: {
    setShopCarLength (state, length) {
      state.length = length
    }
  },
  // 展示内容, 无法改变状态
  getters: {
    getShopCarLength: state => {
      return state.length
    }
  }
}

export default new Vuex.Store({
  modules: {
    AppLoading,
    ShopCar
  }
})
