<template>
  <div class="guess"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="aa"
  >
    <div class="recommend-hd">
      <img src="https://img.alicdn.com/tfs/TB1V2eQrKSSBuNjy0FlXXbBpVXa-966-114.png" alt="">
    </div>
    <div 
      class="recommend-item" 
      v-for="item in good" 
      :key="item.idx" 
      @click="toDetail(item.id)"
    >
    <a class="recommend-img-wrapper triggerClick">
      <img class="recommend-img lazyload" :src="item.src">
    </a>
    <a class="recommend-info triggerClick">
      <div class="recommend-title">
        <span class="recommend-title-p">{{ item.title }}</span>
      </div>
      <div class="recommend-price-box">
        <span class="recommend-sign recommend-h">￥</span>
        <span class="recommend-price">{{ item.price }}</span>
        <span class="recommend-payed">{{ item.number }}人已购买</span>
      </div>
    </a>
    </div>
  </div>
</template>
<script>
import fetch from '@/api/fetch.js'
import Vue from 'vue'
import { InfiniteScroll } from 'mint-ui';
import { Indicator } from 'mint-ui';
import { mapMutations } from 'vuex'
Vue.use(InfiniteScroll);
export default {
  data(){
    return {
      goodList:[],
      loading:false,
      showFlag:false,
      detailGood:{},
      good:[],
      aa:20
    }
  },
  mounted(){
    fetch('/db/detail.json',res=>{
      this.goodList = res.data
    })
  },
  methods:{
     ...mapMutations("xpStore",['getDetailGood']),
    toDetail(id){
      if(this.$route.fullPath !== `/detail/${id}`){
        this.$emit('getId',id)
        window.location.href = "#top";
        this.$router.replace(`/detail/${id}`)

        let detailGood = this.goodList.find((item)=>{
          return item.id === id
        })
        this.detailGood = detailGood
        this.getDetailGood(this.detailGood)
      }
    },
    loadMore(){
      this.showFlag = true
      this.loading = true
      Indicator.open('加载中...');
      setTimeout(() => {
        fetch('/db/like.json',res=>{
          let arr = res.data
          this.good.push(...arr)
          this.loading = false
          Indicator.close()
        })       
      }, 1000);
    }
  }
}
</script>
<style lang='scss'>
.guess{
  padding: 0 .2rem;
  display: flex;
  position: relative;
  box-sizing: border-box;
  flex-direction: row;
  place-content: flex-start space-between;
  flex-shrink: 0;
  overflow: hidden;
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
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    background: #fff;
    margin-top: .24rem;
    border-radius: .16rem;
    overflow: hidden;
    margin: 0 .12rem;
    margin-top: .266667rem;
    .recommend-img-wrapper{
      height: 4.56rem;
      align-items: center;
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
        height: 1.11rem;
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