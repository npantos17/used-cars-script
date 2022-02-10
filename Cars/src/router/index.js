import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cars from '../views/Cars.vue';
import Sellers from '../views/Sellers.vue';
import Orders from '../views/Orders.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cars',
    name: 'Cars',
    component: Cars
  },
  {
    path: '/sellers',
    name: 'Sellers',
    component: Sellers
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
