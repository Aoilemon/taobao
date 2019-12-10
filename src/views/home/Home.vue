<template>
  <div class="home">
    <SearchBar/>
    <Swiper/>
    <Sort/>
    <HotShop/>
    <Guess @getId='getId'/>
    <NavBar/>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import SearchBar from './SearchBar'
import Swiper from './Swiper'
import Sort from './Sort'
import HotShop from './HotShop'
import Guess from './Guess'
import fetch from '@/api/fetch'
import { mapMutations } from 'vuex'
export default {
  data(){
    return{
      detail:[],
      detailId:'',
      detailGood:{}
    }
  },
  components:{
    NavBar,
    SearchBar,
    Swiper,
    Sort,
    HotShop, 
    Guess
  },
  mounted(){
    fetch('/db/detail.json',res=>{
      this.detail = res.data
    })
  },
  methods:{
    ...mapMutations("xpStore",['getDetailGood']),
    getId(id){
      this.detailId = id
      let detailGood = this.detail.find((item)=>{
        return item.id === id
      })
      this.detailGood = detailGood
      this.getDetailGood(this.detailGood)
    }
  }
}
</script>
<style lang='scss'>
  .home{
    padding:.986667rem 0 1.333333rem 0;
    background: #f4f4f4;
  }
</style>