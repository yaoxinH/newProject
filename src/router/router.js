import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    component: Login
  }, {
    path: '/home',
    name: 'home',
    component: Home
  }]
})
