<template>
  <div class="CartIn">
      <div class="CartIn-head">
        <div class="CartIn-head-top">
          <h2>购物车(0)</h2>
          <span>管理</span>
        </div>
      </div>
          <p class="all">共{{ total }}件宝贝</p>

    <div style="position:absolute;top:2.66666rem;left:0.266666rem;margin-bottom:2.66666rem">
      <Good
        v-for="item in shopCartList"
        :key="item.id"
        :item='item'
        :total='shopCartList.length'
      ></Good>
    </div>
  <count :totalPrice='totalPrice'></count>
  </div>  
</template>
<script>
import { mapState } from 'vuex'
import { Checklist } from 'mint-ui';
import Count from './Count.vue'
import Good from './Good.vue'
export default {
  props:['total'],
  data:function(){
    return{
      value:[]
    }
  },
  components:{
    [Checklist.name]: Checklist,
    Count,
    Good
  },
  computed:{
    ...mapState('xpStore',['shopCartList']),
    totalPrice(){
      let totalPrice = 0 
      this.shopCartList.forEach(item => {
        totalPrice += item.num * item.buyPrice
      })
      return totalPrice
    }
  },
  methods:{

  },
  mounted(){
    console.log(this.totalPrice)
  }
}
</script>
<style lang='scss'>
.CartIn{
  overflow: hidden;
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
    font-size: .62rem;
    color:white;
    background-image: -webkit-linear-gradient(right, #FF5000 0%, #FF8400 100%);
    padding: .433333rem .32rem 3rem .32rem;
  }
}
</style>