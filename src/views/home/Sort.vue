<template>
<div>
  <div class="sort" @scroll="evolve">
    <div class="sort-list">
      <div class="sort-one" v-for="item in sortList" :key="item.id">
        <div class="sort-top">
          <img :src="item.top.src" alt="">
          <p>{{ item.top.title }}</p>
        </div>
        <div class="sort-bottom">
          <img :src="item.bottom.src" alt="">
          <p>{{ item.bottom.title }}</p>
        </div>
      </div>  

    </div>
  </div>
  <div class="scrollbar">
    <div>
      <div :style="{'transform': `translate(${mix}%)`}"></div>
    </div>
  </div>
</div>
</template>
<script>
import fetch from '@/api/fetch.js'
export default {
  data(){
    return {
      sortList:[],
      mix: 0
    }
  },
  mounted(){
    fetch('/db/sort.json',res=>{
      this.sortList = res.data
    })
  },
  methods:{
    evolve(e){
      let maxScroll = e.target.scrollWidth - e.target.clientWidth
      let nowScroll = e.target.scrollLeft
      this.mix = Math.ceil(nowScroll/maxScroll * 150)
    }
  }
}
</script>
<style lang='scss'>
@mixin sort {
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    width: 1.626667rem;
    height: 1.28rem;
  }
  p{
    font-size: .293333rem;
    color: rgb(102, 102, 102);
    line-height: .4rem;
    margin-top: .106667rem;
  }
}
  .sort{
  
    width: 100%;
    background: #fff;
    overflow: auto;
    position: relative;
    &::-webkit-scrollbar {
      display: none;
    }
    .sort-list{
      width: 1.626667rem;
      display: flex;
      .sort-one{
        display: flex;
        flex-direction: column;
        margin-left: .306667rem;
        height: 4.16rem;
        justify-content: center;
        .sort-top{
          @include sort()
        }
        .sort-bottom{
          @include sort()
        }
      }
    }
  }
  .scrollbar{
    display: flex;
    width: 100%;
    height: .533333rem;
    background-color: rgb(255, 255, 255);
    justify-content: center;
    align-items: center;
    div{
      width: 1.333333rem;
      height: .08rem;
      background-color: rgb(212, 216, 222);
      border-radius: 4px;
      div{
        width: .533333rem;
        height: .08rem;
        background-color: rgb(255, 109, 42);
        will-change: transform;
        border-radius: 4px;
      }
    }
  }
</style>