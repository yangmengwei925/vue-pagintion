<template>
  <div>
    <input type = "text" v-model="name" />姓名
    {{changeName}}
    <input type = "text" v-model="obj.name" />姓名
  </div>
</template>
 
<script>
export default {
  data () {
    return {
        name:'',
        changeName:'',
        obj:{
          name:''
        }
    }
  },
  methods:{
        action(newValue,oldValue){

        }
  },
  watch:{
    // 几种写法
    name:function(newValue,oldValue){
      this.changeName = oldValue;
    },
    // name(newValue,oldValue){

    // }
    // 'name'(newValue,oldValue){

    // }
    //'name':'action'  //值可以为方法名
    //监听对象
    // 'obj.name'(newValue,oldValue){
    //   this.changeName = oldValue;
    // },
    // obj(newValue,oldValue){  //不会改变
    //   this.changeName = oldValue;
    // },
    obj:{
      handler:(newValue,oldValue)=>{   //默认的执行函数
        //this.changeName = newValue;
        console.log('1111')
      },
      deep:true  //深度监听   false handler函数不执行
    }
  }
}
</script>

<style>
</style>
