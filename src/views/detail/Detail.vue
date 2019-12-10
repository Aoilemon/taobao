<template>
  <div class="detail"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10"
  >
    <Banner/>
    <Options/>
    <AddCart/>
    <Guess v-if="loadmore"/>
  </div>
</template>
<script>
import Banner from './Banner'
import Options from './Options'
import AddCart from './AddCart'
import Guess from '../home/Guess'

import Vue from 'vue'
import { InfiniteScroll } from 'mint-ui';
import { Indicator } from 'mint-ui';
Vue.use(InfiniteScroll);

export default {
  data(){
    return{
      loadmore:false
    }
  },
  components:{
    Banner,
    Options,
    AddCart,
    Guess
  },
  methods:{
    loadMore(){
     if(!this.loadmore){
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
     }else{
       Indicator.close()
     }
      setTimeout(() => {
        this.loadmore = true
      }, 2000);
    }
  }
}
</script>
<style lang='scss'>
  .detail{
    background: #f4f4f4;
    padding-bottom: 1.8rem;
  }
</style>