import { createRouter, createWebHistory } from 'vue-router'


const routes = [

  {
    path: '/vuex1',
    name: 'Vuex1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../Vuex/Vuex1')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
