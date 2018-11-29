import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import first from '@/components/first/first'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/helloworld',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/',
    name: 'first',
    component: first
  }]
})
