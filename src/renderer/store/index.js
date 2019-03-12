import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'
import member from "./modules/member";

function store(name) {
  return function (resolve) {
    require(['./modules/' + name], resolve);
  }
}

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    member : member,
  },
  plugins: [
    createPersistedState(),
    createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production'
})
