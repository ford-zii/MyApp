import Vue from 'vue'
import Router from 'vue-router'
import rm from '@/components/registerStaff'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Login',
    //   component: require('@/components/Login')
    // },
    {
      path: '/',
<<<<<<< HEAD
      name: 'staff',
      component: require('@/components/staff').default
=======
      name: 'Product',
      component: require('@/components/Product').default
>>>>>>> f193a38ed7019c6434da7a7401b5492925c94d89
    },
    {
      path: '*',
      redirect: '/'
    },
<<<<<<< HEAD
    {
      path: '/product',
      name: 'Product',
      component: require('@/components/Product')
    },
    {
      path:'/registerStaff',
      name:'registerStaff',
      component:rm

    },
    {
      path: '/',
      name: 'menu',
      component: require('@/components/Menu')
    },

=======
>>>>>>> f193a38ed7019c6434da7a7401b5492925c94d89


  ]
})
