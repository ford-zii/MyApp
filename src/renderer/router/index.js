import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: require('@/components/Login').default
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/product',
      name: 'Product',
      component: require('@/components/Product')
    },
    {
      path: '/',
      name: 'menu',
      component: require('@/components/Menu')
    }

  ]
})
