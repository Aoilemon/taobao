import Vue from 'vue'
import VueRouter from 'vue-router'

// 组件引入
import Home from '@/views/home/Home'
import Cart from '@/views/cart/Cart'
import Detail from '@/views/detail/Detail'
import Order from '@/views/order/Order'
import User from '@/views/user/User'
import Login from '@/views/login/Login'

Vue.use(VueRouter)

const router = new VueRouter({
  routes : [
    {
      path:'/home',
      component:Home
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/detail/:id',
      component:Detail
    },
    {
      path:'/order',
      component:Order
    },
    {
      path:'/user',
      component:User
    },
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/login',
      component:Login
    }
  ]
})

export default router