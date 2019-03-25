import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import store from './store'

const mysql = require('mysql');
const config = {
  host:"localhost",
  user: "root",
  password: "1234567",
  port: "3306",
  database:"stockmarket"
};
window.conDB = new  mysql.createConnection(config);

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
