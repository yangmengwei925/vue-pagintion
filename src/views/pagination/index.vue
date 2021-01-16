<template>
<div style="float:left;width:80%">
    <div class="panel panel-primary" >
        <!-- 头部 -->
        <div class="panel-heading">
            <h1 style="display: inline-block;">商品信息统计表</h1>
            <span>客户总数
              <span class="label label-warning" >{{page.rows}}</span>
            </span>
        </div>
      
        <!-- 内容 -->
        <div class="panel-body">
            <table class="table table-condensed">
              <thead>
                <tr>
                  <th>序号</th>
                  <th>商品名称</th>
                  <th>商品价格</th>
                  <th>商品详情</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(v,i) in lists" :key="v.product_id">
                  <td>{{num(i)}}</td>
                  <td>{{v.product_name}}</td>
                  <td>{{v.product_uprice}}</td>
                  <td><button type="button" class="btn btn-success btn-sm">查看详情</button></td>
                </tr>
              </tbody>
            </table>
        </div>
         <!--分页--> 
         <!-- 第一种方式，子发射事件来调用父的方法 -->
          <!-- <pagination :pageTotal="page.pageTotal"  :pageNo="page.pageNo" @e-child="getData"/> -->
           <!-- 第二种方式，sync修饰符 操作父组件的值  -->
          <pagination :pageTotal="page.pageTotal"  :pageNo.sync="page.pageNo"/>
      </div>
</div>
</template>

<script>
import pagination from './pagination';

export default {
  data(){
    return{
      lists:[],
      page:{
          pageTotal:1,//总页数
          rows:1, //总条数
          pageNo:1, //页码
          pageSize:10//每一页条数
      }
    }
  },
  components:{
    pagination
  },
  //监听pageNo的变化，调用getData()
  watch:{
    'page.pageNo'(newValue,oldValue){
      this.getData(newValue);
    }
  },
  methods:{
    getData(i){
      this.page.pageNo = i ||this.page.pageNo;
      this.$http.get(`http://47.96.117.121:7002/home/page/${this.page.pageNo}/${this.page.pageSize}`).then(res=>{
        console.log(res);
        var {data,pageTotal,rows} = res.data;
        this.lists = data;
        this.page.pageTotal = pageTotal;
        this.page.rows =rows;
      })
      .catch(error=>{

      })
    },
    
  },
  computed:{
    num(){
      return function(i){
        var {pageNo,pageSize} = this.page;
        return (pageNo-1)*pageSize+i+1;
      }
      
    }
  },
  mounted(){
    this.getData();
  }
}
</script>


