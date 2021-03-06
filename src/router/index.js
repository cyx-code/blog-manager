import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login/Login'
import Home from '@/views/Home/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
    component: Login
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
