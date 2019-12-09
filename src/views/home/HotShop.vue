<template>
<div>
  <div class="hotshop">
    <div class="hot-group">

      <div class="hot-one">
        <h2>聚划算</h2>
        <div>
          <p>抢大额劵</p>
          <img src="https://gw.alicdn.com/imgextra/i3/133/O1CN01caOb5M1CqxDpCnL3A_!!133-0-lubanu.jpg_180x180q90_.webp" alt="">
        </div>
      </div>

      <div class="hot-one">
        <h2>聚划算</h2>
        <div>
          <p>抢大额劵</p>
          <img src="https://gw.alicdn.com/imgextra/i3/133/O1CN01caOb5M1CqxDpCnL3A_!!133-0-lubanu.jpg_180x180q90_.webp" alt="">
        </div>
      </div>

      <div class="hot-one">
        <h2>聚划算</h2>
        <div>
          <p>抢大额劵</p>
          <img src="https://gw.alicdn.com/imgextra/i3/133/O1CN01caOb5M1CqxDpCnL3A_!!133-0-lubanu.jpg_180x180q90_.webp" alt="">
        </div>
      </div>

      <div class="hot-one">
        <h2>聚划算</h2>
        <div>
          <p>抢大额劵</p>
          <img src="https://gw.alicdn.com/imgextra/i3/133/O1CN01caOb5M1CqxDpCnL3A_!!133-0-lubanu.jpg_180x180q90_.webp" alt="">
        </div>
      </div>

      <div class="hot-one">
        <h2>聚划算</h2>
        <div>
          <p>抢大额劵</p>
          <img src="https://gw.alicdn.com/imgextra/i3/133/O1CN01caOb5M1CqxDpCnL3A_!!133-0-lubanu.jpg_180x180q90_.webp" alt="">
        </div>
      </div>
    </div>
  </div>
  <div class="today-news">
    <span>淘宝头条</span>
    <span class="cat">宠物</span>
    <span>为什么唤猫的名字，它总不...</span>
  </div>
</div>
</template>
<script>
export default {

}
</script>
<style lang='scss'>
  .hotshop{
    margin-top: .266667rem;
    .hot-group{
      position: relative;
      overflow: hidden;
      height:9.68rem;
      margin: 0 .24rem;
      background: #fff;
      border-radius: .133333rem;
      display: flex;
      flex-wrap: wrap;
      .hot-one{
        height: 3.226667rem;
        width: 2.346667rem;
        box-sizing: border-box;
        padding:.266667rem 0 0 .266667rem;
        h2{
          font-size:.426667rem;
        }
        div{
          width: 1.866667rem;
          margin-left: .266667rem;
          p{
            font-size: .32rem;
            margin:.066667rem 0 .106667rem 0;
            color: #f40;
          }
          img{
            width: 1.493333rem;
          }
        }
      }
    }
  }
  .today-news{
    height: 1.066667rem;
    font-size: .426667rem;
    background: #fff;
    margin: 0 .24rem;
    line-height: 1.066667rem;
    color: #666;
    :first-child{
      font-weight: bold;
      margin-left:.4rem;
      color: #444;
    }
    .cat{
      background: #feefec;
      color: #e86217;
      display: inline-block;
      font-size: .32rem;
      height: .533333rem;
      line-height: .533333rem;
      white-space: nowrap;
      background-color: #feefec;
      color: #e86217;
      border-radius: 4px;
      padding: 0 .16rem;
      margin-left: .266667rem;
    }
    :last-child{
      margin-left:.4rem;
      font-size: .32rem; 
    }    
  }
</style>