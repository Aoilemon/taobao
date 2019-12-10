<template>
  <div class="home">
    <SearchBar/>
    <Swiper/>
    <Sort/>
    <HotShop/>
    <Guess/>
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
export default {
  components:{
    NavBar,
    SearchBar,
    Swiper,
    Sort,
    HotShop,
    Guess
  }
}
</script>
<style lang='scss'>
  .home{
    padding:.986667rem 0 1.333333rem 0;
    background: #f4f4f4;
  }
</style>