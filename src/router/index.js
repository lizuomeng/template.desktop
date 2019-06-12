import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/Home'

Vue.use(Router)

const routes =
{
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: { name: 'login' }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        hiddenLayout: true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    }
  ]
}

const router = new Router(routes)

export default router
