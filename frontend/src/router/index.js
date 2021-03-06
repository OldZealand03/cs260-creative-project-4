import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Upload from '../views/Upload.vue'
import Search from '../views/Search.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/upload',
    name: 'upload',
    component: Upload
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
