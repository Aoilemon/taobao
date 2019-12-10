<template>
  <div class="banner">
    <div class="pic-gallery-wrapper">
      <mt-swipe :auto="2000" :show-indicators="false">
        <mt-swipe-item>
          <img src="//img.alicdn.com/imgextra/i4/1044984142/TB28jzAxEdnpuFjSZPhXXbChpXa_!!1044984142.jpg_640x640q80_.webp" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="//img.alicdn.com/imgextra/i1/1044984142/TB2HbvFxEhnpuFjSZFEXXX0PFXa_!!1044984142.jpg_640x640q80_.webp" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="//img.alicdn.com/imgextra/i4/1044984142/TB2KTOvxxtmpuFjSZFqXXbHFpXa_!!1044984142.jpg_640x640q80_.webp" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 返回上级 和 进入购物车-->
    <div class="back-cart">
      <button class="btn-back" @click="goBack">
        <i class="fa fa-angle-left"></i>
      </button>
      <button class="taobao-iconfont" @click="goCart">
        <i class="fa fa-shopping-cart"></i>
      </button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  methods:{
    goBack(){
      this.$router.go(-2)
    },
    goCart(){
      this.$router.push('/cart')
    }
  }
}
</script>
<style lang='scss'>
@mixin btn {
  display: flex;
  justify-content: center;
  width: .906667rem;
  height: .906667rem;
  border: 0;
  border-radius: 100%;
  text-align: center;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
}
  .banner{
    position: relative;
    background: #f4f4f4;
    .pic-gallery-wrapper{
      height: 10rem;
      .mint-swipe{
        transform: translateZ(0);
      }
      img{
        width: 100%;
        height: 100%;
        margin: 0 auto;
      }
    }
    .back-cart{
      box-sizing: border-box;
      width: 100%;
      position: absolute;
      top: .533333rem;
      left: 0;
      display: flex;
      z-index: 110;
      justify-content: space-between;
      padding: 0 .266667rem;
      .btn-back{
       @include btn();
        i.fa{
          font-size:.613333rem;
        }
      }
      .taobao-iconfont {
        @include btn();
        i.fa{
          font-size:.56rem;;
        }
      }
    }
  }
</style>