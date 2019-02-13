/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

//require('./bootstrap');
//window.$ = window.jQuery = require('jquery')
import jQuery from 'jquery'
//import $ from "jquery";
//var $ = require("jquery")(window);
global.jQuery = jQuery
global.$ = jQuery
import Vue from 'vue'
window.Vue = Vue
import VueRouter from 'vue-router'

import axios from 'axios'

window.axios = axios

window.token = localStorage.getItem('token')
window.loginAccess = localStorage.getItem('loginAccess')
window.rememberValue = localStorage.getItem('rememberValue')


//window.BaseUrlF = 'http://127.0.0.1:8000';
window.BaseUrlF = 'https://api.yekbun.net';

axios.defaults.baseURL = process.env.VUE_APP_API_BASE || 'https://api.yekbun.net/bakur'
//axios.defaults.baseURL = 'http://localhost:8000/bakur';
//axios.defaults.baseURL = 'http://localhost/api-yekbun-net/public/bakur'


//axios.defaults.headers.common['Authorization'] = "Bearer " +token;

//axios.defaults.headers.post['Content-Type'] = 'application/json';
import injector from 'vue-inject';
require('@/store/injector-register');
Vue.use(injector);


export const serverBus = new Vue();


Vue.use(VueRouter)

window.Vue = require('vue')

/*Main route*/
import App from './App.vue'

/*user router*/
//import Router from 'vue-router'

import Home from './views/Home.vue'
import News from './views/News.vue'
import Events from './views/Events.vue'
import Music from './views/Music.vue'
import Videos from './views/Videos.vue'
import School from './views/School.vue'
import History from './views/History.vue'
import OnlineShopping from './views/OnlineShopping.vue'
import Bazar from './views/Bazar.vue'
import Voting from './views/Voting.vue'
import Advertisement from './views/Advertisement.vue'
import VerifyUserAuth from './VerifyUserAuth.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/music',
      name: 'music',
      component: Music
    },
    {
      path: '/videos',
      name: 'videos',
      component: Videos
    },
    {
      path: '/school',
      name: 'school',
      component: School
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
    {
      path: '/online-shop',
      name: 'online-shop',
      component: OnlineShopping
    },
    {
      path: '/bazar',
      name: 'bazar',
      component: Bazar
    },
    {
      path: '/voting',
      name: 'voting',
      component: Voting
    },
    {
      path: '/advertisement',
      name: 'advertisement',
      component: Advertisement
    },
    {
      path: '/verifyuserauth',
      name: 'verifyuserauth',
      component: VerifyUserAuth
    }
  ]
})

const openRoutes = ['verifyuserauth']

router.beforeEach((to, from, next) => {
  if (openRoutes.includes(to.name)) {
    next()
  } else if (window.token) {
    next()
  } else {
    next('/verifyuserauth')
  }
})

export default router

new Vue({
  el: '#app',
  components: { App },
  render: h => h(App),
  router
})
