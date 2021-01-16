<template>
  <div>
    <!-- 不会触发视图更新 -->
    <h1>{{obj.name}}</h1>
    <h1>{{obj.age}}</h1>
    <button @click="add()">添加</button>
    <button @click="del()">删除</button>
  </div>
</template>
 
<script>
export default {
  data () {
    return {
        obj:{
          id:1,
          name:"abc"
        }
    }
  },
  methods:{
        add(){
          //动态添加的属性值   不会触发视图更新
          //this.obj.age = 20;
          this.$set(this.obj,'age',20);  //双向数据  响应式数据
        },
        del(){
         // delete this.obj.age;
          this.$delete(this.obj,'age');  //双向数据  响应式数据
        }
  },
  watch:{
      
  }
}
</script>

<style>
</style>
