<template>
  <div class="addCart">
    <div class="shop" style="color:#f40">
      <i class="fa fa-shopping-bag"></i>
      <span>店铺</span>
    </div>
    <div class="cus">
      <i class="fa fa-phone"></i>
      <span>客服</span>  
    </div>
    <div class="collection">
      <i class="fa fa-star-o"></i>
      <span>收藏</span>
    </div>
    <div class="addbtn">
      <div class="bottom-bar-btn cart btn-pos-left" @click="addcart">
        <span class="btn-title">加入购物车</span>
      </div>
      <div class="bottom-bar-btn buy btn-pos-right" @click="addcart">
        <span class="btn-title" >立即购买</span>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
import { mapState,mapMutations } from 'vuex'
export default {
  data(){
    return {
      val:''
    }
  },
  computed:{
    ...mapState('xpStore',['addGoods','detailGood'])
  },
  methods:{
    ...mapMutations('xpStore',['getShopCartList']),
    addcart(){
      // 添加成功提示框
      Toast({
        message: '请选择商品参数',
      })
      // 触发Mutations里的方法
      this.getShopCartList(this.addGoods)
    }
  }
}
</script>
<style lang='scss'>
@mixin shop{
  height: 100%;
  color: #999;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  i{
    font-size: .48rem;
  }
  span{
    font-size: .266667rem;
  }
}
.addCart{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1.466667rem;
  box-sizing: border-box;
  padding: .2rem .266667rem;
  background: #fff;
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.15) 0 .026667rem .16rem;
  display: flex;
  justify-content: space-between;
  .shop{
    @include shop()
  }
  .cus{
    @include shop()
  }
  .collection{
    @include shop()
  }
  .addbtn{
    width:6.4rem;
    display: flex;
    .btn-pos-left {
      border-radius: .533333rem 0 0 .533333rem;
      background-image: linear-gradient(to right, #FFC500, #FF9402);
    }
    .btn-pos-right {
      border-radius: 0 .533333rem .533333rem 0;
      background-image: linear-gradient(to right, #FF7A00, #FE560A);
    }
    .bottom-bar,.bottom-bar-btn {
      width: 50% !important;
      height: 1.066667rem;
      bottom: 0.12rem;
      line-height: 1.066667rem;
      color: #fff;
      text-align: center;
      font-size: .373333rem;
      cursor: pointer;
      padding: 0;
    }
  }
}
</style>