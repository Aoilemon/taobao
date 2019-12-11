<template>
  <div class="cart-page">
      <div class="shop-car">
        <h2>购物车(0)</h2>
      </div>
      <div class="cart-center">
        <img  :src="shopCar2.src" alt="">
        <p>购物车竟然是空的</p>
        <span>再忙，也要记得买点什么犒赏自己~</span>
        <div class="btn">去逛逛</div>
      </div>
      <!-- <CartIn></CartIn> -->
      <NavBar/>
  </div>
</template>
<script>
// import CartIn from './CartIn'
import NavBar from '@/components/NavBar'
import { shopCar2 } from '@/assets/index.js'
export default {
  data:function(){
    return{
      shopCar2,
      NavBar
    }
  },
  components:{
    // CartIn
  }
}
</script>
<style lang='scss'>
.cart-page{
  background: #ccc;
  .shop-car{
    display: flex;
    padding: .533333rem .32rem 2.4rem 0rem;
    color: #fff;
    background-image: linear-gradient(to right, #FD9126, #FF5000)

    h2{
      font-size: .533333rem;
      line-height: .586667rem;
      display: flex;
      padding-left: .32rem;
  
    }
  }
  .cart-center{
    width: 10rem;
    height: 6.6rem;
    text-align: center;
    background: rgb(242, 242, 242);
    img{
      width: 2.933333rem;
      height: 2.933333rem;
      padding-top: .333333rem;
    }
    p{
      font-size: .48rem;
      margin:.333333rem  0 .233333rem 0;

    }
    span{
      font-size: .346667rem;
      display: block;
      margin-bottom: .4rem;

    }
    .btn{
      width: 2.186667rem;
      height: .986667rem;
      border: 1px solid #ccc;
      font-size: .373333rem;
      text-align: center;
      line-height: .986667rem;
      margin: 0 auto;


    }
  }

}
</style>