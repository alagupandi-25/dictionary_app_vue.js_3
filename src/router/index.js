import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import Notfound from '../views/Notfound.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/:notFound',
    name: 'Notfound',
    component: Notfound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
