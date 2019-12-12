<template>
  <div class="CartIn">
      <div class="CartIn-head">
        <div class="CartIn-head-top">
          <h2>购物车(0)</h2>
          <span>管理</span>
        </div>
      </div>
          <p class="all">共{{ total }}件宝贝</p>
    <!-- 购物车商品列表组件 -->
    <div style="position:absolute;top:2.66666rem;left:0.266666rem;margin-bottom:2.66666rem">
      <Good
        v-for="item in shopCartList"
        :key="item.id"
        :item='item'
        :total='shopCartList.length'
        :allChecked='allChecked'
        :type="type"
        @selGoods='selGoods'
        @del='del'
        @changeNum='changeNum'
      ></Good>
    </div>
    <!-- 全选和结算组件 -->
    <count 
      :totalPrice='totalPrice' 
      :allcheck='allChecked'
      :count='this.goods.length'
      @changeAllChecked="changeAllChecked"
      @delAll='delAll'

    ></count>

  </div>  
</template>
<script>
import { mapState } from 'vuex'
import Count from './Count.vue'
import Good from './Good.vue'
import { mapMutations } from 'vuex'
export default {
  props:['total'],
  data:function(){
    return{
      value:[],
      goods:[],
      allChecked:false,
      idAll:false,
      type:false
    }
  },
  components:{
    Count,
    Good
  },
  computed:{
    ...mapState('xpStore',['shopCartList']),
    // 商品总价
    totalPrice(){
      let allprice = 0
      if(this.goods.length > 0){
        this.goods.forEach(item=>{
          allprice += item.buyPrice*item.num
        })
      }else{
        allprice = 0
      }
      return allprice
    },

  },
  methods:{
    ...mapMutations('xpStore',['updateCartGoods']),
    selGoods(good){
      // 判断并添加已选中的商品
      console.log(this.goods)
      if(good.type){
        this.goods.push(good.goods)
      }else{
        let index = this.goods.findIndex(item => item.id === good.goods.id)
        this.goods.splice(index,1)
        index = null
      }
      // 判断商品是否已经全部选中
      if(this.goods.length === this.shopCartList.length){
        this.allChecked = true
        this.type = true
      }else{
        this.allChecked = false
      }
    },
    // 全选和反选
    changeAllChecked(type){
      if(type){
        this.allChecked = type
        this.goods = [...this.shopCartList]
        this.type = type
      }else{
        this.allChecked = type
        this.goods = []
        this.type = type
      }
    },
    // 删除单个商品
    del(good){
      let index = this.shopCartList.findIndex(item => item.id === good.id)
      this.shopCartList.splice(index,1)
      this.goods = []
      if(this.shopCartList.length === 0){
          this.updateCartGoods(this.shopCartList)
        }
    },
    // 删除选中商品
    delAll(isDelAll){
      if(isDelAll){
        this.shopCartList.splice(0)
        if(this.shopCartList.length === 0){
          this.updateCartGoods(this.shopCartList)
        }
      }
      this.goods.forEach(item=>{
        let index = this.shopCartList.findIndex(item2 => item.id === item2.id)
        this.shopCartList.splice(index,1)
        this.goods = []
         if(this.shopCartList.length === 0){
          this.updateCartGoods(this.shopCartList)
        }
      })
    },
    // 自定义商品数量
    changeNum(good){
      let index = this.shopCartList.findIndex(item => item.id === good.item.id)
      this.shopCartList[index].num = Number(good.num)
    }
  },
  watch:{
    shopCartList(){
      console.log('aa')
      this.updateCartGoods(this.shopCartList)
    }
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