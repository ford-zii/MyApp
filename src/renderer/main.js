import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSwal from 'vue-swal'

library.add(faCoffee);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

const mysql = require('mysql');
const config = {
  // host:"localhost",
  host:"127.0.0.1",
  user: "root",
  password: "12345678",
  port: "3306",
  database:"stock"
};
window.conDB = new  mysql.createConnection(config);
Vue.use(VueSwal);
Vue.use(ElementUI);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'

}).$mount('#app')
