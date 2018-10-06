/*
 * Socket mutations always have SOCKET_ prefix.
 * Socket actions always have socket_ prefix and the socket event name is
 *  camelCased (ex. SOCKET_USER_MESSAGE => socket_userMessage)
 * You can use either one or another or both in your store.
 * Namespaced modules are supported.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    connect: false,
    message: null
  },
  mutations: {
    SOCKET_CONNECTING: (state, status) => {
      console.log('socket connecting')
    },
    SOCKET_CONNECT: (state, status) => {
      state.connect = true
      console.log('socket connected')
    },
    SOCKET_DISCONNECT: (state, status) => {
      state.connect = false
      console.log('socket close')
    },
    SOCKET_DATA: (state, message) => {
      state.message = message
      console.log('SOCKET_DATA Received:')
      console.log(message)
    }
  },
  actions: {
  }
})
