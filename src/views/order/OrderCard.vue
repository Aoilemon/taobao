<template>
  <div class="ordercard-page" v-if="item&&item.title">
    <!-- 头部 -->
    <div class="order-head">
      <div class="head-left">
        <img src="//gw.alicdn.com/tfs/TB1LmH7SXXXXXXYXFXXXXXXXXXX-63-63.png_50x50_.webp" alt="">
        <span>GGBoom</span>
      </div>
      <div class="head-right">
        <span>待付款</span>
      </div> 
    </div>
    <!-- 商品 -->
    <div class="good-center" >
      <img :src="item.buyimg" alt="">
      <div class="name-and-price">
        <span class="names">{{ item.title }}</span>
        <div class="price-num">
          <span class="prices">￥{{ item.buyPrice }}</span>
          <span class="num">×{{ item.num }}</span>
        </div>
      </div>
    </div>
    <!-- 商品价格和数量 -->
    <div class="yuan">
      <div class="shangping">共一件商品</div>
      <div class="money">合计:￥{{ totalPrice }}</div>
    </div>
    <!-- 删除订单 -->
    <div class="btn clearfix">
      <span>待付款</span>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  props:['item'],
  methods:{
    ...mapMutations('xpStore',['updateSummaryList'])
  },
  computed:{
    totalPrice(){
      return this.item.buyPrice * this.item.num
    }
  }
}
</script>
<style lang='scss' >
.ordercard-page{
    // margin: 0 0.12rem .16rem;
    margin-bottom: .16rem;
    border-radius: 12px;
    overflow: hidden;
    width: 9.36rem;
    height: 6.2rem;
    background: white;
    margin: 0 auto;
    margin-bottom: .266667rem;
    .order-head{
      width: 9.36rem;
      height: 1.253333rem;
      display: flex;
   }
   .head-left{
     width: 2.453333rem;
     height: 1.253333rem;
     display: flex;
     align-items: center;
     img{
       width: .4rem;
       height: 0.4rem;
       margin-left: .386667rem;
       
     }
     span{
       font-size: .32rem;
       color: #000000;
       margin-left: .23333rem;
       
     }
    
   }
    .head-right{
       width: 6.266667rem;
       height: 1.253333rem;
       span{
          float:right;
          position: relative;
          display: flex;
          flex: 1 1 0%;
          font-size: 12px;
          color: rgb(255, 80, 0);
          margin: 16px 12px;
          height: auto;
          justify-content: flex-end;
          align-items: center;
          overflow: hidden;
          max-width: none;
       }
     }
     .good-center{
       width: 100%;
       height: 2.4rem;
       margin-bottom: .32rem;
       display: flex;
       img{
         width:2.4rem;
         height:2.4rem;
         margin-left: .32rem;
       }
     }
      .name-and-price{
        display: flex;
        background-color: rgb(255, 255, 255);
        height: auto;
        margin-right: .32rem;
        width: 6rem;
        .names{
          font-size: .32rem;
          color: #000000;
          line-height: .373333rem;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 4.533333rem;
          margin-left: 10px;
        }
        .price-num{
          margin-right: .32rem;
          display: flex;
          align-items: flex-end;
          margin-left: 20px;
          flex-direction: column;
          .prices{
            font-size: .32rem;
          }
          .num{
            font-size: .32rem;
            color: #999999;
            margin-left: .133333rem;
          }
        }
      }
      .yuan{
        width: 9.36rem;
        height: .853333rem;
        display: flex;
        margin-top: .3rem;
        .shangping{
          font-size: .32rem;
          color: #999999;
          margin-left:5rem;
          margin-right: .266667rem;
        }
        .money{
          font-size: .32rem;
          color: #333333;
        }
      }
      .btn{
        display: flex;
        color: rgb(102, 102, 102);
        height: .746667rem;
        width: 2.133333rem;
        font-size: 13px;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border: 1px #666 solid;
        border-radius: .433333rem;
        float: right;
        margin-top: .133333rem;
        span{
          font-size: .346667rem;
          color: #666666;
          
        }
      }
}
</style>