// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
//import VueLazyLoad from 'vue-lazyload'
//Vue.use(VueLazyLoad,{
//  error:'./static/error.png',    //图片路径错误时加载图片
//  loading:'./static/loading.png'   //预加载图片
//}) 

//Vue.config.productionTip = false
//Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
