<template>
  <div>
    SocketIO Test
    <p />
    <button @click="onSocketEmitTestBtn">SocketEmitTest</button>
  </div>
</template>

<script>
export default {
  name: 'ScoketioTest',
  data() {
    return {
    }
  }, // data
  created () {
  },
  destroyed() {
  },

  sockets: {
    connect () {
      console.log('socket connected')
    },
    data (val) {
      console.log('This method was fired by the socket server. eg: io.emit("data", data)')
      console.log(val)
    }
  }, // sockets

  methods: {
    onSocketEmitTestBtn () {
      // $socket is socket.io-client instance
      this.$socket.emit('request', {'data': 'test'})
    }
  } // methods
}
</script>
