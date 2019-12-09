<template>
<div>
  <div class="hotshop">
    <div class="hot-group">

      <div class="hot-one" v-for="item in shopList" :key="item.id">
        <h2 v-if="item.head">{{ item.head }}</h2>
        <h2 class="duble" v-else>
          <span>双12抢福利</span>
        </h2>
        <div>
          <p>{{ item.title}}</p>
          <img :src="item.img" alt="">
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
import fetch from '@/api/fetch.js'
export default {
  data(){
    return {
      shopList:[],
    }
  },
  mounted(){
    fetch('/db/goods.json',res=>{
      this.shopList = res.data
    })
  }
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
          height: .56rem;
        }
        .duble{  
          color: #fff;
          text-align: center;
          span{
            background: rgb(255,0,54);
            padding:0.05rem .13333rem;
            display: inline-block;
            border-radius: .106667rem;
            font-size: .266667rem;
          }
        }
        div{
          width: 1.866667rem;
          margin-left: .066667rem;
          p{
            height: .426667rem;
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