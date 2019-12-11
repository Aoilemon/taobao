<template>
  <div class="user-page">
    <div class="user-page-user">
      <div class="user-page-rubbish"></div>
      <!-- 个人信息 -->
      <div class="user-page-msg">
        <!-- 头像 -->
        <div class="user-page-tx">
          <img src="http://gw.alicdn.com/sns_logo/i3/O1CN011wTZFHNZJSCYVD1_!!0-mytaobao.jpg_100x100q90_.webp" alt="">
        </div>
        <!-- 昵称 -->
        <span class="vipname">塞林木</span>
        <!-- 右边小图标 -->
        <div class="user-page-icon">
          <!-- 第一个小图标的盒子 -->
          <div class="user-page-icon-box1">
            <div class="icon1"></div>
          </div>
            <!-- 第二个小图标的盒子 -->
          <div class="user-page-icon-box2">
            <div class="icon2"></div>
          </div>
        </div>
      </div>
      <!--收藏夹等等 -->
      <div class="user-page-num">
        <div class="user-page-num-box">
          <!-- 收藏夹 -->
          <div class="scj">
            <div class="scj-num">6</div>
            <div class="scj-name">收藏夹</div>
          </div>
          <!-- 关注店铺 -->
          <div class="gzdp">
            <div class="scj">
              <div class="scj-num">66</div>
              <div class="scj-name">关注店铺</div>
            </div>
          </div>
          <!-- 足迹 -->
          <div class="zj">
            <div class="scj">
              <div class="scj-num">666</div>
              <div class="scj-name">足迹</div>
            </div>
          </div>
          <!-- 红包卡券 -->
          <div class="hbkq">
            <div class="scj">
              <div class="scj-num">6666</div>
              <div class="scj-name">红包卡券</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MyOrder></MyOrder>
    <Tool></Tool>
  </div>
</template>
<script>
import MyOrder from "./MyOrder.vue"
import Tool from './Tool.vue'
export default {
  data:function(){
    return {
      
    }
  },
  components:{
    MyOrder,
    Tool
  }
}
</script>
<style lang='scss'  >
  .user-page{
    .user-page-user{
      display: flex;
      overflow: hidden;
      width: 10rem;
      flex-direction: column;
      background-image: linear-gradient(to right, #FD9126, #FF5000);
    }
    .user-page-rubbish{
      display: flex;
      overflow: hidden;
      flex: 0 0 auto;
      width: 10rem;
      height: .533333rem;
      align-self: flex-start;
      position: relative;
    }
    .user-page-msg{
      display: flex;
      overflow: hidden;
      flex: 0 0 auto;
      width: 10rem;
      height: 2.16rem;
      align-self: flex-start;
      position: relative;
    }
    .user-page-tx{
      display: flex;
      overflow: hidden;
      position: absolute;
      border-top-left-radius: .666667rem;
      border-top-right-radius: .666667rem;
      border-bottom-left-radius: .666667rem;
      border-bottom-right-radius: .666667rem;
      margin-left:.48rem;
      margin-top: .746667rem;
      width: 1.333333rem;
      height: 1.306667rem;
      left: 0;
      top: 0;
      img{
        width: 100%;
      }
    }
    .vipname{
      line-height: 24px;
      font-size: .533333rem;
      color: antiquewhite;
      font-weight: bold;
      margin-top: 25px;
      margin-left: 79px
    }
    .user-page-icon{
      display: flex;
      overflow: hidden;
      position: absolute;
      width: 10rem;
      height: auto;
      margin-top: .666667rem;
      margin-left: 8rem;
      flex-direction: row;
      left: 0;
      top: 0;
    }
    .user-page-icon-box1{
      display: flex;
      overflow: hidden;
      flex: 0 0 auto;
      width: .533333rem;
      height:.533333rem;
    }
    .icon1{
      width: 100%;
      height: 100%;
      background-image: url(https://gw.alicdn.com/tfs/TB1tcovekL0gK0jSZFxXXXWHVXa-54-54.png_48x48q90_.webp);
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 100% 100%;
    }
    .user-page-icon-box2{
      display: flex;
      overflow: hidden;
      flex: 0 0 auto;
      width: .533333rem;
      height: .533333rem;
      margin-left: .586667rem;
    }
    .icon2{
      width: 100%;
      height: 100%;
      background-image: url(https://gw.alicdn.com/tfs/TB1dbweXwHqK1RjSZFgXXa7JXXa-57-54.png_48x48q90_.webp);
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 100% 100%;
    }
    .user-page-num{
      display: flex;
      overflow: hidden;
      height: auto;
      width: 10rem;
      flex-direction: column;
      background-image: linear-gradient(to right, #FD9126, #FF5000);
    }
    .user-page-num-box{
      display: flex;
      overflow: hidden;
      flex: 0 0 auto;
      height: 1.786667rem;
      width: 10rem;
      align-self: flex-start;
      position: relative;
      padding-bottom: .3rem;
      background-image: linear-gradient(to right, #FD9126, #FF5000);
    }
    .scj{
      display: flex;
      position: absolute;
      margin-left: .133333rem;
      flex-direction: column;
      
    }
    .scj-num{
      display: flex;
      flex: 0 0 auto;
      margin-top: .28rem;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      width: 2.426667rem;
      height: auto;
      font-size: .373333rem;
      max-width: auto;
    }
    .scj-name{
    display: flex;
    flex: 0 0 auto;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    width: 2.426667rem;
    height: auto;
    font-size: .32rem;
    max-width: auto;
    }
    .gzdp{
      display: flex;
      position: absolute;
      margin-left: 2.56rem;
      flex-direction: column;
    }
    .zj{
      display: flex;
      position: absolute;
      margin-left: 4.986667rem;
      flex-direction: column;
    }
    .hbkq{
      display: flex;
      position: absolute;
      width: 2.426667rem;
      height: 1.626667rem;
      margin-left: 7.413333rem;
      margin-top: 0px;
      flex-direction: column;
    }
  }
</style>