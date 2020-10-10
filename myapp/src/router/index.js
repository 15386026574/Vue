import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/router-base/a.vue'
import B from '@/components/router-base/b.vue'
import NotPage from '@/components/404.vue'
import Home from '@/components/home.vue'

import Container from '@/components/jineng/container.vue'
import ContainerList from '@/components/jineng/container-list.vue'
import Detail from '@/components/jineng/detail.vue'

Vue.use(Router)

const originalPush = Router.prototype.push

Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '*',
      name: '*',
      component: NotPage
    },
    // 重定向
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/404',
      name: '404',
      component: NotPage
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        // 别名
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
    },
    {
      path: '/container',
      name: 'container',
      component: Container,
      children: [
        {
          path: '/containerList',
          name: 'containerList',
          component: ContainerList
        },
        {
          path: '/detail',
          name: 'detail',
          component: Detail
        },
      ]
    }
  ]
})
