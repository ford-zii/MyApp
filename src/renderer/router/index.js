import Vue from 'vue'
import Router from 'vue-router'

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
      name: 'Product',
      component: require('@/components/Product').default
    },
    {
      path: '*',
      redirect: '/'
    },


  ]
})
