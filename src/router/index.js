import { createRouter, createWebHashHistory } from 'vue-router'
const Home =()=>import('@/views/category/tabbar/home/Home')

const routes = [
  {
    path:'/home',
    component:Home,
    name:Home
  },

  {
    path: '/category',
    component:() =>import('@/views/category/tabbar/category/category')
  },
  {
    path: '/shopcart',
    component:()=>import('@/views/category/tabbar/shopcart/shopcart')
  },
  {
    path: '/profile',
    component:()=>import('@/views/category/tabbar/profile/profile')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
