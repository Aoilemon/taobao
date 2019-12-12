<template>
  <div class="cart-page">
    <CartIn v-if="shopCartList && shopCartList.length > 0" :total='shopCartList.length'></CartIn>
    <div v-else>
      <div class="shop-car">
        <h2>购物车(0)</h2>
      </div>
      <div class="cart-center">
        <img  :src="shopCar2.src" alt="">
        <p>购物车竟然是空的</p>
        <span>再忙，也要记得买点什么犒赏自己~</span>
        <div class="btn">去逛逛</div>
      </div>
    </div> 
    <NavBar/>
  </div>
</template>
<script>
import CartIn from './CartIn'
import NavBar from '@/components/NavBar'
import { shopCar2 } from '@/assets/index.js'
import { mapState,mapMutations } from 'vuex'
export default {
  data:function(){
    return{
      shopCar2,
    }
  },
  components:{
    CartIn,
    NavBar
  },
  computed:{
    ...mapState('xpStore',['shopCartList'])
  },
  methods:{
    ...mapMutations('xpStore',['updateCartList'])
  },
  mounted(){
    let payload = JSON.parse(localStorage.getItem('shopList'))
    this.updateCartList(payload)
  }
}
</script>
<style lang='scss'>
.cart-page{
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(244,244,244);
  padding-bottom: 2rem;
  .shop-car{
    display: flex;
    padding: .533333rem .32rem 2.4rem 0rem;
    color: #fff;
    background-image: linear-gradient(to right, #FD9126, #FF5000);

    h2{
      font-size: .533333rem;
      line-height: .586667rem;
      display: flex;
      padding-left: .32rem;
  
    }
  }
  .cart-center{
    width: 10rem;
    height: 100%;
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