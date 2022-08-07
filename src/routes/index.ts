import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../Views/common/LandingPage.vue"),
    
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import("../Views/auth/auth.vue")
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes
}) 

export default router;