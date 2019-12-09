<template>
  <div class="home">
    <SearchBar/>
    <Swiper/>
    <Sort/>
    <HotShop/>
    <Guess/>
  </div>
</template>
<script>
import SearchBar from './SearchBar'
import Swiper from './Swiper'
import Sort from './Sort'
import HotShop from './HotShop'
import Guess from './Guess'
export default {
  components:{
    SearchBar,
    Swiper,
    Sort,
    HotShop,
    Guess
  }
}
</script>
<style lang='scss'>

</style>