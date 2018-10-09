
const socketio = {
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
  actions: {}
}

export default socketio
