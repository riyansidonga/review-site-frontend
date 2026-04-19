import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReviewDetailView from '../views/ReviewDetailView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/reviews/:slug',
      name: 'review-detail',
      component: ReviewDetailView
    }
  ]
})

export default router