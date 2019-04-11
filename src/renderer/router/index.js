import Vue from 'vue'
import Router from 'vue-router'
import  rm from '@/components/Member/Registermember'
import product from '@/components/Product/index'
import Nim from '@/components/Product/newImport'
import member from '@/components/Member/index'
import staff from '@/components/staff/index'
import sell from '@/components/Sell/index'
import rs from '@/components/staff/registerStaff'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: require('@/components/Login').default
    },
    {
      path: '/market',
      name: 'marketTM',
      component: require("@/components/template").default,
      children: [
        {
          path: 'registerMember',
          name: 'registerMember',
          component: rm
        },
        {
          path: 'product',
          name: 'Product',
          component: product
        },
        {
          path: 'NImport',
          name: 'NImport',
          component: Nim
        },
        {
          path: 'member',
          name: 'Member',
          component: member
        },
        {
          path: 'staff',
          name: 'Staff',
          component: staff
        },
        {
          path: 'registerStaff',
          name: 'registerStaff',
          component: rs
        },
        {
          path: 'sell',
          name: 'sell',
          component: sell
        },
        ]
    }

  ]
})
