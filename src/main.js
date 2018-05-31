// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import {routes} from "./routes.js";
import axios from 'axios'

import {store} from "./store/store.js";

Vue.use(VueRouter)
//默认路径
axios.defaults.baseURL="https://wd8113938945vvvdza.wilddogio.com/"
//配置Vue原型
Vue.prototype.http=axios

const router =new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to,from,savedPosition){
    return{x:0,y:100}
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
