import { createRouter, createWebHistory } from 'vue-router'
import ProductList from './components/products/ProductList.vue'
const routes = [
  {
    path: '/',
    name: 'ProductList',
    component:ProductList,
    meta:{
      title: 'Product List'
    }
  },
  {
    path:'/product-operations',
    name:'ProductOperations',
    component : ()=> import('./components/products/ProductPurchase.vue'),
    meta:{
      title: 'Product Operations'
    }
  },
  {
    path:'/product-output',
    name:'ProductOutput',
    component: ()=> import('./components/products/ProductSell.vue'),
    meta:{
      title: 'Product Output'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to,from,next)=>{
  document.title = `${to.meta.title}`
  next()
})

export default router