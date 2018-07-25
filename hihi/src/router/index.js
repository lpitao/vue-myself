import Vue from 'vue'
import Router from 'vue-router'
import _ from 'lodash'
import home from '../view/a'
import bome from '../view/b'
import come from '../view/c'
import dome from '../view/d'


Router.prototype.openPage = function (link, query) {
  this.push({
    path: link,
    query: _.assignIn({
      time: new Date().getTime()
    }, query || {})
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:home
    },
    {
      path:'/b',
      name:'b',
      component:bome
    },
    {
      path:'/c',
      name:'c',
      component:come
    },
    {
      path:'/d',
      name:'d',
      component:dome
    }
  ]
})
