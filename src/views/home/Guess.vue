<template>
  <div class="guess">
    <div class="recommend-hd">
      <img src="https://img.alicdn.com/tfs/TB1V2eQrKSSBuNjy0FlXXbBpVXa-966-114.png" alt="">
    </div>
    <div class="recommend-item"><a class="recommend-img-wrapper triggerClick" data-index="0">
        <img class="recommend-img lazyload" src="//gw.alicdn.com/bao/uploaded/i3/T16b5mFDpgXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp">
      </a>
      <a class="recommend-info triggerClick" data-index="0">
        <div class="recommend-title">
          <span class="recommend-title-p">Nina出口法国 玛德琳外贸欧式复古乡村实木餐椅休闲扶手椅书桌椅</span>
        </div>
        <div class="recommend-price-box">
          <span class="recommend-sign recommend-h">￥</span>
          <span class="recommend-price">999</span>
          <span class="recommend-payed">5人已购买</span>
        </div>
      </a>
      </div>
      
  </div>
</template>
<script>
export default {

}
</script>
<style lang='scss'>
.guess{
  padding: 0 .2rem;
  display: flex;
  position: relative;
  box-sizing: border-box;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  place-content: flex-start space-between;
  flex-shrink: 0;
  overflow: hidden;
  -webkit-box-pack: justify;
  flex-wrap: wrap;
  .recommend-hd{
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    img{
      width: 4.293333rem;
      height: .506667rem;
    }
  }
  .recommend-item {
    height: 6.933333rem;
    position: relative;
    width: 4.56rem;
    box-sizing: border-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    background: #fff;
    margin-top: .24rem;
    border-radius: .16rem;
    overflow: hidden;
    margin: 0 .12rem;
    .recommend-img-wrapper{
      -webkit-box-align: center;
      height: 4.56rem;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      img{
        width: 4.56rem;
        height:4.56rem;
      }
    }
    .recommend-info{
      padding: 0 .24rem 0 .266667rem;
      height: 2.506667rem;
      text-decoration: none;
      .recommend-title{
        margin-top: .173333rem;
        height: 1.066667rem;
        position: relative;
        overflow: hidden;
        line-height: .333333rem;
        text-overflow: ellipsis;
        min-height: 0;
        .recommend-title-p {
          font-size: .346667rem;
          color: #333333;
        }
      }
      .recommend-price-box{
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        flex-direction: row;
        margin-top: .16rem;
        height: .533333rem;
        line-height: .533333rem;
        .recommend-sign{
          font-size: .293333rem;
          line-height: .533333rem;
          color:#ff5500
        }
        .recommend-price{
          font-size: .373333rem;
          line-height: .426667rem;
          color: #ff5500;
          margin: 0 .133333rem;
        }
        .recommend-payed{
          font-size: .293333rem;
          color: #999999;
          margin-top: .053333rem;
        }
      }
    }
  }
}
</style>