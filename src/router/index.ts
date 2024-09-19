import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import TermsView from '@/views/TermsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/terms',
      name: 'terms',
      component: TermsView
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      const element = document.getElementById(to.hash.substring(1))
      if (element) {
        return { el: element, behavior: 'smooth' }
      }
    }
    return { top: 0 }
  }
})

export default router
