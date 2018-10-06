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
