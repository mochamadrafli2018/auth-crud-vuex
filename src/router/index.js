import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
   mode: 'history',
   routes: [
      {
         path: '/',
         name: 'home',
         component: () => import('../pages/home.vue')
      },
      {
         path: '/guide',
         name: 'guide',
         component: () => import('../pages/guide.vue')
      },
      { 
         path: '/dashboard',
         name: 'dashboard',
         component: () => import('../pages/dashboard.vue'),
      },
      {
         path: '/login',
         name: 'login',
         component: () => import('../pages/login.vue')
      },
      { 
         path: '/register',
         name: 'register',
         component: () => import('../pages/register.vue')
      },
      // otherwise redirect to home
      { path: '*', redirect: '/' }
   ]
})

export default router;