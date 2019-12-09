<template>
  <div class="swiper">
    <mt-swipe :auto="1500">
      <mt-swipe-item v-for="item in bannerList" :key="item.id">
        <img :src="item.src" alt="">
        {{ item }}
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';
import fetch from '@/api/fetch'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  data(){
    return{
      bannerList:[]
    }
  },
  methods:{
    
  },
  mounted(){
    fetch('/db/swiper.json',(data)=>{
      this.bannerList = data.data
    })
  }
}
</script>
<style lang='scss'>
  .swiper{
    height: 3.2rem;
    width: 9.333333rem;
    background:#f50;
    margin: 0;
    width: 100%;
    img{
      width: 100%;
    }
  }
</style>