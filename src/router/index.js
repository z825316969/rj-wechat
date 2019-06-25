import Vue from 'vue'
import Router from 'vue-router'
import LogIn from '../views/logIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'logIn',
      component: LogIn,
      hidden: true
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
      hidden: true
    },
    {
      path: '/layout',
      component: () => import('@/layout'),
      redirect: '/layout/task',
      name: 'Example',
      meta: { title: '课题', icon: 'example' },
      children: [
        {
          path: 'task',
          name: 'task',
          component: () => import('@/views/task/index'),
          meta: { title: 'task', icon: 'table' }
        }
      ]
    },
  ]
})
