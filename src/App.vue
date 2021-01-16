<template>
  <div id="app">
    <!-- 左侧内容 -->
    <Nav />
    <!-- 右侧内容 -->
    <div>
      <!-- 面包屑 -->
      <breadcumb />
      <!-- 展示的出口 -->
      <router-view /> 

      <!-- 路由匹配缓存 -->
      <!-- <keep-alive v-if="$route.meta.keepAlive">
        <router-view />
      </keep-alive>
       <router-view v-if="!$route.meta.keepAlive"/> -->
    </div>
  </div>
</template>

<script>
import Nav from './views/Nav.vue'; //导入
import breadcumb from './views/breadcumb.vue'; //导入

export default {
  name: 'App',
  data(){
    return {
  
    }
  },
  components:{  //组件
    Nav,
    breadcumb
  }

}
</script>

<style>
 @import './assets/css/index.css'; 
 #app {
   height:100%;
 }

</style>
