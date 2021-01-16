<template>
 <!-- 面包屑 -->
      <div class="breadcumb">
        <ul>
          <li v-for="(list,i) in lists" :key="i">
            <router-link :to="{path:list.path}">{{list.meta.title}}</router-link>
            <span v-if="i< lists.length-1">/</span>
          </li>
        </ul>
      </div>
</template>

<script>
export default {
  name:'',
  data(){
    return{
      lists:[]
    }
  },
   //监听路由的变化
  watch:{
    $route(to,from){   //to  ==== this.$route  路由对象
      //this.url = to.path;
      console.log(to);
      var matched = to.matched;  //数组
      if(matched.length && matched[0].name !=='home'){
        matched =[
          {
            path: '/home',  //路径
            name:'home',
            meta:{title:'首页'}
          },
          ...matched
        ];
      }
      this.lists = matched;
    }
  },
  
}
</script>

<style scoped>
.breadcumb ul li{
   display:inline-block;
 }
 .breadcumb ul li span{
   padding:0 5px;
 }
</style>