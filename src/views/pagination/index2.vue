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
          <nav aria-label="Page navigation" style="text-align: center;">
              <ul class="pagination">
                  <li @click="pagePre()">
                      <a aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                      </a>
                  </li>
                  <li  v-for="(v,i) in pages" :key="i"
                       @click="pageCur(v)"
                       :class="page.pageNo == v?'active':''" >
                    <a>{{v}}</a>
                  </li>
                  <li @click="pageNext()">
                      <a aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                      </a>
                  </li>
              </ul>
          </nav>
      </div>
</div>
</template>

<script>

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
    //当前页
    pageCur(v){
      if(v=='...') return;
      this.getData(v);
    },
    //上一页
    pagePre(){
      var {pageNo} = this.page;
      if(pageNo>1){
        this.getData(--this.page.pageNo);
      }
    },
    //下一页
    pageNext(){
       if(this.page.pageNo<this.page.pageTotal){
        this.getData(++this.page.pageNo);
      }
    }
  },
  computed:{
    //1、总页数小于10个，不添加...
    // 2、总页数大于10个，添加...
    // ...添加在后面   1，2，3，4，5，... 21
    // ...添加在前面  1... 17 18 19 20 21
    // ...添加在二边   1...  10 11 12 13 14 15...21
    pages(){
      var {pageNo,pageTotal} = this.page;
      if(pageTotal<10) return pageTotal;
      if(pageNo<=5){
        return [1,2,3,4,5,6,7,'...', pageTotal]
      }else if(pageNo >=pageTotal-5){
        return [1,'...',pageTotal-6, pageTotal-5,pageTotal-4,pageTotal-3,pageTotal-2,pageTotal-1,pageTotal]
      }else {
        return [1,'...',pageNo-3, pageNo-2,pageNo-1,pageNo,pageNo+1,pageNo+2,pageNo+3,'...',pageTotal]
      }
    },
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


