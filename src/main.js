// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入vue-socket.io
import VueSocketio from 'vue-socket.io'
const namespace = '/task'
Vue.use(VueSocketio, 'http://127.0.0.1:5000' + namespace)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
