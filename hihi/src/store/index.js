import Vue from 'vue'
import Vuex from 'vuex'
import ShopCarTool from '../util/shop-car-tool'

let shopCar = new ShopCarTool()
//使用我们vuex，引入之后用Vue.use进行引用
Vue.use(Vuex)

const login = {
	state :{
		nowStatus : 'qwe',
		count : 0
	},
//	Getters 可以在模板中静态的显示数据。换句话说，getters 可以读取数据，但不能改变状态。
	getters:{
		nowStatus: state =>{
			return state.nowStatus
		},
		tripleCounter: state =>{
			return state.count*3
		}
	}
//	Mutations 允许更新状态，但永远是同步的。Mutations 是 store 中改变状态数据的唯一方式。
//	Actions 允许异步更新状态，但是需要使用一个已经存在的 mutation 。如果你需要以特定的顺序同时执行不同的 mutations 会非常有用。
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
	modules:{
		login,
    	ShopCar
	}
})


