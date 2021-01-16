<template>
<nav aria-label="Page navigation" style="text-align: center;">
    <ul class="pagination">
        <li @click="pagePre()">
            <a aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
        <li  v-for="(v,i) in pages" :key="i"
              @click="pageCur(v)"
              :class="pageNo == v?'active':''" >
          <a>{{v}}</a>
        </li>
        <li @click="pageNext()">
            <a aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </a>
        </li>
    </ul>
</nav>
</template>

<script>
export default {
  data(){
    return{
      curNo:1
    }
  },
  props:['pageTotal','pageNo'],
  created(){
    this.curNo = this.pageNo;
  },
  methods:{
    //当前页
    pageCur(v){
      if(v=='...') return;
      this.curNo = v;
     //this.$emit('e-child',v);
     this.$emit('update:pageNo',v)
    },
    //上一页
    pagePre(){
      if(this.pageNo>1){
        //this.$emit('e-child',--this.curNo);
        this.$emit('update:pageNo',--this.curNo)
      }
    },
    //下一页
    pageNext(){
       if(this.pageNo<this.pageTotal){
        //this.$emit('e-child',++this.curNo);
        this.$emit('update:pageNo',++this.curNo)
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
      var pageNo= this.pageNo;
      var pageTotal = this.pageTotal;
      if(pageTotal<10) return pageTotal;
      if(pageNo<=5){
        return [1,2,3,4,5,6,7,'...', pageTotal]
      }else if(pageNo >=pageTotal-5){
        return [1,'...',pageTotal-6, pageTotal-5,pageTotal-4,pageTotal-3,pageTotal-2,pageTotal-1,pageTotal]
      }else {
        return [1,'...',pageNo-3, pageNo-2,pageNo-1,pageNo,pageNo+1,pageNo+2,pageNo+3,'...',pageTotal]
      }
    }
  },
}
</script>


