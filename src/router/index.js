import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import dragDemo from '@/components/dragDemo'  // 引入页面

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dragDemo',
      component: dragDemo
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
