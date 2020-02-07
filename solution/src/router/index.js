import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import LayoutA from '../layouts/LayoutA.vue'
import LayoutB from '../layouts/LayoutB.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: LayoutA }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { layout: LayoutB }
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: { layout: LayoutA }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
