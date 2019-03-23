import Vue from 'vue'
import Router from 'vue-router'
import  rm from '@/components/Registermember'
import product from '@/components/Product'
import member from '@/components/Member'
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
      name: 'register',
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

  ]
})
