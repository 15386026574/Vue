import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/a'
import B from '@/comments/b'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/a',
      name: 'a',
      component: A
    },
    {
      path: '/b',
      name: 'b',
      component: B
    }
  ]
})
