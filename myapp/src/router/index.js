import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/a'
import B from '@/components/b'
import NotFound from '@/components/404'
import Home from '@/components/Home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: '*',
      component: NotFound
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [{
        path: '/a',
        name: 'a',
        component: A
      },
      {
        path: '/b',
        name: 'b',
        component: B
      }]
    }
  ]
})
