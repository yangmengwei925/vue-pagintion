<template>
  <div class="tree">
      <ul>
        <li class="p_item" v-for="(v,i) in items" :key="i">
          <router-link :to="v.url" 
              class="p_title"
              @click="n=i">
            <i class="iconfont" :class="v.icon"></i>{{v.name}}
          </router-link>
          <ul class="c_item" >
            <li v-for="(sub,j) in v.child" :key="j">
              <router-link :to="sub.url">{{sub.name}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name:'',
  data(){
    return{
      n:999,
      items:[
          {
              name:'首页',
              icon:'icon-shenghuo',
              url:'/home',
              child:[]
          },
          {
                name:'分页',
                icon:'icon-yonghu',
                url:'/pagination',
                child:[]
              },
              {
                name:'计算属性',
                icon:'icon-yonghu',
                url:'/computed',
                child:[]
              },
              {
                name:'过滤器',
                icon:'icon-yonghu',
                url:'/filter',
                child:[]
              },
              {
                name:'watch',
                icon:'icon-yonghu',
                url:'/watch',
                child:[]
              },
              {
                name:'生命周期',
                icon:'icon-yonghu',
                url:'/liftCycle',
                child:[]
              },
              {
                name:'set/delete',
                icon:'icon-yonghu',
                url:'/set',
                child:[]
              }
      ]
    }
  }
}
</script>

<style>

</style>
