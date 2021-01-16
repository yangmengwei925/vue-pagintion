import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Banner.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',  //路径
    redirect:'/home' //重定向
  },
  
  {
    path: '/home',  //路径
    name:'home',
    meta:{title:'首页'},
    component: ()=>import('../views/Banner.vue')  //匹配的组件
  },
  {
    path: '/computed',
    name: 'computed',
    meta: { title: '计算属性' },
    component: () => import('../views/computed/index.vue')
  },
  {
    path: '/filter',
    name: 'filter',
    meta: { title: '过滤器' },
    component: () => import('../views/filters/index.vue')
  },
  {
    path: '/lifeCycle',
    name: 'lifeCycle',
    meta: { title: '生命周期' },
    component: () => import('../views/lifeCycle/index.vue')
  },
  {
    path: '/watch',
    name: 'watch',
    meta: { title: 'watch' },
    component: () => import('../views/watch/index.vue')
  },
  {
    path: '/set',
    name: 'set',
    meta: { title: 'set' },
    component: () => import('../views/set/index.vue')
  },
  {
    path: '/pagination',
    name: 'pagination',
    meta: { title: '分页' },
    component: () => import('../views/pagination/index.vue')
  }
]

const router = new VueRouter({
  linkActiveClass:'selected',    //默认路由样式
  routes
})

//路由拦截
router.beforeEach(function(to,from,next){
  console.log(12345)
  if(!localStorage.getItem('sign')){
    if(to.path !=='/home'){
      next('/home')
    }
  }
  next()
})

export default router
