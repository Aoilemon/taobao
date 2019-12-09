<template>
  <div class="swiper">
    <mt-swipe :auto="1500">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  
}
</script>
<style lang='scss'>
  .swiper{
    height: 3.2rem;
    width: 9.333333rem;
    background:#f50;
    margin: 0;
    width: 100%
  }
</style>