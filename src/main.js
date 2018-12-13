// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Login from './Login'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    isLogin: true
  },
  components: {
    App,
    Login
  },
  methods: {
    login_watch: function () {
      this.isLogin = true
    }
  },
  template: '<App v-if="isLogin"/><Login @login_notice="login_watch" v-else-if="!isLogin"/>'
})
