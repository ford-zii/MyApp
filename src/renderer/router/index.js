import Vue from 'vue'
import Router from 'vue-router'
import  rm from '@/components/Registermember'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: require('@/components/Menu').default
    },
    {
      path: '/register',
      name: 'register',
      component: rm
    },
    {
      path: '/',
      name: 'Product',
      component: require('@/components/product').default
    },

  ]
})
