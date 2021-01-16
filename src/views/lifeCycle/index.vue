<template>
  <div>
      <div id="my">
          {{message}}
          <input type="text" v-model='message' />
      </div>
  </div>
</template>
 
<script>
export default {
  data () {
    return {
         message : "hello world" 
    }
  },
	//beforecreate：el 和 data 并未初始化 
	//created:完成了 data 数据的初始化，el没有
	//beforeMount：完成了 el 和 data 初始化 
	//mounted ：完成挂载
	//具体怎么用呢，通俗一些
	//beforecreate : 举个例子：可以在这加个loading事件 
	//created ：在这结束loading，还做一些初始化，实现函数自执行 
	//mounted ： 在这发起后端请求，拿回数据，配合路由钩子做一些事情
	//beforeDestroy： 你确认删除XX吗？
	// destroyed ：当前组件已被删除，清空相关内容
	beforeCreate: function () { //beforeCreate:刚刚new Vue()之后，这个时候，数据还没有挂载呢，只是一个空壳
		console.group('beforeCreate 创建前状态===============》');
		console.log("创建前状态", "el     : " + this.$el); //undefined
		console.log("创建前状态", "data   : " + this.$data); //undefined 
		console.log("创建前状态", "message: " + this.message)  //undefined
	},
	created: function () { //created:这个时候已经可以使用到数据，也可以更改数据,在这里更改数据不会触发updated函数,一般可以在这里做初始数据的获取
		console.group('created 创建完毕状态===============》');
		console.log("创建完毕状态","el     : " + this.$el); //undefined
		console.log("创建完毕状态","data   : " + this.$data); //已被初始化 
		console.log("创建完毕状态","message: " + this.message); //已被初始化
	},
	beforeMount: function () { //beforeMount：虚拟dom已经创建完成，马上就要渲染,在这里也可以更改数据，不会触发updated  接下来开始render，渲染出真实dom
		console.group('beforeMount 挂载前状态===============》');
		console.log("挂载前状态", "color:red","el     : " + (this.$el)); //已被初始化
		console.log(this.$el);  // 发现el还是 {{message}}，这里就是应用的 Virtual DOM（虚拟Dom）技术，先把坑占住了。到后面mounted挂载的时候再把值渲染进去。
		console.log("挂载前状态", "color:red","data   : " + this.$data); //已被初始化  
		console.log("挂载前状态", "color:red","message: " + this.message); //已被初始化  
	},
	mounted: function () {  //mounted：此时，组件已经出现在页面中，数据、真实dom都已经处理好了,事件都已经挂载好了
		console.group('mounted 挂载结束状态===============》');
		console.log("挂载结束状态", "color:red","el     : " + this.$el); //已被初始化
		console.log(this.$el);    //{{}}渲染
		console.log("挂载结束状态", "color:red","data   : " + this.$data); //已被初始化
		console.log("挂载结束状态", "color:red","message: " + this.message); //已被初始化 
	},
	beforeUpdate: function () {
		console.group('beforeUpdate 更新前状态===============》');
		console.log("更新前状态", "color:red","el     : " + this.$el);
		console.log(this.$el);   
		console.log("更新前状态", "color:red","data   : " + this.$data); 
		console.log("更新前状态", "color:red","message: " + this.message); 
	},
	updated: function () {
		console.group('updated 更新完成状态===============》');
		console.log("更新完成状态", "color:red","el     : " + this.$el);
		console.log(this.$el); 
		console.log("更新完成状态", "color:red","data   : " + this.$data); 
		console.log("更新完成状态", "color:red","message: " + this.message); 
	},
	beforeDestroy: function () {//beforeDestory:销毁前执行（$destroy方法被调用的时候就会执行）,一般在这里善后:清除计时器、清除非指令绑定的事件等等...
		console.group('beforeDestroy 销毁前状态===============》');
		console.log("销毁前状态", "color:red","el     : " + this.$el);
		console.log(this.$el);    
		console.log("销毁前状态", "color:red","data   : " + this.$data); 
		console.log("销毁前状态", "color:red","message: " + this.message); 
	},
	destroyed: function () { //destroyed:组件的数据绑定、监听...都去掉了,只剩下dom空壳，这里也可以善后
		console.group('destroyed 销毁完成状态===============》');
		console.log("销毁完成状态", "color:red","el     : " + this.$el);
		console.log(this.$el);  
		console.log("销毁完成状态", "color:red","data   : " + this.$data); 
		console.log("销毁完成状态", "color:red","message: " + this.message)
	},
}
</script>

<style>
button._color {
    color:#f60;
}
</style>
