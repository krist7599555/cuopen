import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/embed/result',
      name: 'result',
      component: () => import('./views/Result.vue')
    },
    {
      path: '/embed/schedule',
      name: 'schedule',
      component: () => import('./views/Schedule.vue')
    }
  ]
});
