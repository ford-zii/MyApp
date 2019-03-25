import Vue from 'vue'
import Router from 'vue-router'
import  rm from '@/components/Member/Registermember'
import product from '@/components/Product/index'
import member from '@/components/Member/index'
import staff from '@/components/staff/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: require('@/components/Login').default
    },
    {
      path: '/register',
      name: 'registerMember',
      component: rm
    },
    {
      path: '/product',
      name: 'Product',
      component: product
    },
    {
      path: '/member',
      name: 'Member',
      component: member
    },
    {
      path: '/staff',
      name: 'Staff',
      component: staff
    },

  ]
})
