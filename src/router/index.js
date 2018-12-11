import Vue from 'vue'
import Router from 'vue-router'
import customer from '@/components/customer/customer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'customer',
    component: customer
  }]
})
