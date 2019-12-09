<template>
  <div class="home">
    <SearchBar/>
    <Swiper/>
    <Sort/>
    <HotShop/>
  </div>
</template>
<script>
import SearchBar from './SearchBar'
import Swiper from './Swiper'
import Sort from './Sort'
import HotShop from './HotShop'
export default {
  components:{
    SearchBar,
    Swiper,
    Sort,
    HotShop
  }
}
</script>
<style lang='scss'>    
  .home{
    &::-webkit-scrollbar {
      display: none;
    }
  } 
</style>