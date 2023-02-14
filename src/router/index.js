import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdviceView from '../views/AdviceView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/recommandations',
    name: 'recommandations',
    component: AdviceView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
