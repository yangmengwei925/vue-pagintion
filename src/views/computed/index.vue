<template>
  <div>
	您购买了<input type="text" v-model="info.name"/>
	单价<input type="text" v-model="info.price"/>元
	数量<input type="text" v-model="info.count"/>份
	<p>
		折扣({{sale}})
		配送费({{freight}})元
	</p>
	<h1>总价：{{info.price*info.count*sale +freight}}</h1>
	<h1>总价：{{total}}</h1>

	<h1>总价：{{num2}}</h1>
	<h1>总价：{{num3}}</h1>
    <button @click="change()">改变num3</button>
  </div>
</template>
 
<script>
export default {
  data () {
    return {
        info:{id:1,price:15,name:'套餐A',count:1},
		sale:0.8,   //折扣
		freight:5,   //配送费
		data:0,
		num:100
    }
  },
  methods:{
        change(){
			this.num = 999;
		}
  },
   computed:{
	   total(){
		   if(this.info.count >5){
			   return this.info.price*this.info.count*this.sale
		   }else {
			   return this.info.price*this.info.count*this.sale +this.freight
		   }
		   
	   },
	   num2(){
		   return this.num+this.info.count ;
	   },
	   //完整的写法
	   num3:{
		   //读取值会触发get
		   get:function(){
			   return this.num 
		   },
		   //修改值会触发set
		   set:function(val){
			   this.num = val;
		   }
	   }
   }
}
</script>

<style>
</style>
