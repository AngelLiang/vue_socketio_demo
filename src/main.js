// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// add store
import store from './store'
// 引入vue-socket.io
import VueSocketio from 'vue-socket.io'
const namespace = '/task'
Vue.use(VueSocketio, 'http://127.0.0.1:5000' + namespace, store) // add store

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store, // add store
  router,
  components: { App },
  template: '<App/>'
})
