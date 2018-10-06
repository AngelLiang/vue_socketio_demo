# vue_socketio_demo

> A vue demo using vue-socketio.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 说明

本项目是通过以下步骤生成。


### 创建工程

```
# vue-router必选
vue init webpack vue_socketio_demo

# 安装vue-socketio
npm install -save vue-socket.io
```

`vue init webpack`的选项要引入`VueRouter`。

### 引入`vue-socket.io`

编辑`src/main.js`，引入`vue-socket.io`。

```js
import VueSocketio from 'vue-socket.io'
const namespace = '/task'
Vue.use(VueSocketio, 'http://127.0.0.1:5000' + namespace)
```

`http://127.0.0.1:5000`为后端socketio服务器地址。

### 创建页面

新建`src/views/SocketioTest.vue`，拷贝下面代码

```
<template>
    <div>
        SocketIO Test<p/>
        <button @click="onSocketEmitTestBtn">SocketEmitTest</button>
    </div>
</template>

<script>
export default {
  name: 'ScoketioTest',
  sockets: {
    connect () {
      console.log('socket connected')
    },
    data (val) {
      console.log('This method was fired by the socket server. eg: io.emit("data", data)')
      console.log(val)
    }
  },
  created () {
  },
  methods: {
    onSocketEmitTestBtn () {
      // $socket is socket.io-client instance
      this.$socket.emit('request', {'data': 'test'})
    }
  }
}
</script>
```

然后编辑`router/index.js`：引入上面的文件

```js
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 引入
import SocketioTest from '@/views/SocketioTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 添加下面代码，注意上面有个逗号
    {
      path: '/test',
      name: 'SocketioTest',
      component: SocketioTest
    }
  ]
})

```

### 启动并测试

```bash
npm run dev
```

使用谷歌浏览器访问`http://127.0.0.1:8080/#/test`，并按下F12进入控制台，即可测试。

之后需要启动配套的SocketIO服务端，本例使用的是本人github仓库里的[Flask_Celery_SocketIO_Demo](https://github.com/AngelLiang/Flask_Celery_SocketIO_Demo)之[socketio分支](https://github.com/AngelLiangFlask_Celery_SocketIO_Demo/tree/socketio)。

该项目快速启动步骤：

```bash
git clone git@github.com:AngelLiang/Flask_Celery_SocketIO_Demo.git
cd Flask_Celery_SocketIO_Demo
git checkout socketio
pipenv install
pipenv shell
python flask_app.py
```

### 进阶：使用Store处理


我们可以使用`Vuex`的`Store`对接收到的数据进行处理。首先要安装`vuex`

```
npm install --save vuex
```

然后新建`src/store/index.js`，拷贝下面的代码。

```js
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

```

有关Vuex的`state`、`mutations`和`actions`请参见[官网教程](https://vuex.vuejs.org/zh/)。

然后修改`src/main.js`，添加相关代码（有`add store`注释的地方）。

```js
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

```

最后进入测试页面，点击相关按钮即可看到效果。
