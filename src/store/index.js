/*
 * Socket mutations always have SOCKET_ prefix.
 * Socket actions always have socket_ prefix and the socket event name is
 *  camelCased (ex. SOCKET_USER_MESSAGE => socket_userMessage)
 * You can use either one or another or both in your store.
 * Namespaced modules are supported.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import socketio from './module/socketio'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    socketio: socketio
  }
})
