import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

const routes =
{
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: { name: 'home' }
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
}

const router = new Router(routes)

export default router
