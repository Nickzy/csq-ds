import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import layout from '@/components/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    children: [
      {
        path: '/',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue')
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import(/* webpackChunkName: "contact" */ '../views/contact/index.vue')
      },
      {
        path: '/about-us',
        name: 'about-us',
        component: () => import(/* webpackChunkName: "about-us" */ '../views/about-us/index.vue')
      },
      {
        path: '/vase',
        name: 'vase',
        component: () => import(/* webpackChunkName: "vase" */ '../views/vase/index.vue')
      },
      {
        path: '/kitchen-shelf',
        name: 'kitchen-shelf',
        component: () => import(/* webpackChunkName: "kitchen-shelf" */ '../views/kitchen-shelf/index.vue')
      },
      {
        path: '/flower-shelf',
        name: 'flower-shelf',
        component: () => import(/* webpackChunkName: "flower-shelf" */ '../views/flower-shelf/index.vue')
      },
      {
        path: '/livingRoom-shelf',
        name: 'living-room-shelf',
        component: () => import(/* webpackChunkName: "living-room-shelf" */ '../views/living-room-shelf/index.vue')
      },
      {
        path: '/small-chair-and-end-table',
        name: 'smallchair-and-endtable',
        component: () => import(/* webpackChunkName: "smallchair-and-endtable" */ '../views/smallchair-and-endtable/index.vue')
      }
    ]
  },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
