<template>
  <div class="CartIn">
      <div class="CartIn-head">
        <div class="CartIn-head-top">
          <h2>购物车(0)</h2>
          <span class="">管理</span>
        </div>
      </div>
          <p class="all">共5件宝贝</p>

  <Good></Good>
  <count></count>
  </div>  
</template>
<script>
import { Checklist } from 'mint-ui';
import Count from './Count.vue'
import Good from './Good.vue'
export default {
  data:function(){
    return{
      value:[]
    }
  },
  components:{
    [Checklist.name]: Checklist,
    Count,
    Good
  }
}
</script>
<style lang='scss'>
.CartIn{
  overflow: hidden;
  background: #ccc;
  .CartIn-head{
    background-image: -webkit-linear-gradient(right, #FF5000 0%, #FF8400 100%);
    .CartIn-head-top{
      color: #fff;
      display: flex;
      justify-content: space-between;
      padding: .533333rem .32rem 0rem 0rem;
       h2{
      font-size: .533333rem;
      line-height: .586667rem;
      display: flex;
      padding-left: .32rem;
      }
      span{
        font-size: .4rem;
      }
      }
  }
  .all{
    font-size: .32rem;
    color:white;
    background-image: -webkit-linear-gradient(right, #FF5000 0%, #FF8400 100%);
    padding: .433333rem .32rem 3rem .32rem;
  }
}
</style>