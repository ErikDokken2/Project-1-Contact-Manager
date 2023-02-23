import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Contactview from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/contact',
    name: 'Contactview',
    component: Contactview
  }

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
