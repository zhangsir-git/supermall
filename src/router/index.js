import { createRouter, createWebHashHistory } from 'vue-router'
const Home =()=>import('../views/home/tabbar/home')
const routes = [
  {
    path:'/home',
    component:Home,
    name:Home
  },

  {
    path: '/category',
    component:() =>import('../views/category/tabbar/category')
  },
  {
    path: '/shopcart',
    component:()=>import('../views/shopcart/tabbar/shopcart')
  },
  {
    path: '/profile',
    component:()=>import('../views/profile/tabbar/profile')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
