import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/a'
import B from '@/components/b'
import NotFound from '@/components/404'
import Home from '@/components/Home.vue'
import main from '@/components/demo/main.vue'
import header from '@/components/demo/myheader.vue'
import container from '@/components/demo/mycontainter.vue'
import footer from '@/components/demo/myfooter.vue'
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
      children: [
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
      path: '/book',
      name: 'book',
      component: main,
      children: [
        {
          path: '/header',
          name: 'header',
          component: header
        },
        {
          path: '/container',
          name: 'container',
          component: container
        },
        {
          path: '/footer',
          name: 'footer',
          component: footer
        }
      ]
    }
  ]
})
