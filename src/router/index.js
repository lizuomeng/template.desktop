import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'

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
      component: Login
    }
  ]
}

const router = new Router(routes)

export default router
